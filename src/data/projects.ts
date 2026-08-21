export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard for an e-commerce platform built with React and Tailwind CSS. Features sales charts, order management, and user metrics.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/example/ecommerce-dashboard",
    liveUrl: "https://example.com/demo1",
  },
  {
    id: "2",
    title: "Task Management API",
    description: "A RESTful API built with Node.js and Express for managing tasks. Includes authentication, role-based access control, and comprehensive API documentation.",
    thumbnail: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80&w=800",
    tags: ["Node.js", "Express", "MongoDB", "Docker"],
    githubUrl: "https://github.com/example/task-api",
  },
  {
    id: "3",
    title: "Weather Progressive Web App",
    description: "A fast, offline-capable weather application that provides real-time forecasts. Uses geolocation and visualizes weather patterns.",
    thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "PWA", "OpenWeather API"],
    githubUrl: "https://github.com/example/weather-app",
    liveUrl: "https://example.com/demo3",
  },
];
