# Yicheng Luo - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js and React.js, showcasing professional experience, projects, and skills.

## Features

- **Modern React Architecture**: Built with Next.js 14 and React 18
- **TypeScript Support**: Full TypeScript implementation for better development experience
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Interactive Components**: Expandable sections for projects and work experience
- **Static Export**: Configured for static site generation and GitHub Pages deployment
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: CSS3 with modern features and responsive design
- **Deployment**: Static export ready for GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd yicheng-luo-profile
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment to GitHub Pages or any static hosting service.

## Project Structure

```
src/
├── components/          # React components
│   ├── ProfileHeader.tsx
│   ├── ProfileIntroduction.tsx
│   ├── ProfileEducation.tsx
│   ├── ProfileExperience.tsx
│   ├── ProfileProjects.tsx
│   ├── ProfileSkills.tsx
│   ├── ProfileCertifications.tsx
│   └── ProfileContact.tsx
├── pages/              # Next.js pages
│   ├── _app.tsx
│   └── index.tsx
└── styles/             # Global styles
    └── globals.css
public/
└── assets/             # Static assets
    ├── profilePhoto.jpg
    └── Yicheng-Luo-Resume.pdf
```

## Deployment

This project is configured for static export and can be deployed to:

- **GitHub Pages**: Use the `out` directory contents
- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy directly from GitHub
- **Any static hosting service**: Upload the `out` directory

## Customization

To customize the content:

1. **Personal Information**: Update components in `src/components/`
2. **Styling**: Modify `src/styles/globals.css`
3. **Assets**: Replace files in `public/assets/`
4. **Meta Tags**: Update `src/pages/index.tsx`

## Features Implemented

- ✅ Responsive design for all screen sizes
- ✅ Interactive expandable sections
- ✅ Modern CSS with hover effects and transitions
- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Static site generation
- ✅ SEO optimization
- ✅ Accessibility considerations

## License

This project is open source and available under the [MIT License](LICENSE).
