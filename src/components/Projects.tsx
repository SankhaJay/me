
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  category: 'frontend' | 'backend' | 'fullstack';
};

const projects: Project[] = [
  {
    id: 1,
    title: 'CAKE POS',
    description: 'A comprehensive point-of-sale system for restaurants with inventory management, ordering, and analytics capabilities.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO'],
    liveLink: '#',
    githubLink: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'CAKE Reports Dashboard',
    description: 'Advanced analytics dashboard for restaurant owners to visualize sales data, customer patterns, and inventory metrics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    techStack: ['React', 'TypeScript', 'D3.js', 'GraphQL', 'Apollo'],
    liveLink: '#',
    githubLink: '#',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'DIMO',
    description: 'A decentralized IoT platform for vehicle data management, enabling secure data sharing between vehicle owners and service providers.',
    image: 'https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Docker'],
    liveLink: '#',
    githubLink: '#',
    category: 'backend'
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce solution with product catalog, cart functionality, payment processing, and order management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    techStack: ['Next.js', 'Redux', 'Stripe', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
    category: 'fullstack'
  },
];

type Category = 'all' | 'frontend' | 'backend' | 'fullstack';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
  ];
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">My Projects</h2>
            <div className="h-0.5 flex-1 bg-border"></div>
          </div>
          
          <div className="mb-12 flex justify-center">
            <div className="flex space-x-3 p-1">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass rounded-xl overflow-hidden group transition-all hover:translate-y-[-8px]"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    
                    <div className="flex space-x-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors"
                          aria-label={`View ${project.title} GitHub repository`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary transition-colors"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="px-3 py-1 bg-secondary/70 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <span className="mr-2">View more on GitHub</span>
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
