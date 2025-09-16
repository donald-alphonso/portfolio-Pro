"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Server, 
  Database, 
  Cloud, 
  Code, 
  Shield, 
  Wrench 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Technologies',
      icon: <Server className="h-6 w-6" />,
      skills: [
        'Node.js', 'Express.js', 'NestJS', 'Python', 'Php', 
        'TypeScript', 'JavaScript', 'REST APIs', 'GraphQL'
      ],
      color: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      skills: [
        'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Database Design'
      ],
      color: 'bg-green-500/10 text-green-700 dark:text-green-300',
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        'Docker', 'CI/CD', 'Linux', 'Nginx', 'Monitoring', 'Deployment'
      ],
      color: 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
    },
    {
      title: 'Development Tools',
      icon: <Code className="h-6 w-6" />,
      skills: [
        'Git', 'VS Code', 'Postman', 'Jest', 
        'ESLint', 'Prettier', 'Webpack', 'Vite'
      ],
      color: 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
    },
    {
      title: 'Security & Auth',
      icon: <Shield className="h-6 w-6" />,
      skills: [
        'JWT', 'OAuth2', 'Passport.js', 'bcrypt', 
        'HTTPS', 'CORS', 'Rate Limiting', '2FA'
      ],
      color: 'bg-red-500/10 text-red-700 dark:text-red-300',
    },
    {
      title: 'Architecture & Patterns',
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        'Microservices', 'MVC', 'Clean Architecture', 'SOLID', 
        'Design Patterns', 'Event-Driven', 'Message Queues'
      ],
      color: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300',
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in backend development.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2 rounded-lg ${category.color} group-hover:scale-110 transition-transform duration-200`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          duration: 0.3 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-default"
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Always Learning</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm constantly exploring new technologies and staying up-to-date with the latest 
            trends in backend development, cloud computing, and software architecture.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Solidity', 'Serverless', 'Event Sourcing', 'CQRS', 
              'Apache Kafka', 'RabbitMQ', 'Terraform', 'Prometheus', 'Grafana'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <Badge 
                  variant="outline" 
                  className="text-sm py-2 px-4 border-dashed hover:border-solid hover:bg-muted transition-all duration-200"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;