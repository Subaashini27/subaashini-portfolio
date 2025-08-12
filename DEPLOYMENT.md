# 🚀 Deployment Guide

## Portfolio Deployment (Vercel/Netlify)

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Portfolio setup"
   git remote add origin https://github.com/Subaashini27/portfolio.git
   git push -u origin main
   ```

2. **Deploy with Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Vercel auto-detects Vite settings
   - Click "Deploy" - Done! 🎉

3. **Your Live URL:**
   ```
   https://your-portfolio.vercel.app
   ```

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy with Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

---

## Rainwater Harvesting Calculator (GitHub Pages)

### For Your Separate Calculator Project:

1. **Create separate repository:**
   ```bash
   # In your calculator project folder
   git init
   git add .
   git commit -m "Rainwater harvesting calculator"
   git remote add origin https://github.com/Subaashini27/rainwater-harvesting-calculator.git
   git push -u origin main
   ```

2. **GitHub Pages Setup:**
   - Repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `docs` folder
   - Or use GitHub Actions for Vite projects

3. **Calculator Live URL:**
   ```
   https://subaashini27.github.io/rainwater-harvesting-calculator/
   ```

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure
```
portfolio/
├── src/                    # Source code
├── public/                 # Static assets
├── dist/                   # Built files (auto-generated)
└── vite.config.ts         # Vite configuration
```

---

## 🎯 Deployment Strategy

### **Portfolio**: Vercel/Netlify (better for React apps)
### **Individual Projects**:
- **Most Projects**: Vercel (better performance, easier setup)
  - Rainwater Harvesting Calculator: `rainwater-harvesting-calculator.vercel.app`
  - Islamic Microfinance Platform: `waqf-sukuk-platform.vercel.app`
- **Badminton Injury Prediction**: GitHub Pages
  - URL: `subaashini27.github.io/badminton-injury-prediction`
  - Reason: Specialized AI/ML project with specific hosting needs

### **Benefits**:
- **Vercel**: Faster builds, better performance, custom domains
- **GitHub Pages**: Free hosting, good for static sites
- **Auto-deployment**: Push to main branch on all platforms

**Ready to deploy? Most projects → Vercel, Badminton → GitHub! 🚀**