
import { Briefcase } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    company: 'CAKE Technologies',
    position: 'Full Stack Developer',
    period: 'Jan 2023 - Present',
    location: 'San Francisco, CA',
    description: 'Leading development of point-of-sale and analytics systems for restaurant clients.',
    achievements: [
      'Developed and optimized CAKE POS, increasing transaction processing speed by 40%',
      'Built responsive analytics dashboard with real-time data visualization',
      'Implemented microservices architecture to improve system scalability',
      'Resolved critical production issues in UA Reports within 12 hours',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    id: 2,
    company: 'DIMO',
    position: 'Backend Engineer',
    period: 'Mar 2022 - Dec 2022',
    location: 'Austin, TX',
    description: 'Worked on distributed systems for vehicle data management and IoT integration.',
    achievements: [
      'Designed and implemented RESTful APIs for vehicle data transmission',
      'Created data pipelines using Kafka for real-time event processing',
      'Optimized PostgreSQL database queries, reducing response time by 30%',
      'Containerized application services using Docker and Kubernetes',
      'Collaborated with frontend team to integrate APIs with mobile applications'
    ]
  },
  {
    id: 3,
    company: 'Tech Innovators',
    position: 'Junior Developer',
    period: 'Jun 2021 - Feb 2022',
    location: 'Remote',
    description: 'Contributed to web application development for diverse client projects.',
    achievements: [
      'Built and maintained React-based user interfaces for various clients',
      'Collaborated in agile development environment with bi-weekly sprints',
      'Implemented responsive designs following UI/UX specifications',
      'Assisted in migrating legacy PHP application to modern React/Node stack',
      'Participated in code reviews and quality assurance processes'
    ]
  }
];

export const Experience = () => {
  const [activeId, setActiveId] = useState<number>(experiences[0].id);
  
  const activeExperience = experiences.find(exp => exp.id === activeId);
  
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
            <div className="h-0.5 flex-1 bg-border"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="glass rounded-xl p-4 h-fit overflow-x-auto hide-scrollbar">
              <div className="flex flex-col space-y-2 min-w-fit">
                {experiences.map((experience) => (
                  <button
                    key={experience.id}
                    onClick={() => setActiveId(experience.id)}
                    className={cn(
                      "flex items-center text-left p-4 rounded-lg transition-all whitespace-nowrap group",
                      activeId === experience.id 
                        ? "bg-primary/20 border-l-4 border-primary" 
                        : "hover:bg-secondary border-l-4 border-transparent"
                    )}
                  >
                    <Briefcase 
                      size={18} 
                      className={cn(
                        "mr-3 flex-shrink-0 transition-colors", 
                        activeId === experience.id 
                          ? "text-primary" 
                          : "text-muted-foreground group-hover:text-foreground"
                      )} 
                    />
                    <div>
                      <p className={cn(
                        "font-medium transition-colors",
                        activeId === experience.id 
                          ? "text-primary" 
                          : "text-foreground"
                      )}>
                        {experience.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {experience.position}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 glass rounded-xl p-8">
              {activeExperience && (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{activeExperience.position}</h3>
                    <div className="flex flex-wrap items-center text-muted-foreground">
                      <span className="mr-3">{activeExperience.company}</span>
                      <span className="mr-3">•</span>
                      <span className="mr-3">{activeExperience.location}</span>
                      <span className="mr-3">•</span>
                      <span>{activeExperience.period}</span>
                    </div>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {activeExperience.description}
                  </p>
                  
                  <h4 className="text-lg font-medium mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {activeExperience.achievements.map((achievement, index) => (
                      <li key={index} className="flex">
                        <span className="text-primary mr-3">→</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
