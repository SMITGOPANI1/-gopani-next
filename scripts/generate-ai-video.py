"""
Generate a new AI video for the scroll animation (free, no API key).

Uses the public LTX-Video model on Hugging Face (Lightricks/ltx-video-distilled).
Free usage has a daily GPU quota; if it says the quota is used up, try again later
or log in with a free Hugging Face token:  set HF_TOKEN=hf_xxx

Setup (one time):   pip install gradio_client
Run:                npm run ai-video -- "your prompt here"
Then:               npm run frames      (turns /media/*.mp4 into 30 fps frames)
"""
import os
import shutil
import sys
from pathlib import Path

from gradio_client import Client

PROMPT = " ".join(sys.argv[1:]) or (
    "Smooth cinematic camera flying forward over a glowing futuristic city made of smartphones "
    "and laptop screens at night, deep violet and indigo neon light, holographic app interfaces "
    "rising up from the ground, light streaks, volumetric fog, continuous forward motion, "
    "depth of field, premium technology commercial, highly detailed"
)
OUT = Path(__file__).resolve().parent.parent / "media" / "ai-video.mp4"

print("Generating video with LTX-Video (takes 1-3 minutes)...")
client = Client("Lightricks/ltx-video-distilled", token=os.environ.get("HF_TOKEN"), verbose=False)
video, seed = client.predict(
    prompt=PROMPT,
    negative_prompt="worst quality, inconsistent motion, blurry, jittery, distorted, text, watermark, logo, people",
    input_image_filepath=None,
    input_video_filepath=None,
    height_ui=576,
    width_ui=1024,
    mode="text-to-video",
    duration_ui=6,  # seconds (max ~8)
    ui_frames_to_use=9,
    seed_ui=42,
    randomize_seed=True,
    ui_guidance_scale=1,
    improve_texture_flag=True,
    api_name="/text_to_video",
)
OUT.parent.mkdir(exist_ok=True)
shutil.copy(video["video"] if isinstance(video, dict) else video, OUT)
print(f"Saved {OUT} (seed {seed}). Now run:  npm run frames")
