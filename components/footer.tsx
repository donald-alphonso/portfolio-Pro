"use client";

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-muted/50 border-t"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © 2024 Donald Alphonso AHOSSI. {t('footer.rights')}
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              {t('footer.builtWith')}
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;