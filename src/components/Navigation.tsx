import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-medium hover:text-muted-foreground transition-colors"
          >
            Jowie Mankga
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('hero')}
              className="hover:bg-accent/50"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('projects')}
              className="hover:bg-accent/50"
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="hover:bg-accent/50"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="hover:bg-accent/50"
            >
              Contact
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur border-b shadow-lg">
            <div className="flex flex-col space-y-1 p-4">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('hero')}
                className="justify-start hover:bg-accent/50"
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('projects')}
                className="justify-start hover:bg-accent/50"
              >
                Projects
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                className="justify-start hover:bg-accent/50"
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contact')}
                className="justify-start hover:bg-accent/50"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;