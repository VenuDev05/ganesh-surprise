# 🎉 Ganesh Surprise Website

A beautiful, animated surprise website built for **Ganesh** — celebrating his talents in Editing, Photography, Designing, and Development, and his birthday on **June 2nd**!

---

## ✨ Features

- **Animated Hero** — His name in a shimmering gradient with a live countdown to June 2nd
- **Floating Particles** — Colourful particles float up in the background
- **Sticky Navbar** — Smooth-scroll navigation that blurs on scroll
- **Skills Section** — Four interactive cards (Editing, Photography, Designing, Development) that glow and lift on hover
- **Photo Gallery** — Upload real photos via button or drag-and-drop; full lightbox with keyboard navigation (← → Esc)
- **Message Section** — Warm personal notes that animate in on scroll
- **Birthday Footer** — A "Celebrate!" button that triggers a full-screen confetti burst 🎊

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Navigate into the project folder
cd ganesh-surprise

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The site opens at **http://localhost:3000** 🎉

### Build for Production

```bash
npm run build
```

The optimised build is output to the `build/` folder. You can host it on [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any static host.

---

## 🖼️ Adding Photos

1. Open the site in your browser
2. Scroll to the **"Memories We Made Together"** section
3. Click **"📁 Add Our Photos"** or drag-and-drop images into the dashed zone
4. Photos appear instantly in the gallery and are fully lightbox-viewable

> Photos are stored in memory only — they reset on page refresh. For permanent storage, consider deploying with a backend or using browser LocalStorage (see FAQ below).

---

## 📁 Project Structure

```
ganesh-surprise/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Floating sticky nav bar
│   │   ├── FloatingParticles.jsx # Ambient animated particles
│   │   ├── HeroSection.jsx      # Hero + countdown badge
│   │   ├── SkillsSection.jsx    # Skill cards (4 talents)
│   │   ├── PhotoGallery.jsx     # Gallery + upload + lightbox
│   │   ├── MessageSection.jsx   # Appreciation messages
│   │   └── BirthdayFooter.jsx   # Footer + confetti button
│   ├── App.jsx             # Root component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles & keyframes
├── package.json
└── README.md
```

---

## 🛠️ Customisation

| What to change | Where |
|---|---|
| Friend's name | `HeroSection.jsx` — the `<h1>` text |
| Birthday date | `HeroSection.jsx` — `CountdownBadge` — change `month 5, day 2` |
| Skills & descriptions | `SkillsSection.jsx` — `SKILLS` array |
| Placeholder memories | `PhotoGallery.jsx` — `PLACEHOLDER_MEMORIES` array |
| Personal messages | `MessageSection.jsx` — `MESSAGES` array |
| Colour palette | Each component's inline colour values |

---

## 💡 FAQ

**Can I make uploaded photos persist after refresh?**  
Yes — store them in `localStorage`. In `PhotoGallery.jsx`, initialise state with `JSON.parse(localStorage.getItem('uploads') || '[]')` and call `localStorage.setItem('uploads', JSON.stringify(uploads))` in a `useEffect` on the uploads state.

**How do I deploy this?**  
Run `npm run build`, then drag the `build/` folder to [Netlify Drop](https://app.netlify.com/drop) — done in 30 seconds!

---

Made with 💛 for Ganesh — keep creating, keep inspiring.
