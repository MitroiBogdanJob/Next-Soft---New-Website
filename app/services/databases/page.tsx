"use client";

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Database, Server, Shield, Code, Zap, Table } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/cta-section';
import Image from 'next/image';

export default function DatabasesPage() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Database className="h-10 w-10 text-blue-500" />,
      title: "Proiectare Baze de Date",
      description: "Proiectăm arhitecturi de baze de date optimizate pentru performanță, scalabilitate și integritate a datelor."
    },
    {
      icon: <Server className="h-10 w-10 text-indigo-500" />,
      title: "Implementare și Migrare",
      description: "Implementăm baze de date noi sau migrăm datele existente cu minim de întreruperi și risc zero de pierdere a datelor."
    },
    {
      icon: <Shield className="h-10 w-10 text-green-500" />,
      title: "Securitate și Backup",
      description: "Implementăm măsuri robuste de securitate și strategii de backup pentru a proteja datele valoroase ale afacerii dvs."
    },
    {
      icon: <Code className="h-10 w-10 text-orange-500" />,
      title: "Dezvoltare Proceduri Stocate",
      description: "Dezvoltăm proceduri stocate, triggere și funcții pentru a optimiza operațiunile complexe cu baze de date."
    },
    {
      icon: <Zap className="h-10 w-10 text-red-500" />,
      title: "Optimizare Performanță",
      description: "Analizăm și optimizăm performanța bazelor de date existente pentru a elimina blocajele și a îmbunătăți timpii de răspuns."
    },
    {
      icon: <Table className="h-10 w-10 text-purple-500" />,
      title: "Integrare și Sincronizare",
      description: "Integrăm și sincronizăm date între multiple sisteme și platforme pentru a asigura consistența informațiilor."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "€500",
      description: "Ideal pentru afaceri mici care au nevoie de o bază de date simplă și eficientă.",
      features: [
        "Proiectare bază de date (până la 10 tabele)",
        "Implementare SQL Server/MySQL/PostgreSQL",
        "Configurare securitate de bază",
        "Strategie de backup",
        "Documentație tehnică",
        "Suport tehnic 30 zile"
      ],
      cta: "Solicită Ofertă",
      popular: false
    },
    {
      name: "Standard",
      price: "€1500",
      description: "Pentru afaceri în creștere care necesită soluții de baze de date mai complexe.",
      features: [
        "Proiectare bază de date (până la 25 tabele)",
        "Implementare SQL Server/MySQL/PostgreSQL",
        "Proceduri stocate și triggere",
        "Optimizare performanță",
        "Securitate avansată",
        "Strategie de backup și recuperare",
        "Documentație completă",
        "Suport tehnic 90 zile"
      ],
      cta: "Solicită Ofertă",
      popular: true
    },
    {
      name: "Enterprise",
      price: "€4000",
      description: "Soluție completă pentru afaceri cu cerințe complexe de gestionare a datelor.",
      features: [
        "Proiectare bază de date complexă",
        "Implementare SQL Server Enterprise",
        "Arhitectură high-availability",
        "Proceduri stocate și triggere avansate",
        "Optimizare performanță continuă",
        "Securitate la nivel enterprise",
        "Strategie de backup și disaster recovery",
        "Integrare cu sisteme terțe",
        "Documentație detaliată",
        "Suport tehnic dedicat 12 luni"
      ],
      cta: "Solicită Ofertă",
      popular: false
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
              Soluții Robuste de Date
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Baze de Date Profesionale
            </h1>
            <p className="text-xl text-gray-300">
              Proiectăm și implementăm soluții de baze de date robuste, scalabile și securizate pentru afacerea dumneavoastră
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
              <h2 className="text-3xl font-bold text-white mb-6">De ce sunt importante bazele de date?</h2>
              <p className="text-gray-300 mb-6">
                Bazele de date sunt fundamentul oricărei aplicații moderne, stocând și organizând informațiile esențiale pentru funcționarea afacerii dumneavoastră. O bază de date bine proiectată asigură integritatea datelor, performanță optimă și scalabilitate pentru a susține creșterea afacerii.
              </p>
              <p className="text-gray-300 mb-6">
                La NextSoft, oferim servicii complete de proiectare, implementare și optimizare a bazelor de date, utilizând tehnologii de top precum Microsoft SQL Server, MySQL și PostgreSQL. Echipa noastră de experți în baze de date vă ajută să transformați datele în informații valoroase care pot impulsiona creșterea afacerii dumneavoastră.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Performanță Optimizată</h3>
                    <p className="text-gray-400">Baze de date rapide și eficiente care răspund prompt la interogări complexe.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Securitate Robustă</h3>
                    <p className="text-gray-400">Protecție avansată pentru datele valoroase ale afacerii dumneavoastră.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Scalabilitate</h3>
                    <p className="text-gray-400">Soluții care cresc odată cu afacerea dumneavoastră, fără compromisuri de performanță.</p>
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
                  src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop" 
                  alt="Database Solutions" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-black/10 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Tehnologii Utilizate</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Microsoft SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Azure SQL Database"].map((tech, index) => (
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
                Servicii complete de baze de date pentru toate nevoile afacerii dumneavoastră
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
          
          {/* Process Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Procesul Nostru</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Abordare metodică pentru a crea soluții de baze de date robuste și eficiente
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "Analiză",
                    description: "Analizăm cerințele afacerii și structura datelor pentru a proiecta soluția optimă."
                  },
                  {
                    step: "02",
                    title: "Proiectare",
                    description: "Proiectăm schema bazei de date, relațiile și optimizăm pentru performanță."
                  },
                  {
                    step: "03",
                    title: "Implementare",
                    description: "Implementăm baza de date, procedurile stocate și măsurile de securitate."
                  },
                  {
                    step: "04",
                    title: "Testare & Optimizare",
                    description: "Testăm riguros și optimizăm pentru a asigura performanța și fiabilitatea."
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
          
          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Întrebări Frecvente</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Răspunsuri la cele mai comune întrebări despre serviciile noastre de baze de date
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  {
                    question: "Ce tehnologii de baze de date utilizați?",
                    answer: "Lucrăm cu o gamă largă de tehnologii de baze de date, inclusiv Microsoft SQL Server, MySQL, PostgreSQL, MongoDB și Redis. Alegem tehnologia potrivită în funcție de cerințele specifice ale proiectului, volumul de date, tipul de date și obiectivele de performanță."
                  },
                  {
                    question: "Cum asigurați securitatea datelor?",
                    answer: "Implementăm multiple niveluri de securitate, inclusiv criptarea datelor sensibile, autentificare robustă, control al accesului bazat pe roluri, auditare și monitorizare continuă. De asemenea, dezvoltăm strategii de backup și recuperare pentru a proteja datele împotriva pierderii accidentale sau a atacurilor cibernetice."
                  },
                  {
                    question: "Puteți migra baza noastră de date existentă la o nouă tehnologie?",
                    answer: "Da, oferim servicii complete de migrare a bazelor de date între diferite tehnologii, cu minim de întreruperi și risc zero de pierdere a datelor. Procesul include analiza bazei de date existente, planificarea migrării, testare extensivă și verificarea integrității datelor după migrare."
                  },
                  {
                    question: "Cât durează implementarea unei baze de date noi?",
                    answer: "Durata variază în funcție de complexitatea proiectului. Pentru baze de date simple, implementarea poate dura 1-2 săptămâni, în timp ce pentru soluții complexe la nivel enterprise, procesul poate dura 1-3 luni. Vă vom oferi un calendar detaliat după analiza inițială a cerințelor."
                  },
                  {
                    question: "Oferiți suport continuu pentru bazele de date implementate?",
                    answer: "Da, oferim servicii de mentenanță și suport continuu pentru bazele de date implementate. Acestea includ monitorizare proactivă, optimizare periodică a performanței, aplicarea patch-urilor de securitate, backup și recuperare, precum și asistență tehnică pentru rezolvarea oricăror probleme care pot apărea."
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