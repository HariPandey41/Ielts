# Records the examiner clips for a speaking test with Kokoro (Apache-2.0, offline neural voices).
#
# Setup (once): the same as tools/make_listening_audio.py
#   pip install kokoro-onnx soundfile        # ffmpeg and node must also be installed
#   curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
#   curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
#
# Usage, from the repository root:
#   python3 tools/make_speaking_audio.py 4 --model-dir /path/to/kokoro-files
#
# Reads docs/speaking/test-N.js and writes one clip per step to docs/audio/speaking/testN/<clip>.mp3.
# Each step is spoken from its `say` text (the examiner's exact words), or from `q` if it has none.
# The examiner is the voice used for Speaking Tests 1-3: bf_emma at speed 0.95.
import argparse, json, os, subprocess, tempfile
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

ap = argparse.ArgumentParser()
ap.add_argument('test', type=int)
ap.add_argument('--model-dir', default='.')
args = ap.parse_args()
content = f'docs/speaking/test-{args.test}.js'
out_dir = f'docs/audio/speaking/test{args.test}'

T = json.loads(subprocess.check_output(['node', '-e', f"global.window={{}};require('./{content}');process.stdout.write(JSON.stringify(window.SPEAKING_TEST))"]))
assert T['clipBase'] == f'audio/speaking/test{args.test}/', T['clipBase']
k = Kokoro(os.path.join(args.model_dir, 'kokoro-v1.0.onnx'), os.path.join(args.model_dir, 'voices-v1.0.bin'))
SR, PAD = 24000, np.zeros(int(24000 * 0.3), np.float32)
os.makedirs(out_dir, exist_ok=True)

total = 0.0
with tempfile.TemporaryDirectory() as d:
    for step in T['steps']:
        text = step.get('say') or step['q']
        audio, _ = k.create(text, voice='bf_emma', speed=0.95, lang='en-gb')
        wav = os.path.join(d, 'clip.wav')
        sf.write(wav, np.concatenate([PAD, audio.astype(np.float32), PAD]), SR)
        subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', wav,
                        '-af', 'loudnorm=I=-18:TP=-1.5:LRA=9', '-ar', str(SR), '-ac', '1',
                        '-c:a', 'libmp3lame', '-b:a', '64k', os.path.join(out_dir, step['clip'] + '.mp3')], check=True)
        total += len(audio) / SR + 0.6
print(f'{out_dir}: {len(T["steps"])} clips, {total / 60:.1f} min of examiner speech')
