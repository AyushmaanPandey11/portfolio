# Complete Component Files

## Navigation Component (client/src/components/navigation.tsx)
```tsx
import { useState, useEffect } from 'react';
import { useDarkMode } from '@/hooks/use-dark-mode';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleDark } = useDarkMode();
  const progress = useScrollProgress();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
      
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">AP</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDark}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  {isDark ? (
                    <i className="fas fa-sun"></i>
                  ) : (
                    <i className="fas fa-moon"></i>
                  )}
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={toggleDark}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  {isDark ? (
                    <i className="fas fa-sun mr-2"></i>
                  ) : (
                    <i className="fas fa-moon mr-2"></i>
                  )}
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
```

## About Component (client/src/components/about.tsx)
```tsx
export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Passionate about creating innovative web solutions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Profile Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a recent MCA graduate with a solid background in full-stack web development. My experience spans across modern technologies including Java Spring Boot, React, Go, and Node.js, with a proven track record of successfully designing, developing, and deploying robust web solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                <span>Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <span>ayushmaan1122pandey@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary mr-3"></i>
                <span>+91 8639619547</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-graduation-cap text-primary mr-3"></i>
                <span>MCA from Pondicherry University (GPA: 7.75)</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                  <div className="text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">7+</div>
                  <div className="text-muted-foreground">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-muted-foreground">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Dark Mode Hook (client/src/hooks/use-dark-mode.tsx)
```tsx
import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  return { isDark, toggleDark };
}
```

## Scroll Progress Hook (client/src/hooks/use-scroll-progress.tsx)
```tsx
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      setProgress(Math.min(scrollPercentage, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
```