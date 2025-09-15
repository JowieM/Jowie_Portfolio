import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, ArrowDown, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-slate-200 rounded-full opacity-60 blur-xl"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-gradient-to-br from-slate-200 to-blue-200 rounded-full opacity-50 blur-lg"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-200 to-slate-300 rounded-full opacity-40 blur-md"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Developer Image */}
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-slate-300 to-blue-300 rounded-full blur-2xl opacity-30"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653732212701-b729f0b08330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU3OTUzNTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Jowie Mankga - Software Developer"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-blue-100 to-slate-100 text-slate-700 border-blue-200">
              Available for new opportunities
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-blue-600 via-slate-700 to-blue-800 bg-clip-text text-transparent">
              Jowie Mankga
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              Software & Systems Developer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Building scalable systems and elegant user experiences with modern technologies. 
              Based in South Africa, passionate about creating inclusive tech solutions and empowering communities through code.
            </p>
          
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
              <Button onClick={scrollToProjects} size="lg" className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white">
                <Code className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-blue-100"
                  onClick={() => window.open('https://github.com/jowiemankga', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-blue-100"
                  onClick={() => window.open('https://linkedin.com/in/jowiemankga', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-blue-100"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;