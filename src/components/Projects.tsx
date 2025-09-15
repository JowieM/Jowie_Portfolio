import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsProps {
  onProjectSelect?: (project: any) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const projects = [
    {
      id: 1,
      title: "SA FinTech Platform",
      description: "Full-stack financial technology platform designed for South African SMEs. Features include mobile payments integration with local banks, invoice management, and financial analytics dashboard.",
      fullDescription: "A comprehensive financial technology platform built specifically for the South African market. This full-stack application serves small and medium enterprises (SMEs) by providing integrated payment solutions, automated invoice management, and real-time financial analytics. The platform integrates with major South African banks and payment providers like PayFast, enabling seamless transactions and financial operations.",
      image: "https://images.unsplash.com/photo-1703675858673-56aab77ccbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1pbmluZSUyMHRlY2glMjB3b3Jrc3BhY2UlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTc5NDQ4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "PostgreSQL", "PayFast", "Docker"],
      liveUrl: "https://sa-fintech-demo.com",
      githubUrl: "https://github.com/jowiemankga/sa-fintech-platform",
      gradient: "from-blue-400 to-slate-500",
      timeline: "6 months",
      teamSize: "4 developers",
      role: "Full-Stack Lead Developer",
      features: [
        "Integration with South African banking APIs",
        "Multi-currency support (ZAR, USD, EUR)",
        "Real-time payment processing with PayFast",
        "Automated invoice generation and tracking",
        "Financial analytics and reporting dashboard",
        "Mobile-responsive design for on-the-go access"
      ],
      challenges: [
        "Integrating with legacy South African banking systems",
        "Ensuring PCI DSS compliance for payment processing",
        "Optimizing for slow internet connections in rural areas",
        "Supporting multiple local languages and currencies"
      ]
    },
    {
      id: 2,
      title: "Ubuntu Learning App",
      description: "Mobile education platform connecting South African students with local tutors. Built with React Native, featuring offline learning modes and local language support including Zulu and Afrikaans.",
      fullDescription: "Ubuntu Learning is a mobile education platform designed to bridge the educational gap in South Africa by connecting students with qualified local tutors. The app features offline learning capabilities, multi-language support for local languages including Zulu, Xhosa, and Afrikaans, and adaptive learning algorithms that adjust content based on student progress and learning patterns.",
      image: "https://images.unsplash.com/photo-1585125575234-22d151c3047e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFmcmljYW4lMjB3b21lbiUyMHRlY2h8ZW58MXx8fHwxNzU3OTQ0ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux", "i18n"],
      liveUrl: "https://ubuntu-learning.co.za",
      githubUrl: "https://github.com/jowiemankga/ubuntu-learning-app",
      gradient: "from-slate-400 to-blue-500",
      timeline: "8 months",
      teamSize: "5 developers + 2 designers",
      role: "Mobile Development Lead",
      features: [
        "Offline content synchronization for areas with poor connectivity",
        "Support for 5 South African languages",
        "AI-powered tutor matching algorithm",
        "Progress tracking and adaptive learning paths",
        "Video calling integration for remote tutoring sessions",
        "Community forums for peer-to-peer learning"
      ],
      challenges: [
        "Implementing robust offline functionality",
        "Optimizing app performance on low-end Android devices",
        "Creating culturally appropriate content and UI",
        "Managing complex state with Redux for offline/online sync"
      ]
    },
    {
      id: 3,
      title: "Data Visualization Suite",
      description: "Interactive analytics dashboard for South African government data insights. Built with Next.js and D3.js, featuring beautiful charts and real-time data processing for public sector transparency.",
      fullDescription: "A comprehensive data visualization platform developed for the South African government to promote transparency and data-driven decision making. The suite aggregates data from multiple government departments and presents it through interactive, accessible dashboards. Built with performance and accessibility in mind, it serves thousands of daily users including government officials, researchers, and citizens.",
      image: "https://images.unsplash.com/photo-1626234736261-f50c9ff94bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwY2hhcnRzfGVufDF8fHx8MTc1Nzk0NDg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "D3.js", "Python", "Redis", "Chart.js"],
      liveUrl: "https://sa-gov-data.gov.za",
      githubUrl: "https://github.com/jowiemankga/sa-gov-dashboard",
      gradient: "from-slate-400 to-blue-400",
      timeline: "12 months",
      teamSize: "8 developers + 3 data scientists",
      role: "Frontend Architecture Lead",
      features: [
        "Real-time data processing and visualization",
        "Interactive maps with demographic overlays",
        "Custom chart components built with D3.js",
        "Advanced filtering and data exploration tools",
        "Export functionality for reports and presentations",
        "WCAG 2.1 AA compliance for accessibility"
      ],
      challenges: [
        "Processing and visualizing large datasets efficiently",
        "Ensuring data accuracy across multiple government sources",
        "Creating intuitive interfaces for non-technical users",
        "Implementing robust caching strategies with Redis"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-200 to-slate-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-slate-200 to-blue-200 rounded-full opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work focusing on South African tech solutions and inclusive design approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur border-2 hover:border-blue-200">
              <div className="aspect-video overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`}></div>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-100"
                      onClick={() => onProjectSelect && onProjectSelect(project)}
                    >
                      <Eye className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-100"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-100"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 text-slate-600" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-gradient-to-r from-blue-100 to-slate-100 text-slate-700 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-slate-100 hover:border-slate-300"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-4 h-4 mr-2 text-blue-600" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;