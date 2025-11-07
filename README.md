# GrowQuickly - Digital Marketing Agency

A modern Next.js application for a digital marketing agency, built with TypeScript and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Multiple Pages**: Home, Services, Portfolio, About, Blog, and Contact pages
- **Component-Based**: Reusable components for easy maintenance
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **Type Safe**: Full TypeScript support
- **Fast Performance**: Optimized for speed and performance

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── services/          # Services page
│   │   ├── portfolio/         # Portfolio page
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog page
│   │   └── contact/           # Contact page
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Button.tsx         # Button component
│   │   ├── ServiceCard.tsx    # Service card component
│   │   ├── TestimonialCard.tsx # Testimonial card
│   │   └── PortfolioCard.tsx  # Portfolio card
│   ├── sections/              # Page sections
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Services.tsx       # Services section
│   │   ├── Portfolio.tsx      # Portfolio section
│   │   ├── Testimonials.tsx   # Testimonials section
│   │   └── CTA.tsx            # Call-to-action section
│   └── types/                 # TypeScript types
│       └── index.ts           # Type definitions
├── public/                    # Static assets
│   ├── images/                # Image assets
│   └── icons/                 # Icon assets
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## 🎨 Pages

- **Home** (`/`) - Landing page with hero, services, portfolio, and testimonials
- **Services** (`/services`) - Detailed services page
- **Portfolio** (`/portfolio`) - Showcase of client projects and results
- **About** (`/about`) - Company information and team
- **Blog** (`/blog`) - Blog posts and articles
- **Contact** (`/contact`) - Contact form and information

## 🧩 Components

### Reusable Components
- `Header` - Navigation header with mobile menu
- `Footer` - Footer with links and contact info
- `Button` - Customizable button component
- `ServiceCard` - Service display card
- `TestimonialCard` - Client testimonial card
- `PortfolioCard` - Portfolio project card

### Sections
- `Hero` - Hero section with CTA
- `Services` - Services grid section
- `Portfolio` - Portfolio showcase section
- `Testimonials` - Client testimonials section
- `CTA` - Call-to-action section

## 🎯 Services Offered

1. **SEO Optimization** - Search engine optimization
2. **Social Media Marketing** - Social media strategy and management
3. **Content Marketing** - Content creation and strategy
4. **PPC Advertising** - Pay-per-click campaigns
5. **Email Marketing** - Email campaigns and automation
6. **Web Design & Development** - Website design and development

## 🛡️ Tech Stack

- **Next.js 16** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 📝 Customization

### Adding New Services
Edit `src/sections/Services.tsx` and `src/app/services/page.tsx` to add or modify services.

### Adding Portfolio Items
Edit `src/sections/Portfolio.tsx` and `src/app/portfolio/page.tsx` to add new portfolio items.

### Styling
Modify `tailwind.config.ts` for theme customization and `src/app/globals.css` for global styles.

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind CSS documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
