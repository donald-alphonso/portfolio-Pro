"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Social Media API',
      description: `
        A comprehensive social media backend API showcasing advanced development skills:
        - GraphQL implementation for flexible data querying
        - Asynchronous task processing with Celery
        - Scalable system design with microservices architecture
        - Robust data persistence with PostgreSQL
        - Redis for caching and performance optimization
      `,
      technologies: ['Python', 'Django', 'GraphQL', 'PostgreSQL', 'Redis', 'Celery'],
      githubUrl: 'https://github.com/donald-alphonso/alx-project-nexus',
      demoUrl: '#',
      featured: true,
      image: '/images/projects/social-media-api.jpg',
    },
    {
      title: 'Travel App',
      description: `
        A feature-rich travel application built with Django:
        - RESTful API with comprehensive Swagger documentation
        - Containerized with Docker for easy deployment
        - Background task processing with Celery and RabbitMQ
        - Relational database design with MySQL
        - User authentication and authorization system
      `,
      technologies: ['Python', 'Django', 'MySQL', 'Docker', 'RabbitMQ', 'REST API'],
      githubUrl: 'https://github.com/donald-alphonso/alx_travel_app_0x01',
      demoUrl: '#',
      featured: true,
      image: '/images/projects/travel-app.jpg',
    },
    {
      title: 'God\'s Hand - NGO Showcase Website',
      description: `
        A modern showcase website for the NGO "God's Hand":
        - Fully responsive with dark/light mode support
        - Smooth animations and reusable UI components
        - Multilingual support (French/English) with dynamic switching
        - Backend API for managing site content
        - Includes mission presentation, gallery, testimonials, and blog
        - Social media integration with floating action buttons
      `,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST API'],
      githubUrl: 'https://github.com/donald-alphonso/backend-ong-site-vitrine',
      demoUrl: 'https://ong-site-vitrine.vercel.app/',
      featured: false,
      image: '/images/projects/ngo-website.jpg',
    },
    {
      title: 'Authify API - Secure Authentication Service',
      description: `
        A robust REST API for authentication and user management:
        - Full JWT authentication with signup, login, and profile management
        - Refresh token support for enhanced security
        - Password management with secure hashing
        - Clean architecture (controllers, services, models)
        - Centralized error handling with consistent responses
        - Comprehensive logging system (Winston and Morgan)
      `,
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Mongoose'],
      githubUrl: 'https://github.com/donald-alphonso/authify-api',
      demoUrl: '#',
      featured: false,
      image: '/images/projects/authify-api.jpg',
    },
    {
      title: 'Mini Weather API - PHP MVC Project',
      description: `
        A lightweight weather API built with PHP:
        - Get current weather data for any city
        - Multi-day forecast functionality
        - Clean MVC architecture for maintainability
        - Response caching to reduce external API calls
        - Easy deployment on various hosting platforms
      `,
      technologies: ['PHP', 'MVC Architecture', 'cURL', 'Caching'],
      githubUrl: 'https://github.com/donald-alphonso/weather-api-php',
      demoUrl: '#',
      featured: false,
      image: '/images/projects/weather-api.jpg',
    },
    {
      title: 'URL Shortener - Node.js Project',
      description: `
        A simple but effective URL shortening service:
        - Generates short links for long URLs
        - RESTful API design principles
        - Expandable to use persistent databases
        - Clean and minimal codebase
        - Optimized for performance
      `,
      technologies: ['Node.js', 'Express', 'JavaScript'],
      githubUrl: 'https://github.com/donald-alphonso/url-shortener-node',
      demoUrl: '#',
      featured: false,
      image: '/images/projects/url-shortener.jpg',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A showcase of backend systems I've built, from APIs and microservices 
            to real-time applications and data processing systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? 'lg:col-span-2 xl:col-span-1' : ''}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group border-muted hover:border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary hover:bg-primary/20">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line">
                    {project.description}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs py-1 bg-secondary/10 hover:bg-secondary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t border-border/50">
                  <div className="flex space-x-3 w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary/10 hover:text-primary transition-colors"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`flex-1 ${project.demoUrl !== '#' ? 'hover:bg-primary/10 hover:text-primary' : 'opacity-70 cursor-not-allowed'} transition-colors`}
                      asChild
                      disabled={project.demoUrl === '#'}
                    >
                      <a 
                        href={project.demoUrl !== '#' ? project.demoUrl : undefined} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={project.demoUrl === '#' ? (e) => e.preventDefault() : undefined}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
            asChild
          >
            <a href="https://github.com/donald-alphonso" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;