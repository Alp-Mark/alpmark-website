# AlpMark Labs Website

**Decision Intelligence for D2C Brands**

A modern, animated website built with Next.js 14, React, Framer Motion, and Tailwind CSS.

## 🚀 Features

- ⚡ **Next.js 14** with TypeScript
- 🎨 **Tailwind CSS** for responsive design
- ✨ **Framer Motion** for smooth animations
- 📱 **Mobile-first** responsive design
- 🎯 **Conversion-focused** CTAs
- ♿ **Accessible** design principles
- 🚄 **Fast performance**

## 📂 Project Structure

```
├── app/
│   ├── page.tsx              # Landing page
│   ├── product/page.tsx      # Product showcase
│   ├── how-it-works/page.tsx # 4-step journey
│   ├── about/page.tsx        # About company
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   └── Footer.tsx            # Footer
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Alp-Mark/alpmark-website.git
cd alpmark-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

### Landing Page (`/`)
- Animated hero section with logo
- Outcomes tiles showcasing key benefits
- Integration logos
- Trust signals
- Call-to-action buttons

### Product Page (`/product`)
- Feature showcase with 6 key features
- Each feature includes icon, title, and description
- Trust markers section
- Demo CTA

### How It Works (`/how-it-works`)
- 4-step interactive journey
- Timeline visualization
- Key principle messaging
- Free trial CTA

### About Page (`/about`)
- Company mission and values
- Team positioning
- Contact CTAs

## 🎨 Brand Colors

- **Brand Blue**: `#0052CC`
- **Brand Red**: `#FF3B30`
- **Brand Cyan**: `#00B4D8`

## 🔧 Customization

### Logo
Replace the SVG logo in `components/Header.tsx` with your actual logo file.

### Content
All page content is in the respective `/app/[page]/page.tsx` files.

### Colors
Update colors in `tailwind.config.ts` or use the predefined brand colors in `globals.css`.

### Animations
Customize animations using Framer Motion properties in page components.

## 🚢 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project can be deployed to any Node.js-compatible platform:
- Netlify
- Railway
- DigitalOcean
- AWS Amplify
- etc.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## 📞 Support

For questions or support, email hello@alpmarklabs.com

## 📄 License

© 2026 AlpMark Labs. All rights reserved.
