
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ThemeProvider } from '@/hooks/useTheme';

const Index = () => {
  useEffect(() => {
    document.title = 'Sankha Jayalath | Full-Stack Developer';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative">
        <ParticleBackground />
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
