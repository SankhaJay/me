
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden section-padding pt-40"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 mb-6 border-4 border-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=250&h=250&fit=crop" alt="Profile" />
            <AvatarFallback className="text-lg font-bold">YN</AvatarFallback>
          </Avatar>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fadeIn">
            Hi, I'm <span className="text-gradient animate-gradient-x">Your Name</span> 
            <span className="ml-3 inline-block animate-wave origin-bottom-right">👋</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl animate-slideUp opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            I build elegant, responsive, and high-performance web applications with cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-transform hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium border border-border transition-transform hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        aria-label="Scroll down" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-pulse"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};
