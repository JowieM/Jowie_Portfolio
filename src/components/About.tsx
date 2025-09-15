import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Cloud, Smartphone, Globe, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      category: "Backend",
      icon: <Database className="w-5 h-5" />,
      technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"]
    },
    {
      category: "DevOps",
      icon: <Cloud className="w-5 h-5" />,
      technologies: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"]
    },
    {
      category: "Tools",
      icon: <Code className="w-5 h-5" />,
      technologies: ["Git", "Jest", "Cypress", "Figma", "Linux", "VS Code"]
    },
    {
      category: "Performance",
      icon: <Zap className="w-5 h-5" />,
      technologies: ["Optimization", "Caching", "CDN", "Monitoring", "Load Testing"]
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-slate-100 rounded-full opacity-30 -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full opacity-25 translate-x-40 translate-y-40"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl mb-8 bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">About Me</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate software developer with over 5 years of experience building 
                scalable web applications and distributed systems. Born and raised in Johannesburg, 
                my journey started with a Computer Science degree from the University of the Witwatersrand 
                and has evolved through various roles in both local startups and international companies.
              </p>
              
              <p>
                I specialize in full-stack development with a strong focus on creating inclusive, 
                accessible solutions that serve the diverse South African market. I believe in 
                writing clean, well-tested code while staying current with the latest technologies 
                and advocating for diversity in tech.
              </p>
              
              <p>
                When I'm not coding, you can find me mentoring young women in tech through 
                organizations like Girl Code and Code4CT, contributing to open-source projects, 
                or exploring the beautiful landscapes of the Western Cape. I'm passionate about 
                using technology to solve uniquely African challenges.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl mb-4 bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">Education & Certifications</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• B.S. Computer Science - University of the Witwatersrand (2019)</p>
                <p>• AWS Certified Solutions Architect</p>
                <p>• Google Cloud Professional Developer</p>
                <p>• Microsoft Azure Fundamentals</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl mb-8 bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">Skills & Technologies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur border-blue-100 hover:border-blue-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <div className="p-2 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg">
                        {React.cloneElement(skill.icon, { className: "w-5 h-5 text-blue-600" })}
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                        {skill.category}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-blue-200 text-slate-700 hover:bg-blue-50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-blue-100">
              <h4 className="mb-3 bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-slate-100 text-slate-700">Rust</Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-slate-100 text-slate-700">GraphQL</Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-slate-100 text-slate-700">Machine Learning</Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-slate-100 text-slate-700">Blockchain</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;