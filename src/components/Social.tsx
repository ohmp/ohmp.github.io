
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import YouTubeEmbed from './YouTubeEmbed';
import LinkedInPost from './LinkedInPost';

const Social = () => {
  const [activeTab, setActiveTab] = useState("youtube");

  const youtubeVideos = [
    {
      id: "dQw4w9WgXcQ", // Placeholder - replace with actual video IDs
      title: "Introduction to Mobile AI Applications",
      description: "Learn how to integrate AI capabilities into mobile apps"
    },
    {
      id: "dQw4w9WgXcQ", // Placeholder - replace with actual video IDs
      title: "Cloud Computing for AI Developers",
      description: "Best practices for deploying AI models to the cloud"
    },
    {
      id: "dQw4w9WgXcQ", // Placeholder - replace with actual video IDs
      title: "The Future of Mobile Development",
      description: "Trends and predictions in the mobile app ecosystem"
    }
  ];

  const linkedinPosts = [
    {
      title: "Optimizing AI Models for Mobile Devices",
      excerpt: "Techniques and strategies for running efficient machine learning models on resource-constrained mobile devices.",
      date: "April 12, 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Convergence of Mobile and Cloud Computing",
      excerpt: "How the integration of mobile apps with cloud services is creating new possibilities for developers and users alike.",
      date: "March 28, 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Latest Advancements in NLP for Mobile Applications",
      excerpt: "A deep dive into how natural language processing is transforming the mobile user experience.",
      date: "February 15, 2025"
    },
    {
      title: "Building Resilient Mobile Apps with Cloud Infrastructure",
      excerpt: "Best practices for creating robust, scalable mobile applications using modern cloud architectures.",
      date: "January 30, 2025"
    }
  ];

  return (
    <section id="content" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="section-title">Content & Insights</h2>
        <p className="section-subtitle">
          Explore my latest videos and articles on AI, mobile development, and cloud computing.
        </p>

        <Tabs defaultValue="youtube" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="youtube">YouTube Videos</TabsTrigger>
              <TabsTrigger value="linkedin">LinkedIn Articles</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="youtube" className="space-y-8">
            {youtubeVideos.map((video, index) => (
              <div 
                key={video.id + index} 
                className="appear" 
                style={{ '--order': index + 1 } as React.CSSProperties}
              >
                <YouTubeEmbed videoId={video.id} title={video.title} />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="linkedin">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {linkedinPosts.map((post, index) => (
                <div 
                  key={post.title} 
                  className="appear" 
                  style={{ '--order': index + 1 } as React.CSSProperties}
                >
                  <LinkedInPost 
                    title={post.title} 
                    excerpt={post.excerpt} 
                    date={post.date}
                    image={post.image}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Social;
