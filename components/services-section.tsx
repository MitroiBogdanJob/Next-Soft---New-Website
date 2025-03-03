"use client";

import { useLanguage } from '@/components/language-provider';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, ShoppingCart, Code, Database, Search, Monitor, Palette, FileImage, Video } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const { t, language } = useLanguage();
  
  const services = [
    {
      id: "website",
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: t('services.website.title'),
      description: t('services.website.description'),
      price: t('services.website.price'),
      href: '/services/website',
      bgGradient: "from-blue-600/20 to-blue-900/40"
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart className="h-10 w-10 text-indigo-500" />,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description'),
      price: t('services.ecommerce.price'),
      href: '/services/ecommerce',
      bgGradient: "from-indigo-600/20 to-indigo-900/40"
    },
    {
      id: "webapps",
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: t('services.webapps.title'),
      description: t('services.webapps.description'),
      price: t('services.webapps.price'),
      href: '/services/web-applications',
      bgGradient: "from-purple-600/20 to-purple-900/40"
    },
    {
      id: "apis",
      icon: <Code className="h-10 w-10 text-cyan-500" />,
      title: t('services.apis.title'),
      description: t('services.apis.description'),
      price: t('services.apis.price'),
      href: '/services/apis',
      bgGradient: "from-cyan-600/20 to-cyan-900/40"
    },
    {
      id: "seo",
      icon: <Search className="h-10 w-10 text-green-500" />,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      price: t('services.seo.price'),
      href: '/services/seo',
      bgGradient: "from-green-600/20 to-green-900/40"
    },
    {
      id: "desktop",
      icon: <Monitor className="h-10 w-10 text-orange-500" />,
      title: t('services.desktop.title'),
      description: t('services.desktop.description'),
      price: t('services.desktop.price'),
      href: '/services/desktop-applications',
      bgGradient: "from-orange-600/20 to-orange-900/40"
    },
    {
      id: "database",
      icon: <Database className="h-10 w-10 text-red-500" />,
      title: t('services.database.title'),
      description: t('services.database.description'),
      price: t('services.database.price'),
      href: '/services/databases',
      bgGradient: "from-red-600/20 to-red-900/40"
    },
    {
      id: "branding",
      icon: <Palette className="h-10 w-10 text-pink-500" />,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      price: t('services.branding.price'),
      href: '/services/branding',
      bgGradient: "from-pink-600/20 to-pink-900/40"
    },
    {
      id: "graphics",
      icon: <FileImage className="h-10 w-10 text-yellow-500" />,
      title: t('services.graphics.title'),
      description: t('services.graphics.description'),
      price: t('services.graphics.price'),
      href: '/services/graphic-design',
      bgGradient: "from-yellow-600/20 to-yellow-900/40"
    },
    {
      id: "video",
      icon: <Video className="h-10 w-10 text-blue-400" />,
      title: t('services.video.title'),
      description: t('services.video.description'),
      price: t('services.video.price'),
      href: '/services/video-editing',
      bgGradient: "from-blue-400/20 to-blue-700/40"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="bg-gray-900/20 backdrop-blur-sm border-gray-800 h-full flex flex-col hover:border-gray-700 transition-all duration-300 overflow-hidden group">
                <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${service.bgGradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/40 backdrop-blur-sm p-4 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="flex-grow p-6">
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  {service.price && (
                    <p className="text-lg font-semibold text-blue-400">{service.price}</p>
                  )}
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    asChild
                    variant="ghost" 
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-950/30 p-0 flex items-center gap-2"
                  >
                    <Link href={service.href} prefetch={false}>
                      <span>{t('services.learn_more')}</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-gray-900/10 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">{t('services.free.title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: t('services.free.seo'), icon: <Search className="h-5 w-5 text-blue-500" /> },
              { title: t('services.free.hosting'), icon: <Globe className="h-5 w-5 text-blue-500" /> },
              { title: t('services.free.maintenance'), icon: <Code className="h-5 w-5 text-blue-500" /> },
              { title: t('services.free.support'), icon: <Database className="h-5 w-5 text-blue-500" /> }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-800/20 backdrop-blur-sm p-3 rounded-lg">
                <div className="bg-blue-900/30 p-2 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">{item.title}</h4>
                  <p className="text-green-400 text-xs font-semibold">{t('services.free.included')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}