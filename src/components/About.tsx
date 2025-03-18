
import { Code, Database, Server, Monitor, Terminal, Cloud, Github } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <div className="h-0.5 flex-1 bg-border"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <p className="text-lg mb-6 leading-relaxed">
                I'm a passionate Full-Stack Developer with over 2 years of experience building robust web applications and solving complex problems.
              </p>
              
              <p className="text-lg mb-6 leading-relaxed">
                My expertise spans across JavaScript, React, Node.js, Java, Spring Boot, Python, AWS, and Docker. I thrive in collaborative environments and enjoy tackling challenges in distributed systems, backend optimization, and creating intuitive frontend experiences.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                Throughout my career, I've worked on significant projects like CAKE POS, CAKE Reports Dashboard, and DIMO, where I've contributed to improving performance, user experience, and system architecture.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium transition-transform hover:translate-y-[-2px] active:translate-y-[0px]"
                >
                  Get in Touch
                </a>
                <a 
                  href="#" 
                  className="px-6 py-2.5 rounded-lg border border-border text-foreground hover:bg-secondary/50 transition-all"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="glass rounded-2xl p-8 h-full">
                <h3 className="text-xl font-semibold mb-6">Tech Enthusiast</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Code size={24} className="text-primary" />
                    </div>
                    <span className="text-sm">Frontend</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Server size={24} className="text-primary" />
                    </div>
                    <span className="text-sm">Backend</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Database size={24} className="text-primary" />
                    </div>
                    <span className="text-sm">Database</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Cloud size={24} className="text-primary" />
                    </div>
                    <span className="text-sm">Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
