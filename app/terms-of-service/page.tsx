"use client";

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const { t, language } = useLanguage();

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ro' ? 'Termeni și Condiții' : 'Terms and Conditions'}
            </h1>
            <p className="text-xl text-gray-300">
              {language === 'ro' ? 'Ultima actualizare: 13 Ianuarie 2025' : 'Last updated: January 13, 2025'}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              {language === 'ro' ? 'Introducere' : 'Introduction'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Acești Termeni și Condiții guvernează utilizarea site-ului web și serviciilor Next Soft SRL. Prin accesarea site-ului nostru, sunteți de acord să respectați acești termeni. Dacă nu sunteți de acord cu orice parte a acestor termeni, vă rugăm să nu utilizați site-ul nostru sau serviciile noastre.'
                : 'These Terms and Conditions govern your use of the Next Soft SRL website and services. By accessing our website, you agree to comply with these terms. If you do not agree with any part of these terms, please do not use our website or services.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Utilizarea Serviciilor' : 'Use of Services'}
            </h2>
            <p className="text-gray-300 mb-4">
              {language === 'ro' 
                ? 'Sunteți de acord să utilizați serviciile noastre doar în scopuri legale și în conformitate cu acești Termeni și Condiții. În mod specific, sunteți de acord să nu:'
                : 'You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions. Specifically, you agree not to:'}
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>
                {language === 'ro' 
                  ? 'Utilizați serviciile noastre în orice mod care încalcă orice lege sau reglementare locală, națională sau internațională aplicabilă'
                  : 'Use our services in any way that violates any applicable local, national, or international law or regulation'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Utilizați serviciile noastre pentru a transmite sau trimite orice material publicitar sau promoțional fără consimțământul nostru prealabil scris'
                  : 'Use our services to transmit or send any advertising or promotional material without our prior written consent'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Vă dați drept sau încercați să vă dați drept Next Soft SRL, un angajat Next Soft SRL sau orice altă persoană sau entitate'
                  : 'Impersonate or attempt to impersonate Next Soft SRL, a Next Soft SRL employee, or any other person or entity'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Vă angajați în orice conduită care restricționează sau inhibă utilizarea sau bucuria oricui de serviciile noastre'
                  : 'Engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of our services'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Încercați să obțineți acces neautorizat la serverele, sistemele informatice sau rețelele noastre'
                  : 'Attempt to gain unauthorized access to our servers, computer systems, or networks'}
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Proprietate Intelectuală' : 'Intellectual Property'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Tot conținutul de pe acest site web este proprietatea Next Soft SRL și este protejat de legile drepturilor de autor. Nu puteți reproduce, distribui, modifica, crea lucrări derivate, afișa public, executa public, republica, descărca, stoca sau transmite oricare dintre materialele de pe site-ul nostru fără consimțământul nostru prealabil scris.'
                : 'All content on this website is the property of Next Soft SRL and is protected by copyright laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Livrarea Serviciilor și Plata' : 'Service Delivery and Payment'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Ne străduim să livrăm toate serviciile așa cum sunt descrise și în intervalele de timp specificate. Termenii de plată vor fi prezentați în contractul sau acordul pentru servicii specifice. Dacă nu se specifică altfel, plata este necesară înainte de începerea lucrărilor.'
                : 'We strive to deliver all services as described and within the timeframes specified. Payment terms will be outlined in the contract or agreement for specific services. Unless otherwise stated, payment is required before the commencement of work.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Limitarea Răspunderii' : 'Limitation of Liability'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Next Soft SRL nu va fi răspunzătoare pentru niciun fel de daune care rezultă din utilizarea sau incapacitatea de a utiliza serviciile noastre, inclusiv, dar fără a se limita la, daune directe, indirecte, incidentale, punitive și consecvente. Nu garantăm că site-ul nostru va fi sigur sau lipsit de erori sau viruși.'
                : 'Next Soft SRL will not be liable for any damages arising from the use or inability to use our services, including but not limited to direct, indirect, incidental, punitive, and consequential damages. We do not guarantee that our website will be secure or free from errors or viruses.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Despăgubire' : 'Indemnification'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Sunteți de acord să apărați, să despăgubiți și să exonerați Next Soft SRL, afiliații, licențiatorii și furnizorii săi de servicii de și împotriva oricăror pretenții, răspunderi, daune, judecăți, premii, pierderi, costuri, cheltuieli sau taxe care decurg din sau în legătură cu încălcarea de către dvs. a acestor Termeni și Condiții.'
                : 'You agree to defend, indemnify, and hold harmless Next Soft SRL, its affiliates, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms and Conditions.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Reziliere' : 'Termination'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Putem rezilia sau suspenda accesul dvs. la serviciile noastre imediat, fără notificare prealabilă sau răspundere, din orice motiv, inclusiv, fără limitare, dacă încălcați acești Termeni și Condiții.'
                : 'We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Modificări ale Termenilor' : 'Changes to Terms'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Ne rezervăm dreptul de a modifica sau înlocui acești Termeni și Condiții în orice moment. Este responsabilitatea dvs. să verificați acești Termeni și Condiții periodic pentru modificări. Utilizarea continuă a site-ului nostru după postarea oricăror modificări constituie acceptarea acelor modificări.'
                : 'We reserve the right to modify or replace these Terms and Conditions at any time. It is your responsibility to check these Terms and Conditions periodically for changes. Your continued use of our website following the posting of any changes constitutes acceptance of those changes.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Legea Aplicabilă' : 'Governing Law'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Acești Termeni și Condiții vor fi guvernați și interpretați în conformitate cu legile României, fără a ține cont de dispozițiile sale privind conflictul de legi.'
                : 'These Terms and Conditions shall be governed by and construed in accordance with the laws of Romania, without regard to its conflict of law provisions.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Contactați-ne' : 'Contact Us'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Dacă aveți întrebări despre acești Termeni și Condiții, vă rugăm să ne contactați la:'
                : 'If you have any questions about these Terms and Conditions, please contact us at:'}
            </p>
            <div className="bg-gray-800/20 p-6 rounded-lg mb-6">
              <p className="text-gray-300">
                <strong>Email:</strong> nextsoftsrl@outlook.com<br />
                <strong>{language === 'ro' ? 'Adresă:' : 'Address:'}</strong> Strada Posada 46, Ramnicu Valcea, Romania<br />
                <strong>{language === 'ro' ? 'Telefon:' : 'Phone:'}</strong> 0758498244
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-800">
              <p className="text-gray-400">
                {language === 'ro' 
                  ? 'Prin utilizarea site-ului nostru, recunoașteți că ați citit, înțeles și sunteți de acord să fiți obligat de acești Termeni și Condiții.'
                  : 'By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.'}
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/" className="text-blue-400 hover:underline">
              {language === 'ro' ? '← Înapoi la Pagina Principală' : '← Back to Home'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}