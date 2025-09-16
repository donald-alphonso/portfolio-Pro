"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Senior Backend Developer',
      company: 'Tech Company',
      description: 'Leading backend architecture and mentoring junior developers',
      icon: <MapPin className="h-4 w-4" />,
    },
    {
      year: '2022',
      title: 'Backend Developer',
      company: 'Startup Inc.',
      description: 'Developed scalable APIs and microservices architecture',
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      year: '2020',
      title: 'Computer Science Degree',
      company: 'University',
      description: 'Graduated with honors, specialized in software engineering',
      icon: <GraduationCap className="h-4 w-4" />,
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
            I'm a passionate backend developer with over 4 years of experience building 
            robust, scalable systems that power modern applications.
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
                My journey into backend development started during my computer science studies, 
                where I discovered my passion for building the invisible infrastructure that 
                powers user experiences.
              </p>
              <p>
                I specialize in Node.js and modern backend technologies, with a focus on 
                creating efficient, maintainable, and scalable solutions. I enjoy tackling 
                complex problems and optimizing system performance.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Timeline section */}
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
                  <Card className="hover:shadow-md transition-shadow duration-200">
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
        </div>
      </div>
    </section>
  );
};

export default About;