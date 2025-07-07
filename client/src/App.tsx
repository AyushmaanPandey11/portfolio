import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
