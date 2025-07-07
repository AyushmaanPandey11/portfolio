import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Professional headshot */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <img
                src="/profile-photo.jpg"
                alt="Ayushmaan Pandey"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ayushmaan Pandey
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
            <span className="typing-text">{displayText}</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Recent MCA graduate with expertise in building dynamic, responsive web applications using modern technologies like Java Spring Boot, React, Go, and Node.js. Passionate about creating robust, scalable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <i className="fas fa-code mr-2"></i>
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}