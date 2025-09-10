import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Stock Exchange(LADDOO_INR)",
      description:
        "Exchange assets( Laddoo with INR ) using websockets and orderbook server for filling orders using in memory variable for faster realtime data. High-Level System having Api Server, Engine, Websockets and TimeScaleDb, Redis Queue & PubSub and Nextjs Frontend.",
      technologies: [
        "TypeScript",
        "Redis Pub/Subs",
        "Redis Queues",
        "Engine",
        "Websockets",
        "Next.js",
        "Postgres",
        "Docker",
        "Node.js",
      ],
      category: [
        "backend",
        "advance backend",
        "websockets",
        "fullstack",
        "realtime",
      ],
      icon: "fas fa-comments",
      gradient: "from-accent to-primary",
      githubUrl: "https://github.com/AyushmaanPandey11/stock-exchange",
      featured: true,
    },
    {
      title: "gRPC Backend Implementation",
      description:
        "Backend application using gRPC and Proto Buffs to optimise the communication between systems.",
      technologies: ["TypeScript", "gRPC", "Node.js", "Scaling"],
      category: ["backend", "advance backend"],
      icon: "fas fa-comments",
      gradient: "from-accent to-primary",
      githubUrl: "https://github.com/AyushmaanPandey11/grpc-implementaion",
      featured: true,
    },
    {
      title: "Video Chat Application",
      description:
        "Full stack application with real-time Video Chat using WebSocket and WebRTC.",
      technologies: ["TypeScript", "WebSocket", "Node.js", "React", "WebRTC"],
      category: ["fullstack", "realtime", "websocket", "react", "frontend"],
      icon: "fas fa-comments",
      gradient: "from-accent to-primary",
      githubUrl: "https://github.com/AyushmaanPandey11/video-chat-app",
      liveUrl: "https://video-chat-app-swart-delta.vercel.app/",
      featured: true,
    },
    {
      title: "Horizontally Scaled Websocket",
      description:
        "Backend application with real-time messaging using WebSocket horizontally scaled using Pub/Sub and follows Singleton Pattern.",
      technologies: [
        "TypeScript",
        "WebSocket",
        "Node.js",
        "Redis Pub/Sub",
        "Scaling",
      ],
      category: ["backend", "realtime", "websocket", "advance backend"],
      icon: "fas fa-comments",
      gradient: "from-accent to-primary",
      githubUrl: "https://github.com/AyushmaanPandey11/scalable-chat",
      featured: true,
    },
    {
      title: "Real-time Chat Application",
      description:
        "Full-stack chat application with real-time messaging using WebSocket, built with React TypeScript and deployed on Render.",
      technologies: ["React", "TypeScript", "WebSocket", "Node.js", "Render"],
      category: [
        "fullstack",
        "react",
        "realtime",
        "websocket",
        "advance backend",
      ],
      icon: "fas fa-comments",
      gradient: "from-accent to-primary",
      githubUrl: "https://github.com/AyushmaanPandey11/chat-app-ws",
      liveUrl: "https://chat-app-ws-2-3dx3.onrender.com/",
      featured: true,
    },
    {
      title: "Journal App",
      description:
        "Secure journal application built with Spring Boot, Spring Security, JWT token system, and MongoDB for personal diary management.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "MongoDB",
      ],
      category: ["java", "backend"],
      icon: "fas fa-book",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/AyushmaanPandey11/journal-app",
      liveUrl: null,
      featured: true,
    },
    {
      title: "Job Portal",
      description:
        "Full-stack job portal developed with Spring Boot, Spring Security, JWT authentication, and PostgreSQL database.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "JDBC",
      ],
      category: ["java", "backend"],
      icon: "fas fa-briefcase",
      gradient: "from-secondary to-accent",
      githubUrl: "https://github.com/AyushmaanPandey11/job-portal",
      liveUrl: null,
      featured: true,
    },
    {
      title: "Movie Recommendation App",
      description:
        "React-based movie recommendation system using free movie APIs, Firebase authentication, and Redux for state management.",
      technologies: ["React", "Redux", "Firebase", "Movie API", "JavaScript"],
      category: ["frontend", "react"],
      icon: "fas fa-film",
      gradient: "from-accent to-primary",
      githubUrl:
        "https://github.com/AyushmaanPandey11/Movie-Recommendation-App",
      liveUrl: null,
      featured: true,
    },
    {
      title: "Food Delivery App",
      description:
        "Food delivery application using Swiggy API for restaurant and food selection with cart management functionality.",
      technologies: ["React", "Redux", "Swiggy API", "JavaScript", "CSS"],
      category: ["frontend", "react"],
      icon: "fas fa-utensils",
      gradient: "from-primary to-secondary",
      githubUrl: "https://github.com/AyushmaanPandey11/Food-Delivery-App",
      liveUrl: "https://food-delivery-app-kappa-lovat.vercel.app",
      featured: true,
    },
    {
      title: "Kickstarter Blockchain",
      description:
        "Ethereum blockchain-based crowdfunding platform solving kickstarter scam issues by giving fund allocation power to contributors.",
      technologies: [
        "Solidity",
        "Ethereum",
        "Blockchain",
        "Smart Contracts",
        "Web3",
      ],
      category: ["blockchain", "solidity"],
      icon: "fas fa-coins",
      gradient: "from-secondary to-accent",
      githubUrl: "https://github.com/AyushmaanPandey11/kickstarter",
      liveUrl: null,
      featured: true,
    },
    {
      title: "Event Booking App",
      description:
        "Secure event booking application built with GoLang and Gin framework, featuring user authentication and SQLite database.",
      technologies: ["GoLang", "Gin", "SQLite", "JWT", "Bcrypt"],
      category: ["golang", "backend"],
      icon: "fas fa-calendar-check",
      gradient: "from-secondary to-accent",
      githubUrl: "https://github.com/AyushmaanPandey11/event-booking",
      liveUrl: null,
      featured: false,
    },
    {
      title: "Cross-Currency Payment Interface",
      description:
        "End-to-end payment solution facilitating transactions in any currency with pseudonymity. Built with MERN stack and Live Currency API.",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Express", "JWT"],
      category: ["fullstack", "react"],
      icon: "fas fa-credit-card",
      gradient: "from-accent to-primary",
      githubUrl: "https://github.com/AyushmaanPandey11/PiedPiper",
      liveUrl: "#",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "java", label: "Java" },
    { id: "golang", label: "Go" },
    { id: "react", label: "React" },
    { id: "fullstack", label: "Full Stack" },
    { id: "backend", label: "Backend" },
    { id: "frontend", label: "Frontend" },
    { id: "blockchain", label: "Blockchain" },
    { id: "websocket", label: "Websockets" },
    { id: "advance backend", label: "Advance Backend" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  const getColorClasses = (index: number) => {
    const colors = ["primary", "secondary", "accent"];
    const color = colors[index % colors.length];
    const colorMap = {
      primary: "text-primary bg-primary/10",
      secondary: "text-secondary bg-secondary/10",
      accent: "text-accent bg-accent/10",
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Some of my recent work
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <i className="fas fa-external-link-alt text-3xl mb-2"></i>
                    <p className="text-sm">View Project</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`${project.icon} text-6xl text-white/80`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                  {project.featured && (
                    <span className="ml-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs">
                      Featured
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${getColorClasses(
                        techIndex
                      )} px-2 py-1 rounded text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <i className="fab fa-github mr-1"></i>
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
