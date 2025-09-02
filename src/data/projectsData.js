export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveDemoLink: "https://ecommerce-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking features.",
    techStack: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT"],
    githubLink: "https://github.com/yourusername/task-manager",
    liveDemoLink: "https://task-manager-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing social media accounts with analytics, scheduling, and content management.",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Chart.js"],
    githubLink: "https://github.com/yourusername/social-dashboard",
    liveDemoLink: null,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Weather Application",
    description: "A weather app with location-based forecasts, interactive maps, and detailed weather information using OpenWeatherMap API.",
    techStack: ["React.js", "OpenWeatherMap API", "Chart.js", "CSS3"],
    githubLink: "https://github.com/yourusername/weather-app",
    liveDemoLink: "https://weather-app-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Tailwind CSS, featuring modern design and smooth animations.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveDemoLink: "https://your-portfolio.vercel.app",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    featured: false
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, user authentication, and admin panel for content management.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Markdown"],
    githubLink: "https://github.com/Bhargavprasad-data",
    liveDemoLink: null,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    featured: false
  }
];

export const skillsData = {
  technical: [
    { name: "HTML/CSS", level: 90, icon: "🌐" },
    { name: "JavaScript", level: 92, icon: "🟨" },
    { name: "MongoDB", level: 90, icon: "🗄️" },
    { name: "Express.js", level: 85, icon: "🚀" },
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Node.js", level: 88, icon: "🟢" }
  ],
  general: [
    {name:"C Programming ", level:94, icon:"©️"},
    {name:"C++ Programming ", level:97, icon:"©️++"},
    {name:"Python Programming ", level:95, icon:"🐍"},
    {name:"Java Programming", level:90, icon:"🟩"},
    {name:"SQL", level:98, icon:"🗄️"},
    {name:"Git", level:90, icon:"📝"},
  ]
};

export const experienceData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Startup",
    period: "2024 - Present",
    description: "Leading development of web applications using MERN stack. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["React.js", "Node.js","Express.js", "MongoDB", "AWS"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2024",
    description: "Developed responsive web applications and collaborated with design teams to create user-friendly interfaces.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    company: "Tech Company",
    period: "2023 - 2027",
    description: "Assisted in developing backend services and APIs. Gained experience with database design and optimization.",
    technologies: ["Node.js", "Express.js", "MongoDB"]
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Computer Science and Data Science",
    institution: "MVGR Collage of Engineering",
    period: "2023 - 2027",
    description: "Graduated with honors. Specialized in software engineering and web development.",
    achievements: ["Software Engineering Project Award", "Web Development Certification"]
  },
  {
    id: 2,
    degree: "Full Stack Web Development",
    institution: "Coding Bootcamp",
    period: "2024",
    description: "Intensive 6-month program covering modern web development technologies and best practices.",
    achievements: ["MERN Stack Certification", "Agile Development", "Team Project Leadership"]
  }
];
