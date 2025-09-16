"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Award, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const { t } = useTranslation();
  
  const timeline = [
    {
      year: t('timeline.softwareDeveloper.period'),
      title: t('timeline.softwareDeveloper.title'),
      company: t('timeline.softwareDeveloper.company'),
      description: t('timeline.softwareDeveloper.description'),
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      year: t('timeline.bachelor.period'),
      title: t('timeline.bachelor.title'),
      company: t('timeline.bachelor.company'),
      description: t('timeline.bachelor.description'),
      icon: <GraduationCap className="h-4 w-4" />,
    },
  ];
  
  const certifications = [
    {
      title: t('certifications.prodevBackend.title'),
      issuer: t('certifications.prodevBackend.issuer'),
      date: t('certifications.prodevBackend.date'),
      description: t('certifications.prodevBackend.description'),
    },
    {
      title: t('certifications.softwareDeveloperCert.title'),
      issuer: t('certifications.softwareDeveloperCert.issuer'),
      date: t('certifications.softwareDeveloperCert.date'),
      description: t('certifications.softwareDeveloperCert.description'),
    },
    {
      title: t('certifications.professionalFoundations.title'),
      issuer: t('certifications.professionalFoundations.issuer'),
      date: t('certifications.professionalFoundations.date'),
      description: t('certifications.professionalFoundations.description'),
    },
    {
      title: t('certifications.aiCareerEssentials.title'),
      issuer: t('certifications.aiCareerEssentials.issuer'),
      date: t('certifications.aiCareerEssentials.date'),
      description: t('certifications.aiCareerEssentials.description'),
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('about.subtitle')}
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
            <h3 className="text-2xl font-semibold mb-4">{t('about.myStory')}</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {t('about.story1')}
              </p>
              <p>
                {t('about.story2')}
              </p>
              <p>
                {t('about.story3')}
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
              <h3 className="text-2xl font-semibold mb-6">{t('about.journeyHighlights')}</h3>
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
              <h3 className="text-2xl font-semibold mb-6">{t('about.certificationsLearning')}</h3>
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