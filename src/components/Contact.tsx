import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-slate-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-slate-200 to-blue-200 rounded-full opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects across Africa. 
            Let's discuss how we can work together to create impactful solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">jowie.mankga@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+27 (0)83 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Cape Town, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-6">Social Links</h3>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-blue-200 hover:bg-blue-50"
                  onClick={() => window.open('https://github.com/jowiemankga', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2 text-blue-600" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-slate-200 hover:bg-slate-50"
                  onClick={() => window.open('https://linkedin.com/in/jowiemankga', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2 text-slate-600" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-blue-200 hover:bg-blue-50"
                  onClick={() => window.open('https://twitter.com/jowiemankga', '_blank')}
                >
                  <Twitter className="w-5 h-5 mr-2 text-blue-600" />
                  Twitter
                </Button>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Let's Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for freelance projects and full-time opportunities across South Africa and internationally. 
                  Whether you have a specific project in mind or want to discuss diversity in tech, 
                  I'd love to hear from you.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800">Schedule Call</Button>
                  <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50">Download Resume</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur border-blue-100">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;