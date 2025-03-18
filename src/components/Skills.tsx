
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
};

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'CSS/SCSS', level: 80, category: 'frontend' },
  { name: 'HTML', level: 95, category: 'frontend' },
  { name: 'Redux', level: 80, category: 'frontend' },
  { name: 'Next.js', level: 75, category: 'frontend' },
  { name: 'Vue.js', level: 60, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'Java', level: 75, category: 'backend' },
  { name: 'Spring Boot', level: 70, category: 'backend' },
  { name: 'Python', level: 65, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },
  { name: 'REST API', level: 90, category: 'backend' },
  
  // Database
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'PostgreSQL', level: 75, category: 'database' },
  { name: 'MySQL', level: 80, category: 'database' },
  { name: 'Redis', level: 65, category: 'database' },
  
  // DevOps
  { name: 'Docker', level: 75, category: 'devops' },
  { name: 'AWS', level: 70, category: 'devops' },
  { name: 'CI/CD', level: 65, category: 'devops' },
  { name: 'Git', level: 90, category: 'devops' },
  
  // Tools
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Webpack', level: 70, category: 'tools' },
  { name: 'npm/yarn', level: 85, category: 'tools' },
  { name: 'Jest', level: 75, category: 'tools' },
];

type Category = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Skills' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'database', label: 'Database' },
    { value: 'devops', label: 'DevOps' },
    { value: 'tools', label: 'Tools' },
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
                    "px-4 py-2 rounded-lg transition-all whitespace-nowrap",
                    activeCategory === category.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="glass rounded-xl p-5 transition-all hover:translate-y-[-4px]"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
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
