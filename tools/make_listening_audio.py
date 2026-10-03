# Records the soundtrack for a listening test with Kokoro (Apache-2.0, offline neural voices).
#
# Setup (once):
#   pip install kokoro-onnx soundfile        # ffmpeg and node must also be installed
#   curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
#   curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
#
# Usage, from the repository root:
#   python3 tools/make_listening_audio.py 2 --model-dir /path/to/kokoro-files
#
# Reads docs/listening/test-N.js (each role needs voice, speed and lang), writes
# docs/audio/listening-testN.mp3 and puts the timeline, length and size back into the content file.
import argparse, json, os, random, re, subprocess, tempfile
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

ap = argparse.ArgumentParser()
ap.add_argument('test', type=int)
ap.add_argument('--model-dir', default='.')
args = ap.parse_args()
content = f'docs/listening/test-{args.test}.js'
mp3 = f'docs/audio/listening-test{args.test}.mp3'

data = json.loads(subprocess.check_output(['node', '-e', f"global.window={{}};require('./{content}');const T=window.LISTENING_TEST;process.stdout.write(JSON.stringify({{script:T.script,roles:T.roles}}))"]))
k = Kokoro(os.path.join(args.model_dir, 'kokoro-v1.0.onnx'), os.path.join(args.model_dir, 'voices-v1.0.bin'))
SR = 24000
random.seed(7)
strip = lambda s: re.sub(r'\{\{(.+?)\|\d+\}\}', r'\1', s)

chunks, events, t, part, prev, after_pause = [], [], 0.0, 1, None, False
def add(a):
    global t
    chunks.append(a.astype(np.float32)); t += len(a) / SR
def silence(sec): add(np.zeros(int(SR * sec)))

silence(1.0)
for line in data['script']:
    kind = line[0]
    if kind == 'focus':
        part = line[1]; events.append({'t': round(t, 2), 'focus': part}); continue
    if kind == 'pause':
        events.append({'t': round(t, 2), 'pause': line[1], 'label': line[2]})
        silence(line[1]); prev = None; after_pause = True; continue
    r = data['roles'][kind]
    audio, sr = k.create(strip(line[1]), voice=r['voice'], speed=r.get('speed', 1.0), lang=r.get('lang', 'en-gb'))
    if prev is not None:
        silence(1.1 if 'narrator' in (prev, kind) else random.uniform(0.35, 0.7))
    if after_pause:
        events.append({'t': round(t, 2), 'speech': 1, 'part': part}); after_pause = False
    add(audio); prev = kind
silence(1.5)

with tempfile.TemporaryDirectory() as d:
    wav = os.path.join(d, 'test.wav')
    sf.write(wav, np.concatenate(chunks), SR)
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', wav,
                    '-f', 'lavfi', '-i', f'anoisesrc=color=pink:amplitude=0.0018:sample_rate=24000:duration={t:.2f}',
                    '-filter_complex', '[0:a]highpass=f=70,acompressor=threshold=-20dB:ratio=2.5:attack=10:release=200,loudnorm=I=-18:TP=-1.5:LRA=9[v];[1:a]lowpass=f=6000[n];[v][n]amix=inputs=2:duration=first:normalize=0',
                    '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '64k', mp3], check=True)

minutes = round(t / 60)
mb = max(1, round(os.path.getsize(mp3) / 1e6))
src = open(content).read()
src = re.sub(r'const TIMELINE = \[.*?\];', 'const TIMELINE = ' + json.dumps(events, ensure_ascii=False, separators=(',', ':')) + ';', src, count=1, flags=re.S)
src = re.sub(r'minutes: \d+, mb: \d+', f'minutes: {minutes}, mb: {mb}', src, count=1)
open(content, 'w').write(src)
print(f'{mp3}: {t / 60:.1f} min, {mb} MB, {len(events)} timeline events')
