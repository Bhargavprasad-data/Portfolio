# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js and Tailwind CSS. Features a clean design, smooth animations, and is fully customizable.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Dynamic Projects**: Easy to add/update projects via data file
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better SEO
- **Performance**: Optimized with lazy loading and efficient animations

## 🚀 Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── Skills.js       # Skills section
│   ├── Projects.js     # Projects showcase
│   ├── Experience.js   # Work experience & education
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── context/            # React context
│   └── ThemeContext.js # Theme management
├── data/               # Data files
│   └── projectsData.js # Projects, skills, experience data
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles & Tailwind imports
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm start
```

The website will open at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **`public/index.html`** - Update meta tags, title, and description
2. **`src/data/projectsData.js`** - Update projects, skills, experience, and education
3. **`src/components/Hero.js`** - Update name, title, and description
4. **`src/components/Contact.js`** - Update contact information and social links
5. **`src/components/Navbar.js`** - Update social links
6. **`src/components/Footer.js`** - Update social links and contact info

### Profile Photo
Replace the placeholder in `src/components/Hero.js`:
```jsx
// Replace this placeholder div with your actual image
<img 
  src="/path/to/your/photo.jpg" 
  alt="Your Name" 
  className="w-80 h-80 rounded-full object-cover"
/>
```

### Projects
Add or update projects in `src/data/projectsData.js`:
```javascript
export const projectsData = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    techStack: ["React.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/project",
    liveDemoLink: "https://your-project.vercel.app",
    image: "https://your-image-url.com/image.jpg",
    featured: true
  },
  // Add more projects...
];
```

### Skills
Update skills in `src/data/projectsData.js`:
```javascript
export const skillsData = {
  technical: [
    { name: "React.js", level: 95, icon: "⚛️" },
    // Add more skills...
  ],
  general: [
    { name: "JavaScript", level: 92, icon: "🟨" },
    // Add more skills...
  ]
};
```

### Experience & Education
Update in `src/data/projectsData.js`:
```javascript
export const experienceData = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    period: "2023 - Present",
    description: "Job description...",
    technologies: ["React.js", "Node.js"]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Your Degree",
    institution: "Institution Name",
    period: "2019 - 2023",
    description: "Education description...",
    achievements: ["Achievement 1", "Achievement 2"]
  }
];
```

### Colors & Styling
Customize colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color-50',
        500: '#your-color-500',
        // ... more shades
      }
    }
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Other Platforms
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload build folder to S3 bucket

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

- **Framer Motion**: Smooth page transitions and scroll animations
- **Intersection Observer**: Trigger animations when elements come into view
- **Hover Effects**: Interactive elements with hover animations
- **Scroll Animations**: Staggered animations for better UX

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📝 Customization Checklist

- [ ] Update personal information (name, title, description)
- [ ] Replace profile photo placeholder
- [ ] Update projects data
- [ ] Update skills and experience
- [ ] Update contact information
- [ ] Update social media links
- [ ] Customize color scheme (optional)
- [ ] Add your own logo/branding
- [ ] Update meta tags for SEO
- [ ] Test on different devices
- [ ] Deploy to your preferred platform

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Happy coding! 🚀**
