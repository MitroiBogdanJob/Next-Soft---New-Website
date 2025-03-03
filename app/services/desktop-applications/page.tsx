"use client";

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Monitor, Code, Database, Shield, Zap, Settings } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/cta-section';
import Image from 'next/image';

export default function DesktopApplicationsPage() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Monitor className="h-10 w-10 text-blue-500" />,
      title: "Interfețe Intuitive",
      description: "Dezvoltăm interfețe utilizator intuitive și atractive care îmbunătățesc experiența utilizatorilor și productivitatea."
    },
    {
      icon: <Code className="h-10 w-10 text-indigo-500" />,
      title: "Dezvoltare Personalizată",
      description: "Creăm aplicații desktop complet personalizate, adaptate perfect proceselor și cerințelor specifice ale afacerii dvs."
    },
    {
      icon: <Database className="h-10 w-10 text-green-500" />,
      title: "Integrare cu Baze de Date",
      description: "Integrăm aplicațiile cu baze de date robuste pentru stocarea și gestionarea eficientă a datelor."
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      title: "Securitate Avansată",
      description: "Implementăm măsuri de securitate avansate pentru a proteja datele sensibile și a preveni accesul neautorizat."
    },
    {
      icon: <Zap className="h-10 w-10 text-red-500" />,
      title: "Performanță Optimizată",
      description: "Optimizăm aplicațiile pentru performanță maximă, asigurând operațiuni rapide chiar și cu volume mari de date."
    },
    {
      icon: <Settings className="h-10 w-10 text-purple-500" />,
      title: "Mentenanță și Suport",
      description: "Oferim servicii complete de mentenanță, actualizare și suport tehnic pentru aplicațiile dezvoltate."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "€1500",
      description: "Ideal pentru afaceri mici care au nevoie de o aplicație desktop simplă și eficientă.",
      features: [
        "Aplicație cu funcționalități de bază",
        "Interfață utilizator intuitivă",
        "Integrare cu bază de date locală",
        "Până la 5 module funcționale",
        "Documentație tehnică",
        "Instalare și configurare",
        "Suport tehnic 30 zile"
      ],
      cta: "Solicită Ofertă",
      popular: false
    },
    {
      name: "Standard",
      price: "€3000",
      description: "Pentru afaceri în creștere care necesită aplicații desktop mai complexe.",
      features: [
        "Aplicație cu funcționalități avansate",
        "Interfață utilizator personalizată",
        "Integrare cu baze de date SQL Server/MySQL",
        "Până la 10 module funcționale",
        "Rapoarte și analize",
        "Securitate avansată",
        "Documentație completă",
        "Instalare și configurare",
        "Training utilizatori",
        "Suport tehnic 90 zile"
      ],
      cta: "Solicită Ofertă",
      popular: true
    },
    {
      name: "Enterprise",
      price: "€8000+",
      description: "Soluție completă pentru afaceri cu cerințe complexe și procese specifice.",
      features: [
        "Aplicație complexă multi-modul",
        "Interfață utilizator premium",
        "Integrare cu multiple sisteme și baze de date",
        "Module funcționale nelimitate",
        "Rapoarte și dashboard-uri avansate",
        "Securitate la nivel enterprise",
        "Sincronizare date online/offline",
        "Documentație detaliată",
        "Instalare și configurare",
        "Training complet utilizatori",
        "Suport tehnic dedicat 12 luni"
      ],
      cta: "Solicită Ofertă",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Sisteme ERP",
      description: "Aplicații complete pentru gestionarea resurselor companiei, incluzând financiar, stocuri, producție și HR.",
      icon: <Settings className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Sisteme CRM",
      description: "Aplicații pentru gestionarea relațiilor cu clienții, urmărirea lead-urilor și automatizarea vânzărilor.",
      icon: <Database className="h-10 w-10 text-indigo-500" />
    },
    {
      title: "Aplicații de Management",
      description: "Soluții pentru gestionarea proiectelor, resurselor și proceselor specifice industriei dvs.",
      icon: <Monitor className="h-10 w-10 text-green-500" />
    },
    {
      title: "Sisteme POS",
      description: "Aplicații pentru puncte de vânzare, gestionarea inventarului și procesarea tranzacțiilor.",
      icon: <Zap className="h-10 w-10 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-600 text-white px-3 py-1 text-sm">
              Soluții Software Personalizate
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Aplicații Desktop Profesionale
            </h1>
            <p className="text-xl text-gray-300">
              Dezvoltăm aplicații desktop personalizate care optimizează procesele de afaceri și cresc productivitatea
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">De ce să alegeți aplicații desktop?</h2>
              <p className="text-gray-300 mb-6">
                Aplicațiile desktop oferă performanță superioară, securitate sporită și funcționalitate offline, fiind ideale pentru procesele de afaceri critice care necesită acces rapid la date și operațiuni complexe. Spre deosebire de aplicațiile web, acestea pot utiliza la maximum resursele sistemului și pot oferi o experiență utilizator mai fluidă.
              </p>
              <p className="text-gray-300 mb-6">
                La NextSoft, dezvoltăm aplicații desktop personalizate utilizând tehnologii moderne precum C#, .NET și WPF, creând soluții robuste și scalabile care se integrează perfect cu procesele existente ale afacerii dumneavoastră. Aplicațiile noastre sunt proiectate pentru a optimiza fluxurile de lucru, a automatiza sarcinile repetitive și a îmbunătăți eficiența operațională.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Performanță Superioară</h3>
                    <p className="text-gray-400">Aplicații rapide și responsive care utilizează eficient resursele sistemului.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Funcționalitate Offline</h3>
                    <p className="text-gray-400">Acces la funcționalități complete chiar și fără conexiune la internet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Securitate Sporită</h3>
                    <p className="text-gray-400">Control mai bun asupra datelor sensibile și protecție împotriva amenințărilor online.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                  alt="Desktop Application Development" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-black/10 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Tehnologii Utilizate</h3>
                    <div className="flex flex-wrap gap-2">
                      {["C#", ".NET", "WPF", "Windows Forms", "SQL Server", "Entity Framework", "MVVM"].map((tech, index) => (
                        <Badge key={index} className="bg-blue-900/50 text-blue-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ce Oferim</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Aplicații desktop personalizate dezvoltate cu tehnologii moderne și focus pe rezultate
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/10 backdrop-blur-sm border-gray-800 h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Soluții pentru Orice Tip de Afacere</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Dezvoltăm aplicații desktop adaptate perfect nevoilor specifice ale afacerii dumneavoastră
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/10 backdrop-blur-sm border-gray-800 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-900/30 p-3 rounded-lg">
                          {useCase.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                          <p className="text-gray-400">{useCase.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Pricing */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Pachete și Prețuri</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Soluții adaptate nevoilor și bugetului dumneavoastră
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <Card className={`bg-gray-900/10 backdrop-blur-sm border-gray-800 flex flex-col h-full w-full ${
                    plan.popular ? 'border-blue-500 relative' : ''
                  }`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Badge className="bg-blue-600 text-white px-3 py-1">
                          Recomandat
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-6 flex-grow">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                        <div className="flex items-end justify-center">
                          <span className="text-3xl font-bold text-white">{plan.price}</span>
                        </div>
                        <p className="text-gray-400 mt-2">
                          {plan.description}
                        </p>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        asChild
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                            : 'bg-gray-800 hover:bg-gray-700'
                        } text-white`}
                      >
                        <Link href="/contact">
                          {plan.cta}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12 text-gray-400">
              <p>Aveți nevoie de un pachet personalizat? <Link href="/contact" className="text-blue-400 hover:underline">Contactați-ne</Link> pentru o soluție adaptată nevoilor dumneavoastră.</p>
            </div>
          </div>
          
          {/* Process Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Procesul Nostru de Lucru</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Pași simpli pentru a obține aplicația desktop perfectă pentru afacerea dumneavoastră
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "Analiză",
                    description: "Analizăm procesele și cerințele afacerii pentru a înțelege exact ce aveți nevoie."
                  },
                  {
                    step: "02",
                    title: "Design",
                    description: "Proiectăm arhitectura aplicației și interfața utilizator pentru o experiență optimă."
                  },
                  {
                    step: "03",
                    title: "Dezvoltare",
                    description: "Implementăm aplicația folosind tehnologii moderne și cele mai bune practici."
                  },
                  {
                    step: "04",
                    title: "Testare",
                    description: "Testăm riguros toate funcționalitățile pentru a asigura calitatea și fiabilitatea."
                  },
                  {
                    step: "05",
                    title: "Implementare",
                    description: "Instalăm aplicația, oferim training utilizatorilor și asigurăm tranziția lină."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-blue-400">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Întrebări Frecvente</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Răspunsuri la cele mai comune întrebări despre aplicațiile desktop
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  {
                    question: "Cât durează dezvoltarea unei aplicații desktop?",
                    answer: "Durata variază în funcție de complexitatea proiectului. Pentru aplicații simple, dezvoltarea poate dura 1-2 luni, în timp ce pentru soluții complexe la nivel enterprise, procesul poate dura 3-6 luni sau mai mult. Vă vom oferi un calendar detaliat după analiza inițială a cerințelor."
                  },
                  {
                    question: "Ce sisteme de operare sunt suportate?",
                    answer: "Dezvoltăm aplicații desktop în principal pentru sistemul de operare Windows, utilizând tehnologii Microsoft precum C#, .NET și WPF. La cerere, putem dezvolta și aplicații cross-platform care rulează pe Windows, macOS și Linux, utilizând tehnologii precum Electron sau .NET MAUI."
                  },
                  {
                    question: "Pot integra aplicația desktop cu alte sisteme existente?",
                    answer: "Da, aplicațiile noastre desktop pot fi integrate cu o varietate de sisteme și servicii, inclusiv baze de date, servicii cloud, API-uri externe, sisteme ERP, CRM, contabilitate și multe altele. Integrarea permite sincronizarea datelor și automatizarea proceselor între diferite sisteme."
                  },
                  {
                    question: "Cum se realizează actualizările aplicației?",
                    answer: "Oferim multiple opțiuni pentru actualizarea aplicațiilor, inclusiv actualizări automate prin internet, actualizări manuale prin pachete de instalare sau actualizări gestionate centralizat pentru rețele corporative. Procesul de actualizare este proiectat pentru a fi simplu și a minimiza întreruperile."
                  },
                  {
                    question: "Ce se întâmplă după lansarea aplicației?",
                    answer: "După lansarea aplicației, oferim servicii de suport tehnic, mentenanță și actualizări pentru a asigura funcționarea optimă pe termen lung. Acest lucru include rezolvarea promptă a oricăror probleme, implementarea de noi funcționalități la cerere și optimizarea continuă a performanței. Durata și nivelul de suport depind de pachetul ales."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-900/10 backdrop-blur-sm border-gray-800">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                        <p className="text-gray-400">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <CTASection />
        </div>
      </section>
    </div>
  );
}