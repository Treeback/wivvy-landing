# Wivvy Landing Page

A modern, dark-mode SaaS landing page for Wivvy - an AI thinking assistant that ingests unstructured data (screenshots, voice notes, links, docs) and organizes it into connected, editable notes and a living graph of ideas.

## 🎨 Design Features

- **Dark Mode First**: Deep navy background (#0D1117) with subtle grid pattern
- **Modern UI**: Clean, Notion-meets-Linear aesthetic with generous whitespace
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Interactive Elements**: Hover effects, animated graphs, and dynamic content

## 🚀 Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Lucide React**: Modern icon set

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Treeback/wivvy-landing.git

# Navigate to the project
cd wivvy-landing

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
wivvy-landing/
├── app/
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/
│   ├── ui/            # Reusable UI components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── AppScreenshot.tsx
│   ├── ProblemStatement.tsx
│   ├── HowItWorks.tsx
│   ├── InteractiveGraph.tsx
│   ├── UseCases.tsx
│   ├── Privacy.tsx
│   ├── CTABanner.tsx
│   └── Footer.tsx
├── styles/
│   └── globals.css    # Global styles
├── public/            # Static assets
└── ...config files
```

## 🎯 Key Sections

1. **Hero Section**: Eye-catching headline with animated graph background
2. **App Screenshot**: Interactive preview of the Wivvy interface
3. **Problem Statement**: Three key pain points Wivvy solves
4. **How It Works**: Three-step process with animated connections
5. **Interactive Graph**: Hover-enabled mind map demonstration
6. **Use Cases**: Targeted solutions for different user personas
7. **Privacy & Security**: Trust-building security features
8. **CTA Banner**: Email capture for early access

## 🎨 Color Palette

- Background: `#0D1117` (Deep Navy)
- Grid Lines: `#1B2330` (Subtle Grid)
- Primary Blue: `#4D8CFF` (Electric Blue)
- Light Blue: `#7AA9FF` (Soft Blue)
- Text: White with various opacity levels

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The site can be deployed to Vercel with zero configuration:

```bash
npm run build
```

Then deploy to your preferred hosting platform.

## 📄 License

This project is proprietary to Wivvy.

---

Built with ❤️ for better mind infrastructure