
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: string;
}

const Certificates = () => {
  const certificates: Certificate[] = [
    {
      title: "AI Engineering Certification",
      issuer: "Microsoft",
      date: "May 2024",
      credentialId: "MS-AI-12345",
      category: "Artificial Intelligence"
    },
    {
      title: "Advanced Mobile Development",
      issuer: "Google",
      date: "January 2024",
      credentialId: "GDC-AMD-78912",
      category: "Mobile Development"
    },
    {
      title: "Cloud Computing Specialist",
      issuer: "AWS",
      date: "October 2023",
      credentialId: "AWS-CCS-34567",
      category: "Cloud Computing"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "July 2023",
      category: "Design"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-title">Certificates & Credentials</h2>
        <p className="section-subtitle">Professional certifications that validate my expertise and skills</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificates.map((cert, index) => (
            <Card key={index} className="h-full transition-all hover:shadow-md hover:border-tech-purple/50">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-tech-purple/10 text-tech-purple border-tech-purple/30">
                    {cert.category}
                  </Badge>
                  <Trophy className="h-5 w-5 text-tech-purple" />
                </div>
                <CardTitle className="mt-3 text-xl">{cert.title}</CardTitle>
                <CardDescription className="flex flex-col">
                  <span className="font-medium">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                {cert.credentialId && (
                  <p className="text-muted-foreground">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <a href="#" className="text-tech-purple hover:underline text-sm font-medium">
                  View Certificate
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
