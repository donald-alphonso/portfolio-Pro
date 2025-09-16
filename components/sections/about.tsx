"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Award, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const timeline = [
    {
      year: '2022 - PRESENT',
      title: 'Software Developer',
      company: 'HIGHFIVE UNIVERSITY',
      description: 'Developed data synchronization features using PHP and Python for multiple databases based on project-specific needs. Collaborated with the team to ensure the quality and reliability of the implemented features.',
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      year: 'JUL 2020',
      title: 'Bachelor in Telecommunications and Computer Engineering',
      company: 'UCAO-UUC',
      description: "Graduated with a Bachelor's degree in Telecommunications and Computer Engineering, focusing on software development and telecommunications systems.",
      icon: <GraduationCap className="h-4 w-4" />,
    },
  ];
  
  const certifications = [
    {
      title: 'ProDev Backend',
      issuer: 'ALX Africa',
      date: '2025',
      description: 'Advanced backend development program focusing on scalable architecture, system monitoring, and API optimization techniques.',
    },
    {
      title: 'Software Developer Certification',
      issuer: 'HIGHFIVE UNIVERSITY',
      date: '2025',
      description: 'Internal certification program covering full-stack development, database design, and enterprise software architecture.',
    },
    {
      title: 'Professional Foundations',
      issuer: 'ALX Africa',
      date: '2025',
      description: 'Leadership program focused on building ethical and impactful professionals equipped to tackle complex business challenges.',
    },
    {
      title: 'AI Career Essentials',
      issuer: 'ALX Africa',
      date: '2024',
      description: 'Certification in AI-augmented professional development skills for the digital workplace and emerging technologies.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            I&apos;m a passionate backend developer specializing in data synchronization and system integration,
            building robust solutions that power modern applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Bio section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey into backend development began during my IT and Telecommunications Engineering studies at UCAO-UUC, 
                where I discovered my passion for building robust systems and infrastructure that power modern applications.
              </p>
              <p>
                I specialize in backend technologies including PHP, Python, Node.js, and database systems, with a focus on 
                creating efficient, maintainable, and scalable solutions. I enjoy tackling complex data synchronization 
                challenges and ensuring system reliability.
              </p>
              <p>
                Currently working at HIGHFIVE UNIVERSITY, I develop data synchronization features across multiple databases 
                and collaborate with teams to deliver high-quality software solutions. When I&apos;m not coding, you&apos;ll find me 
                exploring new technologies and continuously expanding my skills through certifications and learning.
              </p>
            </div>
          </motion.div>

          {/* Timeline section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Journey Highlights</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-200 border-muted hover:border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              {item.icon}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{item.title}</h4>
                              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                                {item.year}
                              </span>
                            </div>
                            <p className="text-primary font-medium mb-2">{item.company}</p>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Certifications & Learning</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-200 border-muted hover:border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Award className="h-4 w-4" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{cert.title}</h4>
                              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                                {cert.date}
                              </span>
                            </div>
                            <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                            <p className="text-muted-foreground text-sm">{cert.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;