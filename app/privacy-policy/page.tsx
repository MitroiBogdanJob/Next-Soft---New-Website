"use client";

import { useLanguage } from '@/components/language-provider';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
              {language === 'ro' ? 'Politica de Confidențialitate' : 'Privacy Policy'}
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
                ? 'Bine ați venit la Next Soft SRL. Valorificăm confidențialitatea dvs. și ne angajăm să protejăm datele dvs. personale. Această Politică de Confidențialitate explică modul în care colectăm, utilizăm și protejăm informațiile dvs.'
                : 'Welcome to Next Soft SRL. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Informațiile pe care le colectăm' : 'Information We Collect'}
            </h2>
            <p className="text-gray-300 mb-4">
              {language === 'ro' ? 'Putem colecta următoarele tipuri de informații:' : 'We may collect the following types of information:'}
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>
                {language === 'ro' 
                  ? 'Informații de identificare personală (Nume, adresă de email, număr de telefon, etc.)'
                  : 'Personal identification information (Name, email address, phone number, etc.)'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Date de utilizare (pagini vizitate, timp petrecut pe site, etc.)'
                  : 'Usage data (pages visited, time spent on the site, etc.)'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Date tehnice (adresă IP, tip de browser, informații despre dispozitiv)'
                  : 'Technical data (IP address, browser type, device information)'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Cookie-uri și informații de urmărire'
                  : 'Cookies and tracking information'}
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Cum folosim informațiile dvs.' : 'How We Use Your Information'}
            </h2>
            <p className="text-gray-300 mb-4">
              {language === 'ro' ? 'Folosim informațiile dvs. pentru:' : 'We use your information to:'}
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>
                {language === 'ro' 
                  ? 'A furniza și menține serviciile noastre'
                  : 'Provide and maintain our services'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'A îmbunătăți experiența utilizatorului'
                  : 'Improve user experience'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'A comunica cu dvs.'
                  : 'Communicate with you'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'A asigura securitatea și a preveni frauda'
                  : 'Ensure security and prevent fraud'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'A respecta obligațiile legale'
                  : 'Comply with legal obligations'}
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Securitatea datelor' : 'Data Security'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Implementăm măsuri de securitate adecvate pentru a proteja informațiile dvs. personale împotriva accesului neautorizat, modificării, divulgării sau distrugerii. Cu toate acestea, nicio metodă de transmisie prin Internet sau stocare electronică nu este 100% sigură, și nu putem garanta securitatea absolută.'
                : 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Servicii terțe' : 'Third-Party Services'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Putem utiliza servicii terțe pentru a facilita operațiunile noastre de afaceri. Aceste terțe părți au acces la informațiile dvs. personale doar pentru a îndeplini sarcini specifice în numele nostru și sunt obligate să nu le divulge sau să le utilizeze în alte scopuri.'
                : 'We may use third-party services to facilitate our business operations. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Drepturile dvs.' : 'Your Rights'}
            </h2>
            <p className="text-gray-300 mb-4">
              {language === 'ro' ? 'Aveți dreptul să:' : 'You have the right to:'}
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>
                {language === 'ro' 
                  ? 'Accesați informațiile personale pe care le deținem despre dvs.'
                  : 'Access the personal information we hold about you'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Solicitați corectarea informațiilor inexacte'
                  : 'Request correction of inaccurate information'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Solicitați ștergerea informațiilor dvs. personale'
                  : 'Request deletion of your personal information'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Vă opuneți prelucrării informațiilor dvs. personale'
                  : 'Object to processing of your personal information'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Solicitați restricționarea prelucrării informațiilor dvs. personale'
                  : 'Request restriction of processing your personal information'}
              </li>
              <li>
                {language === 'ro' 
                  ? 'Solicitați transferul informațiilor dvs. personale'
                  : 'Request transfer of your personal information'}
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Modificări ale acestei Politici de Confidențialitate' : 'Changes to This Privacy Policy'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Putem actualiza Politica noastră de Confidențialitate din când în când. Vă vom notifica despre orice modificări prin publicarea noii Politici de Confidențialitate pe această pagină și actualizarea datei "ultima actualizare" din partea de sus a acestei Politici de Confidențialitate.'
                : 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this Privacy Policy.'}
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-6 mt-12">
              {language === 'ro' ? 'Contactați-ne' : 'Contact Us'}
            </h2>
            <p className="text-gray-300 mb-6">
              {language === 'ro' 
                ? 'Dacă aveți întrebări despre această Politică de Confidențialitate, vă rugăm să ne contactați la:'
                : 'If you have any questions about this Privacy Policy, please contact us at:'}
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
                  ? 'Prin utilizarea site-ului nostru web, sunteți de acord cu Politica noastră de Confidențialitate și acceptați termenii acesteia.'
                  : 'By using our website, you consent to our Privacy Policy and agree to its terms.'}
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