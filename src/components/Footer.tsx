import React from 'react';
import { Separator } from './ui/separator';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Jowie Mankga. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-3 h-3 text-blue-500" /> in Cape Town, South Africa
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://github.com/jowiemankga', '_blank')}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://linkedin.com/in/jowiemankga', '_blank')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            
            <Separator orientation="vertical" className="h-6" />
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="text-xs"
            >
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;