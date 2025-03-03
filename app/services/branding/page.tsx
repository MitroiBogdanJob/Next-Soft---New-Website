"use client";

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Palette, Layers, Eye, Lightbulb, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/cta-section';
import Image from 'next/image';

export default function BrandingPage() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Palette className="h-10 w-10 text-blue-500" />,
      title: "Logo Design",
      description: "Creăm logo-uri unice și memorabile care reflectă identitatea și valorile brandului dumneavoastră."
    },
    {
      icon: <Layers className="h-10 w-10 text-indigo-500" />,
      title: "Brand Identity",
      description: "Dezvoltăm o identitate vizuală completă, incluzând culori, tipografie și elemente grafice distinctive."
    },
    {
      icon: <Eye className="h-10 w-10 text-green-500" />,
      title: "Brand Guidelines",
      description: "Creăm ghiduri complete de utilizare a brandului pentru a asigura consistența în toate materialele."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-orange-500" />,
      title: "Brand Strategy",
      description: "Definim strategia de brand, valorile și mesajele cheie pentru a vă diferenția de competiție."
    },
    {
      icon: <Target className="h-10 w-10 text-red-500" />,
      title: "Brand Positioning",
      description: "Poziționăm brandul dumneavoastră strategic pe piață pentru a atrage publicul țintă ideal."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-500" />,
      title: "Rebranding",
      description: "Revitalizăm branduri existente pentru a reflecta evoluția afacerii și tendințele actuale."
    }
  ];

  const pricingPlans = [
    {
      name: "Logo Basic",
      price: "€150",
      description: "Ideal pentru startup-uri și afaceri mici care au nevoie de un logo profesional la un preț accesibil.",
      features: [
        "2 concepte de logo inițiale",
        "2 runde de revizuiri",
        "Fișiere în format vectorial (AI, EPS)",
        "Fișiere în format raster (PNG, JPG)",
        "Versiuni pentru print și digital",
        "Drepturi complete de utilizare",
        "Livrare în 7 zile lucrătoare"
      ],
      cta: "Solicită Ofertă",
      popular: false
    },
    {
      name: "Brand Identity",
      price: "€450",
      description: "Pachet complet pentru afaceri care doresc o identitate vizuală coerentă și profesională.",
      features: [
        "3 concepte de logo inițiale",
        "3 runde de revizuiri",
        "Paletă de culori și tipografie",
        "Cărți de vizită și antet",
        "Ghid de utilizare a brandului",
        "Toate fișierele în format vectorial și raster",
        "Versiuni pentru social media",
        "Drepturi complete de utilizare",
        "Livrare în 14 zile lucrătoare"
      ],
      cta: "Solicită Ofertă",
      popular: true
    },
    {
      name: "Brand Premium",
      price: "€800",
      description: "Soluție completă pentru afaceri care doresc o identitate de brand distinctivă și memorabilă.",
      features: [
        "5 concepte de logo inițiale",
        "Revizuiri nelimitate",
        "Identitate vizuală completă",
        "Paletă de culori și tipografie",
        "Set complet de materiale de branding",
        "Ghid detaliat de utilizare a brandului",
        "Strategie de brand",
        "Consultanță de poziționare",
        "Toate fișierele în format vectorial și raster",
        "Drepturi complete de utilizare",
        "Livrare în 21 zile lucrătoare"
      ],
      cta: "Solicită Ofertă",
      popular: false
    }
  ];

  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop",
      title: "Eco Green",
      description: "Branding pentru o companie de produse ecologice, cu focus pe sustenabilitate și natură."
    },
    {
      image: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=1932&auto=format&fit=crop",
      title: "Tech Innovate",
      description: "Identitate vizuală pentru o companie de tehnologie, cu un design modern și futurist."
    },
    {
      image: "https://images.unsplash.com/photo-1634942536746-50ac8777e813?q=80&w=1974&auto=format&fit=crop",
      title: "Artisan Cafe",
      description: "Branding pentru un lanț de cafenele artizanale, cu un design elegant și autentic."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-600 text-white px-3 py-1 text-sm">
              Identitate Vizuală
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Branding & Logo Design
            </h1>
            <p className="text-xl text-gray-300">
              Creăm identități vizuale memorabile care reflectă esența afacerii dumneavoastră și rezonează cu publicul țintă.
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
              <h2 className="text-3xl font-bold text-white mb-6">De ce este important brandingul?</h2>
              <p className="text-gray-300 mb-6">
                Un brand puternic este mai mult decât un logo frumos - este fundația pe care se construiește percepția afacerii dumneavoastră în mintea clienților. Brandingul profesional vă ajută să vă diferențiați de competiție, să construiți încredere și să creați conexiuni emoționale cu publicul țintă.
              </p>
              <p className="text-gray-300 mb-6">
                La NextSoft, abordăm fiecare proiect de branding cu o perspectivă strategică, combinând creativitatea cu înțelegerea profundă a afacerii dumneavoastră și a pieței. Creăm identități vizuale care nu doar arată bine, ci și comunică eficient valorile și misiunea brandului dumneavoastră.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Diferențiere Competitivă</h3>
                    <p className="text-gray-400">Un brand distinct vă ajută să ieșiți în evidență într-o piață aglomerată.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Recunoaștere și Memorabilitate</h3>
                    <p className="text-gray-400">Un brand bine definit este ușor de recunoscut și de reținut de către clienți.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Construirea Încrederii</h3>
                    <p className="text-gray-400">Un branding profesional inspiră încredere și credibilitate în rândul clienților.</p>
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
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" 
                  alt="Branding Design" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Instrumente Utilizate</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Adobe Illustrator", "Adobe Photoshop", "Figma", "Sketch", "InDesign", "After Effects"].map((tech, index) => (
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
                Servicii complete de branding și design pentru a construi o identitate vizuală puternică
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
                  <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800 h-full">
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
          
          {/* Portfolio */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Proiecte Recente</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Exemple de identități vizuale create pentru clienții noștri
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
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
                  <Card className={`bg-gray-900/30 backdrop-blur-sm border-gray-800 flex flex-col h-full w-full ${
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
                  Pași simpli pentru a crea identitatea vizuală perfectă pentru afacerea dumneavoastră
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description: "Analizăm afacerea, valorile și publicul țintă pentru a înțelege esența brandului."
                  },
                  {
                    step: "02",
                    title: "Concept",
                    description: "Dezvoltăm concepte creative care reflectă identitatea și valorile brandului."
                  },
                  {
                    step: "03",
                    title: "Rafinare",
                    description: "Perfecționăm conceptul ales în baza feedback-ului pentru a obține rezultatul final."
                  },
                  {
                    step: "04",
                    title: "Implementare",
                    description: "Livrăm toate materialele necesare și ghidul de utilizare a brandului."
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
                    <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  Răspunsuri la cele mai comune întrebări despre serviciile noastre de branding
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  {
                    question: "Cât durează procesul de creare a unui logo?",
                    answer: "Durata variază în funcție de complexitatea proiectului și pachetul ales. În general, pentru un logo basic, procesul durează aproximativ 7 zile lucrătoare, pentru un pachet de identitate vizuală completă, aproximativ 14 zile, iar pentru un pachet premium, aproximativ 21 de zile."
                  },
                  {
                    question: "Ce fișiere voi primi pentru logo-ul meu?",
                    answer: "Veți primi logo-ul în formate vectoriale (AI, EPS, SVG) care permit scalarea fără pierderea calității, precum și în formate raster (PNG, JPG) pentru utilizare digitală. De asemenea, veți primi versiuni pentru print și digital, precum și variante pentru fundal alb și negru."
                  },
                  {
                    question: "Pot solicita modificări după ce logo-ul este finalizat?",
                    answer: "Da, pachetele noastre includ runde de revizuiri în care puteți solicita modificări. Numărul de runde de revizuiri variază în funcție de pachetul ales. După finalizarea proiectului, modificările suplimentare pot fi realizate contra cost."
                  },
                  {
                    question: "Cine deține drepturile asupra logo-ului creat?",
                    answer: "După finalizarea proiectului și efectuarea plății integrale, dumneavoastră dețineți toate drepturile asupra logo-ului și materialelor de branding create. Puteți utiliza logo-ul în orice scop comercial sau personal."
                  },
                  {
                    question: "Ce informații trebuie să vă furnizez pentru a începe proiectul?",
                    answer: "Pentru a începe, avem nevoie de informații despre afacerea dumneavoastră, valorile și misiunea companiei, publicul țintă, preferințele de design (culori, stiluri), exemple de logo-uri care vă plac și orice alte cerințe specifice. Vă vom ghida prin acest proces în timpul consultării inițiale."
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
          
          {/* CTA Section */} <CTASection />
        </div>
      </section>
    </div>
  );
}