
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 md:pt-28">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="appear" style={{ '--order': '1' } as React.CSSProperties}>
            <span className="inline-block text-tech-purple font-semibold mb-2">
              Sr. Technology Lead at Appinventiv
            </span>
            <h1 className="text-foreground leading-tight">
              Mobile Developer & <span className="text-tech-purple">AI Engineer</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg appear" style={{ '--order': '2' } as React.CSSProperties}>
            Specializing in mobile application development, artificial intelligence, and cloud computing.
            Sharing knowledge on the latest tech trends and AI tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 appear" style={{ '--order': '3' } as React.CSSProperties}>
            <Button size="lg" className="bg-tech-purple hover:bg-tech-purple/90">
              View Projects
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#content">
                View Content
              </a>
            </Button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-purple/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 bg-gradient-to-br from-tech-light to-white p-8 rounded-2xl shadow-lg border border-tech-light/50 appear" style={{ '--order': '2' } as React.CSSProperties}>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/5a83be98-7237-4c21-9040-f799c01f0b71.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 lg:mt-24 appear" style={{ '--order': '4' } as React.CSSProperties}>
        <a href="#skills" className="animate-bounce">
          <ArrowDownCircle className="w-10 h-10 text-tech-purple" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
