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
      description: 'The project demonstrates advanced backend development skills through GraphQL implementation, asynchronous task processing, and scalable system design.',
      technologies: ['Python', 'Django', 'GraphQL', 'PostgreSQL', 'Redis', 'Celery'],
      githubUrl: 'https://github.com/donald-alphonso/alx-project-nexus',
      demoUrl: '#',
      featured: true,
    },
    {
      title: 'Travel App',
      description: 'A Django-based travel application with REST API, Swagger documentation, and Celery task processing.',
      technologies: ['Python', 'MySQL', 'Docker', 'RabbitMQ Server'],
      githubUrl: 'https://github.com/donald-alphonso/alx_travel_app_0x01',
      demoUrl: '#',
      featured: true,
    },
    {
      title: 'God\'s Hand - NGO Showcase Website',
      description: `
        A modern showcase website for the NGO "God's Hand", built with React, TypeScript, and Tailwind CSS.
        - Fully responsive with dark/light mode support
        - Smooth animations and reusable UI components
        - Multilingual support (French/English) with dynamic language switching
        - Backend API for managing site content (blog, media, contact form)
        - Includes mission presentation, gallery, testimonials, blog, and contact form
        - Social media integration with floating action buttons
      `,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'React Router', 'Context API', 'Node.js', 'REST API'],
      githubUrl: 'https://github.com/donald-alphonso/backend-ong-site-vitrine',
      demoUrl: 'https://ong-site-vitrine.vercel.app/',
      featured: false,
    },
    {
      title: 'Authify API - Secure Authentication Service',
      description: `
        A robust REST API for authentication and user management, built with Node.js, Express, MongoDB, and JWT.
        - Full JWT authentication with signup, login, and profile management
        - Refresh token support for enhanced security and user experience
        - Password management (reset and update with secure hashing)
        - Clean architecture with controllers, services, and models
        - Centralized error handling with consistent responses
        - Logging with Winston and Morgan (dev & production)
        - Route protection via authentication middleware
        - Centralized input validation for user data
        - Ready for deployment on Vercel
        - Uses modern ES Modules syntax (import/export)
      `,
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Mongoose', 'Winston', 'Morgan'],
      githubUrl: 'https://github.com/credalyx/authify-api',
      demoUrl: '#',
      featured: false,
    },
    {
      title: 'Mini Weather API - PHP MVC Project',
      description: `
        A lightweight API built with PHP that allows you to:
        - Get current weather data for a given city
        - Retrieve multi-day forecasts (upcoming feature)
        - Run on a clean MVC (Model-View-Controller) architecture
        - Cache API responses to reduce external API calls
        - Deploy easily on Railway or any hosting provider
      `,
      technologies: ['PHP', 'MVC Architecture', 'cURL', 'Caching'],
      githubUrl: 'https://github.com/donald-alphonso/weather-api-php',
      demoUrl: '#',
      featured: false,
    },
    {
      title: 'URL Shortener - Node.js Project',
      description: `
        A simple backend API built with Node.js and Express that:
        - Generates short links for long URLs
        - Stores shortened URLs in memory (for demo purposes)
        - Provides an endpoint to create and retrieve short links
        - Can be extended to use a real database (MongoDB, Redis, etc.)
      `,
      technologies: ['Node.js', 'Express', 'JavaScript'],
      githubUrl: 'https://github.com/donald-alphonso/url-shortener-node',
      demoUrl: '#',
      featured: false,
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

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? 'lg:col-span-2 xl:col-span-1' : ''}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Badge variant="secondary" className="ml-2">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-3">
                  <div className="flex space-x-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
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
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            <Github className="h-4 w-4 mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;