
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Health App",
      description: "Mobile application using machine learning to provide personalized health recommendations based on user data.",
      tags: ["Swift", "CoreML", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cloud-Based Enterprise Solution",
      description: "Scalable enterprise application with microservices architecture deployed on cloud infrastructure.",
      tags: ["Kotlin", "Microservices", "Google Cloud", "Docker"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive mobile application that visualizes neural networks and their learning process in real-time.",
      tags: ["React Native", "TensorFlow.js", "D3.js"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Smart Home Control System",
      description: "IoT-based mobile application that uses AI to learn user preferences and automate home environment controls.",
      tags: ["Flutter", "Firebase", "IoT", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of my recent work across mobile development and AI engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card overflow-hidden flex flex-col appear" 
              style={{ '--order': index + 1 } as React.CSSProperties}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-tech-light text-tech-blue rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  <span>View Details</span>
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
