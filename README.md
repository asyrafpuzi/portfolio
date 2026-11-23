# Muhammad Asyraf's Personal Portfolio

The portfolio is a centered, page-by-page single-page app. Navigation switches
between Home, About, Education, Skills, Projects, Activities, and Contact
without stacking every view vertically. It uses Fraunces for editorial
headings, Plus Jakarta Sans for interface copy, JetBrains Mono for metadata,
and inline Lucide-style SVG icons.

> **Live at:** [asyrafpuzi.github.io/portfolio](https://asyrafpuzi.github.io/portfolio/)
> **Stack:** Node.js · Express · Tailwind CSS (CDN) · Vanilla JavaScript

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repo
git clone https://github.com/asyrafpuzi/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server with hot-reload
npm run dev

# Open http://localhost:3000
```

---

## ➕ How to Add a New Project

Open **`public/data/projects.js`** and copy-paste this template block at the **end** of the array (before the closing `]`):

```javascript
{
  id:        'my-new-project',           // unique kebab-case ID (no spaces)
  title:     'My Awesome Project',
  category:  'Web Dev',                 // 'Web Dev' | 'Mobile App' | 'Networking' | 'IoT & Hardware'
  emoji:     '🚀',
  tags:      ['React', 'Node.js'],      // tech stack badges shown on the card
  problem:   'What problem does this project solve?',
  takeaways: [
    'Learned X technique',
    'Built Y feature',
    'Improved at Z',
  ],
  github:    'https://github.com/asyrafpuzi/my-new-project',
  demo:      'https://my-demo-url.com', // set to '' to hide the demo button
  featured:  false,                     // true = appears in Hero "Featured" section (max 3)
  image:     'assets/images/project-placeholder.svg',
},
```

**That's it!** No HTML changes needed. The UI updates automatically on page load.

---

## 📄 Resume

1. Export your resume as a PDF.
2. Name it exactly: `Resume - Muhammad Asyraf Bin Mohamad Puzi.pdf`
3. Place it in: `public/assets/resume/`

The site will auto-embed and offer a download link.

---

## 🌐 Deployment

### GitHub Pages (Static — no Node.js)

The workflow in `.github/workflows/pages.yml` publishes the `/public` directory whenever changes are pushed to
`main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

### Render.com (Full Node.js)
1. Push to GitHub.
2. Create a new **Web Service** on Render.
3. Set:
   - **Build command:** `npm install`
   - **Start command:** `npm start`
4. Done — Render auto-deploys on every push!

### Vercel
```bash
npm install -g vercel
vercel --prod
```

Vercel auto-detects Express and deploys it as a serverless function.

---

## 📁 Project Structure

```
my-portfolio/
├── server.js                    # Express server
├── package.json
├── .gitignore
├── README.md
└── public/
    ├── index.html               # Main HTML (all sections)
    ├── css/
    │   └── style.css            # Dark editorial layout and responsive styles
    ├── js/
    │   └── main.js              # Navigation, filters, modal and copy-email logic
    ├── data/
    │   └── projects.js          # ← EDIT THIS to add projects
    └── assets/
        ├── images/
        │   └── project-placeholder.svg
        └── resume/
            └── Resume - Muhammad Asyraf Bin Mohamad Puzi.pdf  ← Put your PDF here
```

---

## 🚀 Deployment

Run `npm run dev` locally and open `http://localhost:3000`. For GitHub Pages,
publish the `public/` directory. For Render, use `npm install` as the build
command and `npm start` as the start command.

## 🛠 Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Server      | Node.js + Express                   |
| Frontend    | HTML5 + handcrafted CSS + Vanilla JS |
| Fonts       | Fraunces + Plus Jakarta Sans + JetBrains Mono (Google Fonts) |
| Contact     | Email, phone, and profile links     |
| Deployment  | GitHub Pages / Render / Vercel      |

---

## 👤 Author

**Muhammad Asyraf bin Mohamad Puzi**  
📍 Subang Jaya, Selangor / Bukit Mertajam, Pulau Pinang, Malaysia  
📧 muhdasyraf2104@gmail.com  
📱 +6010-2891830  
🎓 BSc. (Hons.) Netcentric Computing · UiTM · CGPA 3.56

---

*Built with ☕ and lots of `console.log()` debugging.*
