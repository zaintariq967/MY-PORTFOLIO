# Muhammad Zain Tariq: Freelance AI / ML Portfolio

A client-facing static website: **no database, no admin login, no Docker, no Supabase.**
Every word lives in **one file: `js/data.js`**. Edit it, push to GitHub, and the host redeploys automatically.

```
index.html       the site            js/data.js     ALL your content (edit this)
js/config.js     contact form + booking link          assets/       photo, CV, images
```

## 1. See it locally
Double-click `index.html` (or run `python -m http.server 8000` in this folder → http://localhost:8000).

## 2. Make it yours (15 minutes)
1. **`js/data.js` → `personal`**: check name, email, phone, links; paste your `upwork:` and `fiverr:` profile URLs.
2. **Projects**: for each one fill `github:` (and `demo:` / `video:` if you have them). Empty links are hidden.
3. **`freelance` block** at the bottom: your process, 3 packages, FAQ. Prices are "Custom quote" on purpose;
   change to e.g. `"from $300"` once you set your rates. Read the FAQ answers and make sure each one is true for you (NDA, ownership, support window).
4. **Testimonials**: when you have a client quote, add it to `testimonials: [...]` (the section appears automatically).
5. Replace `assets/Muhammad-Zain-Tariq-CV.pdf` with your latest CV; swap `assets/avatar.jpg` if you like.

## 3. Make the contact form deliver to your inbox (free, 3 minutes)
Static sites cannot send e-mail alone, so use a form service. In `js/config.js` set **one**:
* **Formspree:** formspree.io → New form → copy the URL → `FORM_ENDPOINT: "https://formspree.io/f/xxxx"`
* **Web3Forms:** web3forms.com → get access key → `FORM_ENDPOINT: "https://api.web3forms.com/submit"` and `FORM_ACCESS_KEY: "your-key"`

Leave both empty and the button just opens the visitor's e-mail app addressed to you (works, but less smooth).
Optional: `BOOKING_URL: "https://calendly.com/you/intro"` adds "Book a call" buttons.

## 4. Deploy (free)
Put the folder in a GitHub repo, then pick one:
* **Netlify:** Add new site → Import from Git → choose repo → build command empty, publish directory `.` → Deploy. (Or drag the folder onto app.netlify.com/drop.)
* **GitHub Pages:** repo → Settings → Pages → Deploy from branch → `main` / root. Site: `https://zaintariq967.github.io/REPO/`.
* **Vercel:** Import repo → Framework "Other" → no build → output `.`.

After deploying, you can add your real address to `index.html` (a `<link rel="canonical" href="https://your-site">` line and the `og:image` URL) so link previews look right.
> Streamlit Cloud only hosts Python/Streamlit apps, so it cannot host this site. Use it (or Hugging Face Spaces) for individual AI demos, then paste those links into `demo:`.

## 5. Showing projects that are hard to host
| Project type | What to link |
|---|---|
| Streamlit / Gradio / Flask AI apps | Hugging Face Space or Streamlit Cloud from the repo → `demo:` |
| Real-time CV / Raspberry Pi | 1–2 min screen or phone video (YouTube unlisted) → `video:` |
| Arduino / FPGA / robots | Demo video + photos in `images:` + wiring/diagram in the repo README (Arduino can also be simulated on Wokwi) |
| Networking (Packet Tracer) | `.pkt` file + topology diagram + screenshots in the repo |
| Company work (Sybrid, LMKR) | No code; the case study explains your role and result |

## 6. Starting to freelance: a simple launch checklist
1. Finish section 2, publish the site, and put its URL in your LinkedIn, GitHub profile and CV.
2. Create **Upwork** and **Fiverr** profiles using the same headline and project list; link them in `data.js`.
3. Make 2–3 focused Fiverr gigs from your strongest, easiest-to-explain skills (e.g. "YOLO object-detection model", "RAG chatbot for your documents", "ML model on your CSV data"), each with a portfolio demo.
4. For each flagship project make sure the GitHub README has: problem → approach → results → screenshots → how to run. Clients judge on this.
5. Start with small, well-scoped jobs to collect reviews; add the first quotes to `testimonials`.
6. Reply to enquiries fast and send a short written scope + price before starting.
