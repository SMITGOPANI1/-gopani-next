/**
 * Turns one or more videos into a numbered WebP frame sequence for the
 * scroll animation, at 30 frames per second.
 *
 *   npm run frames                       -> uses every .mp4 in /media (A→Z order)
 *   npm run frames -- media/my-clip.mp4  -> uses only the files you list
 *
 * Output: public/frames/frame_0001.webp ... + public/frames/manifest.json
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import ffmpeg from "ffmpeg-static";

const FPS = 30;
const WIDTH = 1280; // frame width in px (height keeps the video's ratio)
const QUALITY = 72; // WebP quality 0–100 (lower = smaller files)

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "public", "frames");

let inputs = process.argv.slice(2).map(p => path.resolve(p));
if (!inputs.length) {
  const mediaDir = path.join(root, "media");
  inputs = fs.readdirSync(mediaDir).filter(f => /\.(mp4|mov|webm)$/i.test(f)).sort().map(f => path.join(mediaDir, f));
}
if (!inputs.length) {
  console.error("No video found. Put an .mp4 in the /media folder first.");
  process.exit(1);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

// Join all clips (scaled to the same size) and export every frame at 30 fps.
const args = ["-hide_banner", "-loglevel", "error", "-y"];
inputs.forEach(f => args.push("-i", f));
const scaled = inputs.map((_, i) => `[${i}:v]fps=${FPS},scale=${WIDTH}:-2:flags=lanczos,setsar=1[v${i}]`).join(";");
const joined = inputs.map((_, i) => `[v${i}]`).join("") + `concat=n=${inputs.length}:v=1:a=0[out]`;
args.push(
  "-filter_complex", `${scaled};${joined}`,
  "-map", "[out]",
  "-c:v", "libwebp", "-quality", String(QUALITY), "-compression_level", "6",
  path.join(outDir, "frame_%04d.webp")
);

console.log(`Extracting frames from ${inputs.length} video(s) at ${FPS} fps...`);
execFileSync(ffmpeg, args, { stdio: "inherit" });

const frames = fs.readdirSync(outDir).filter(f => f.endsWith(".webp")).sort();
const probe = (() => {
  try {
    execFileSync(ffmpeg, ["-hide_banner", "-i", path.join(outDir, frames[0])], { stdio: "pipe" });
  } catch (e) {
    return String(e.stderr);
  }
  return "";
})();
const [, w, h] = probe.match(/, (\d{2,5})x(\d{2,5})/) || [0, WIDTH, Math.round((WIDTH * 9) / 16)];

const manifest = { count: frames.length, fps: FPS, width: +w, height: +h, path: "/frames/frame_", ext: ".webp", pad: 4 };
fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));

const bytes = frames.reduce((s, f) => s + fs.statSync(path.join(outDir, f)).size, 0);
console.log(`Done: ${frames.length} frames (${w}x${h}), ${(bytes / 1024 / 1024).toFixed(1)} MB → public/frames`);
