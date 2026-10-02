# Generates the recording for a listening test page with Kokoro (Apache-2.0, offline).
#
# Setup:
#   pip install kokoro-onnx soundfile
#   curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
#   curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
# Export the page's SCRIPT array to script.json, run this file, then master test1.wav to MP3:
#   ffmpeg -i test1.wav -af "highpass=f=70,acompressor=threshold=-20dB:ratio=2.5,loudnorm=I=-18:TP=-1.5" -ac 1 -b:a 64k docs/audio/listening-test1.mp3
# timeline.json gives the part changes and pauses; paste its events into the page's TIMELINE.
import json, re, random, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
random.seed(7)
k = Kokoro("kokoro-v1.0.onnx", "voices-v1.0.bin")
VOICE = {  # role: (voice, speed, lang)
  'narrator': ('bm_george', 0.92, 'en-gb'),
  'tom':      ('am_michael', 1.0, 'en-us'),
  'laura':    ('bf_emma', 0.98, 'en-gb'),
  'claire':   ('af_heart', 0.97, 'en-us'),
  'evans':    ('bm_fable', 0.95, 'en-gb'),
  'mia':      ('bf_isabella', 1.0, 'en-gb'),
  'jake':     ('am_puck', 1.0, 'en-us'),
  'lecturer': ('af_bella', 0.95, 'en-us'),
}
SR = 24000
script = json.load(open('script.json'))
strip = lambda s: re.sub(r'\{\{(.+?)\|\d+\}\}', r'\1', s)
chunks, timeline, t, part, prev = [], [], 0.0, 1, None
def add(a):
    global t
    chunks.append(a.astype(np.float32)); t += len(a) / SR
def silence(sec): add(np.zeros(int(SR * sec)))
silence(1.0)
for i, line in enumerate(script):
    kind = line[0]
    if kind == 'focus':
        part = line[1]; timeline.append({'t': round(t, 2), 'focus': part}); continue
    if kind == 'pause':
        timeline.append({'t': round(t, 2), 'pause': line[1], 'label': line[2], 'part': part})
        silence(line[1]); prev = None; continue
    voice, speed, lang = VOICE[kind]
    audio, sr = k.create(strip(line[1]), voice=voice, speed=speed, lang=lang)
    assert sr == SR
    # gap before this line
    if prev is not None:
        silence(1.1 if (prev == 'narrator' or kind == 'narrator') else random.uniform(0.35, 0.7))
    timeline.append({'t': round(t, 2), 'role': kind, 'part': part, 'i': i})
    add(audio); prev = kind
    print(f'{i:3d} {kind:9s} {t/60:5.1f} min', flush=True)
silence(1.5)
sf.write('test1.wav', np.concatenate(chunks), SR)
json.dump({'duration': round(t, 2), 'events': timeline}, open('timeline.json', 'w'))
print('TOTAL', round(t / 60, 2), 'min')
# sound check clip
a, _ = k.create('This is a sound check. You should be able to hear this voice clearly. Adjust your volume now.', voice='bm_george', speed=0.92, lang='en-gb')
b, _ = k.create('And this is one of the speakers you will hear in the test.', voice='bf_emma', speed=0.98, lang='en-gb')
sf.write('soundcheck.wav', np.concatenate([np.zeros(SR//2), a, np.zeros(int(SR*0.6)), b, np.zeros(SR//2)]).astype(np.float32), SR)
