# Health Horizon - Medical Tourism Platform

A modern, responsive web application built with Next.js 15 for connecting patients with world-class healthcare providers worldwide.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first design with beautiful UI components
- **Medical Tourism**: Browse treatments and destinations worldwide
- **Search & Filter**: Advanced search functionality for treatments and locations
- **Performance Optimized**: Server-side rendering and optimized images
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **State Management**: TanStack React Query
- **Date Handling**: date-fns

### Development Tools
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript
- **Image Optimization**: Next.js Image + Sharp
- **Package Manager**: npm

## 📁 Project Structure

```
health-horizon/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── destinations/      # Medical destinations
│   ├── treatments/        # Available treatments
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Homepage
├── src/
│   ├── components/        # React components
│   │   ├── shared/        # Shared components
│   │   └── ui/            # shadcn/ui components
│   └── lib/               # Utility libraries
├── ai-docs/               # AI development logs
├── public/                # Static assets
└── [config files]        # TypeScript, Tailwind, etc.
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd health-horizon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

The application uses a consistent design system with:

- **Colors**: Red primary (#EF4444) with gray neutrals
- **Typography**: Inter font family
- **Spacing**: Tailwind CSS spacing scale
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icon set

## 📱 Pages

### Homepage (/)
- Hero section with search functionality
- Featured treatment packages
- Call-to-action sections

### Treatments (/treatments)
- Grid of available medical treatments
- Detailed treatment information
- Pricing and duration estimates

### Destinations (/destinations)
- Medical tourism destinations
- Country-specific information
- Cost savings data

### About (/about)
- Company information
- Mission and values

### Contact (/contact)
- Contact information
- Multiple contact methods

## 🔧 Configuration

### TypeScript
The project uses strict TypeScript configuration with Next.js optimizations.

### ESLint
Configured with Next.js recommended rules for code quality and consistency.

### Tailwind CSS
Custom configuration with shadcn/ui design tokens and animations.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Deploy automatically on push to main branch

### Other Platforms
1. Build the application: `npm run build`
2. Deploy the `.next` folder and `public` assets
3. Set environment variables as needed

## 🎯 Performance Targets

- Lighthouse Score: 95+ for all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Booking system integration
- [ ] Payment processing
- [ ] Multi-language support (i18n)
- [ ] Progressive Web App features
- [ ] Real-time chat support
- [ ] Advanced analytics
- [ ] Content management system
- [ ] API integration for real clinic data
- [ ] Mobile app development
