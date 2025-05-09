
import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Mobile Development",
      items: ["iOS (Swift/SwiftUI)", "Android (Kotlin/Java)", "React Native", "Flutter", "App Design", "App Performance"]
    },
    {
      category: "Artificial Intelligence",
      items: ["Machine Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "AI Model Deployment"]
    },
    {
      category: "Cloud Computing",
      items: ["AWS", "Google Cloud", "Azure", "Serverless", "Microservices", "DevOps"]
    },
    {
      category: "Leadership",
      items: ["Team Management", "Technical Planning", "Mentoring", "Agile Methodologies", "Project Roadmaps", "Client Communication"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-title">My Expertise</h2>
        <p className="section-subtitle">
          With over a decade of experience in technology, I've developed expertise across multiple domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="skill-card appear" 
              style={{ '--order': index + 1 } as React.CSSProperties}
            >
              <h3 className="text-xl font-semibold mb-4 text-tech-blue">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-tech-purple mr-2"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
