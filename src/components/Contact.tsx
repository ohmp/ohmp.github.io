
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to reach out for collaborations, speaking opportunities, or just to connect.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-6 appear" style={{ '--order': '1' } as React.CSSProperties}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" placeholder="Your email" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-32"
                />
              </div>
              <Button className="w-full bg-tech-purple hover:bg-tech-purple/90">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="appear" style={{ '--order': '2' } as React.CSSProperties}>
            <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
            <p className="text-muted-foreground mb-8">
              I'm always interested in new opportunities, collaborations, and connecting with fellow technology enthusiasts.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-tech-purple/10 flex items-center justify-center mr-4">
                  <Linkedin className="h-6 w-6 text-tech-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-muted-foreground">Follow me for industry insights</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-tech-purple/10 flex items-center justify-center mr-4">
                  <Youtube className="h-6 w-6 text-tech-purple" />
                </div>
                <div>
                  <h4 className="font-semibold">YouTube</h4>
                  <p className="text-muted-foreground">Subscribe for tech tutorials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
