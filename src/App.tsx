import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        <Projects onProjectSelect={handleProjectSelect} />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}