# KarmahubAI: Next.js website

The KarmahubAI site rebuilt in **Next.js 16 (App Router, TypeScript)**, with an
**AI-generated film that plays frame by frame (30 fps) as you scroll**.

## Run it

```bash
npm install
npm run dev        # open http://localhost:3000
npm run build      # production build
npm start          # run the production build
```

## Edit your details
- Phone, WhatsApp, email and form endpoint: `src/config/site.ts`
- Each homepage section is its own file in `src/components/sections/` (S01 … S21)
- Scroll-film captions (Idea → Design → Build → Grow): `CAPTIONS` at the top of `src/components/ScrollVideo.tsx`
- Design and animations: `src/styles/gopani.css` (main) and `src/styles/scroll-video.css` (the film section)

## The scroll video
How it works:
1. **AI video**: `media/ai-video.mp4` was made with the free **LTX-Video** AI model (Lightricks, on Hugging Face).
2. **Frames**: `npm run frames` uses ffmpeg to cut every video in `/media` into **30 fps WebP frames** in `public/frames/` (plus `manifest.json`).
3. **Scroll**: `ScrollVideo.tsx` draws the right frame on a `<canvas>` for your scroll position (GSAP ScrollTrigger + Lenis smooth scroll).

### Make a new AI video
```bash
pip install gradio_client
npm run ai-video -- "your own prompt, e.g. camera flying through a glowing purple data center"
npm run frames
```
You can also use any video from Runway, Kling, Luma, Google Veo, Sora and others. Put the `.mp4` in `/media`
(and remove the old one), then run `npm run frames`. If there are several videos, they are joined in A→Z order.
Settings such as frame width and WebP quality are at the top of `scripts/make-frames.mjs`.

**Tip:** 5–8 seconds is plenty (150–240 frames). Longer clips mean more MB to download.

## Libraries installed
| Purpose | Library |
|---|---|
| Styling | Tailwind CSS v4 (utilities, no reset), tw-animate-css |
| Scroll animation | GSAP + ScrollTrigger, @gsap/react, Lenis (smooth scroll) |
| UI animation | Motion (Framer Motion) |
| Accessible components | Radix UI (`radix-ui`) |
| Icons | lucide-react |
| Toasts / carousel | sonner, embla-carousel-react |
| Class helpers (shadcn/ui-style) | clsx, tailwind-merge, class-variance-authority |
| Video → frames | ffmpeg-static |

## Before going live
Replace the SAMPLE content: client names, case-study numbers, stats, testimonials, badges,
prices, address, LLPIN/GSTIN and "Your Name" (the same list as in `../HOW-TO-EDIT.md`).
