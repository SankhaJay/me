
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, Database, Server, Terminal, Wrench } from 'lucide-react';

type Skill = {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
};

const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'CSS/SCSS', category: 'frontend' },
  { name: 'HTML', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'REST API', category: 'backend' },
  
  // Database
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'Redis', category: 'database' },
  
  // DevOps
  { name: 'Docker', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'CI/CD', category: 'devops' },
  { name: 'Git', category: 'devops' },
  
  // Tools
  { name: 'VS Code', category: 'tools' },
  { name: 'Webpack', category: 'tools' },
  { name: 'npm/yarn', category: 'tools' },
  { name: 'Jest', category: 'tools' },
];

type Category = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const categories: { value: Category; label: string; icon: React.ReactNode }[] = [
    { value: 'all', label: 'All Skills', icon: <Terminal size={16} /> },
    { value: 'frontend', label: 'Frontend', icon: <Code size={16} /> },
    { value: 'backend', label: 'Backend', icon: <Server size={16} /> },
    { value: 'database', label: 'Database', icon: <Database size={16} /> },
    { value: 'devops', label: 'DevOps', icon: <Terminal size={16} /> },
    { value: 'tools', label: 'Tools', icon: <Wrench size={16} /> },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">My Skills</h2>
            <div className="h-0.5 flex-1 bg-border"></div>
          </div>
          
          <div className="mb-12 overflow-x-auto hide-scrollbar">
            <div className="flex space-x-3 min-w-max p-1">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-all whitespace-nowrap flex items-center gap-2",
                    activeCategory === category.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  )}
                >
                  {category.icon}
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="glass rounded-lg p-3 text-center transition-all hover:bg-primary/10 hover:translate-y-[-4px]"
              >
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 glass rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Specialized Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-primary font-medium mb-3">Distributed Systems</h4>
                <p className="text-sm text-muted-foreground">
                  Experience in building scalable, fault-tolerant distributed systems with microservices architecture
                </p>
              </div>
              
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-primary font-medium mb-3">Backend Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Skilled in performance tuning, database optimization, and building efficient API architectures
                </p>
              </div>
              
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-primary font-medium mb-3">Frontend Development</h4>
                <p className="text-sm text-muted-foreground">
                  Expert in creating responsive, accessible, and interactive user interfaces with modern frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
