import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    gradient: string;
    fullDescription: string;
    features: string[];
    challenges: string[];
    timeline: string;
    teamSize: string;
    role: string;
    gallery?: string[];
  };
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 hover:bg-blue-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {project.fullDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-gradient-to-r from-blue-100 to-slate-100 text-slate-700 border-blue-200">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-200 hover:bg-blue-50"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-xl`}></div>
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur border-blue-100">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.timeline}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-blue-100">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-blue-600" />
                Team Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.teamSize}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-blue-100">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code className="w-5 h-5 text-blue-600" />
                My Role
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.role}</p>
            </CardContent>
          </Card>
        </div>

        {/* Features & Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/80 backdrop-blur border-blue-100">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-blue-100">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                Challenges & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <Card className="bg-white/80 backdrop-blur border-blue-100">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                Project Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative group">
                    <ImageWithFallback
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;