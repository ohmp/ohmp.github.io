
import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin } from 'lucide-react';

interface LinkedInPostProps {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

const LinkedInPost: React.FC<LinkedInPostProps> = ({ title, excerpt, date, image }) => {
  return (
    <div className="content-card flex flex-col h-full">
      {image && (
        <div className="h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 flex-grow">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-muted-foreground">{date}</span>
          <Button variant="ghost" size="sm" className="gap-2">
            <Linkedin size={16} />
            <span>Read on LinkedIn</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LinkedInPost;
