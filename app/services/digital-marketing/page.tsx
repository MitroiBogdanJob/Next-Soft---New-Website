"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	CheckCircle2,
	BarChart3,
	TrendingUp,
	Target,
	Users,
	Search,
	LineChart,
	Instagram,
	Facebook,
	Globe,
} from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import Image from "next/image";

export default function DigitalMarketingPage() {
	const { t, language } = useLanguage();

	const services = [
		{
			icon: <Instagram className="h-10 w-10 text-blue-500" />,
			title: "Social Media Marketing",
			description:
				"Creștem prezența brandului dvs. pe platformele sociale prin conținut captivant, interacțiuni autentice și campanii strategice care generează rezultate reale.",
			features: [
				"Administrare conturi Instagram, Facebook, TikTok",
				"Creare conținut original și captivant",
				"Planificare și programare postări",
				"Interacțiune cu audiența",
				"Rapoarte de performanță",
			],
			image:
				"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
		},
		{
			icon: <Search className="h-10 w-10 text-indigo-500" />,
			title: "Search Engine Optimization (SEO)",
			description:
				"Optimizăm site-ul dvs. pentru motoarele de căutare pentru a crește vizibilitatea organică și a atrage mai mulți vizitatori calificați care sunt interesați de produsele sau serviciile dvs.",
			features: [
				"Audit SEO complet",
				"Optimizare on-page și off-page",
				"Cercetare cuvinte cheie",
				"Optimizare conținut",
				"Monitorizare și raportare",
			],
			image:
				"https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=2070&auto=format&fit=crop",
		},
		{
			icon: <Globe className="h-10 w-10 text-green-500" />,
			title: "Google Ads & PPC",
			description:
				"Creăm și gestionăm campanii de publicitate plătită care aduc trafic targetat pe site-ul dvs. și maximizează ROI-ul investiției dvs. în marketing.",
			features: [
				"Configurare campanii Google Ads",
				"Targetare avansată a publicului",
				"Optimizare continuă a campaniilor",
				"A/B testing pentru anunțuri",
				"Rapoarte detaliate de performanță",
			],
			image:
				"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
		},
	];

	const pricingPlans = [
		{
			name: "Basic",
			price: {
				en: "€60",
				ro: "300 lei",
			},
			period: {
				en: "/month",
				ro: "/lună",
			},
			description: {
				en: "Perfect for small businesses just starting with digital marketing.",
				ro: "Perfect pentru afaceri mici care abia încep cu marketingul digital.",
			},
			features: [
				{
					en: "Social media management (1 platform)",
					ro: "Administrare social media (1 platformă)",
				},
				{
					en: "2 social media posts per week",
					ro: "2 postări social media pe săptămână",
				},
				{
					en: "Basic SEO recommendations",
					ro: "Recomandări SEO de bază",
				},
				{
					en: "Monthly performance report",
					ro: "Raport lunar de performanță",
				},
			],
			cta: {
				en: "Get Started",
				ro: "Începe Acum",
			},
			popular: false,
		},
		{
			name: "Standard",
			price: {
				en: "€120",
				ro: "600 lei",
			},
			period: {
				en: "/month",
				ro: "/lună",
			},
			description: {
				en: "Comprehensive digital marketing for growing businesses.",
				ro: "Marketing digital cuprinzător pentru afaceri în creștere.",
			},
			features: [
				{
					en: "Social media management (2 platforms)",
					ro: "Administrare social media (2 platforme)",
				},
				{
					en: "3 social media posts per week",
					ro: "3 postări social media pe săptămână",
				},
				{
					en: "Basic SEO implementation",
					ro: "Implementare SEO de bază",
				},
				{
					en: "1 blog post per month",
					ro: "1 articol de blog pe lună",
				},
				{
					en: "Bi-weekly performance reports",
					ro: "Rapoarte de performanță bi-săptămânale",
				},
			],
			cta: {
				en: "Choose Standard",
				ro: "Alege Standard",
			},
			popular: true,
		},
		{
			name: "Premium",
			price: {
				en: "€240",
				ro: "1200 lei",
			},
			period: {
				en: "/month",
				ro: "/lună",
			},
			description: {
				en: "Full-scale digital marketing solution for established businesses.",
				ro: "Soluție completă de marketing digital pentru afaceri consacrate.",
			},
			features: [
				{
					en: "Social media management (3 platforms)",
					ro: "Administrare social media (3 platforme)",
				},
				{
					en: "5 social media posts per week",
					ro: "5 postări social media pe săptămână",
				},
				{
					en: "Comprehensive SEO strategy",
					ro: "Strategie SEO cuprinzătoare",
				},
				{
					en: "2 blog posts per month",
					ro: "2 articole de blog pe lună",
				},
				{
					en: "Weekly performance reports",
					ro: "Rapoarte săptămânale de performanță",
				},
				{
					en: "Basic competitor analysis",
					ro: "Analiză de bază a concurenței",
				},
			],
			cta: {
				en: "Contact Sales",
				ro: "Contactează-ne",
			},
			popular: false,
		},
	];

	return (
		<div className="min-h-screen bg-black">
			{/* Hero Section */}
			<section className="pt-32 pb-20 bg-gradient-to-b from-blue-900/20 to-black">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="max-w-4xl mx-auto text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Badge className="mb-4 bg-blue-600 text-white px-3 py-1 text-sm">
							{t("services.marketing.promo")}
						</Badge>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Digital Marketing Services
						</h1>
						<p className="text-xl text-gray-300">
							Creștem vizibilitatea online a afacerii tale și atragem clienți
							noi prin strategii de marketing digital personalizate
						</p>
					</motion.div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-20 bg-black">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold text-white mb-4">
							Serviciile Noastre de Marketing Digital
						</h2>
						<p className="text-xl text-gray-400">
							Oferim servicii complete de marketing digital pentru a ajuta
							afacerea ta să crească și să atragă clienți noi în mediul online
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className="bg-gray-900/10 border-gray-800 h-full overflow-hidden">
									<div className="relative h-48 w-full">
										<Image
											src={service.image}
											alt={service.title}
											fill
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
										<div className="absolute bottom-4 left-4 bg-blue-600/80 p-2 rounded-full">
											{service.icon}
										</div>
									</div>
									<CardContent className="p-6">
										<h3 className="text-xl font-semibold text-white mb-3">
											{service.title}
										</h3>
										<p className="text-gray-400 mb-6">{service.description}</p>
										<div className="space-y-2">
											{service.features.map((feature, idx) => (
												<div key={idx} className="flex items-start gap-2">
													<CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
													<span className="text-gray-300">{feature}</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-20 bg-black">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl font-bold text-white mb-6">
								De ce să alegi serviciile noastre de marketing digital?
							</h2>
							<p className="text-gray-300 mb-6">
								În era digitală actuală, prezența online puternică este
								esențială pentru succesul oricărei afaceri. Echipa noastră de
								experți în marketing digital creează și implementează strategii
								personalizate care generează rezultate reale și măsurabile.
							</p>
							<p className="text-gray-300 mb-6">
								Ne concentrăm pe crearea de conținut captivant și relevant care
								atrage atenția publicului țintă și îl transformă în clienți
								fideli. Utilizăm cele mai recente tehnici și instrumente pentru
								a maximiza impactul campaniilor și a obține cel mai bun ROI
								pentru investiția dvs.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Conținut Captivant
										</h3>
										<p className="text-gray-400">
											Creăm texte și imagini care atrag atenția și determină
											utilizatorii să acționeze.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Targetare Precisă
										</h3>
										<p className="text-gray-400">
											Ajungem exact la publicul care este interesat de produsele
											sau serviciile dvs.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Rezultate Măsurabile
										</h3>
										<p className="text-gray-400">
											Oferim rapoarte detaliate pentru a vedea exact cum
											performează campaniile dvs.
										</p>
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
									src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop"
									alt="Digital Marketing"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<div className="bg-black/10   p-6 rounded-lg">
										<h3 className="text-xl font-bold text-white mb-2">
											Platforme pe care activăm
										</h3>
										<div className="flex flex-wrap gap-2">
											{[
												"Instagram",
												"Facebook",
												"TikTok",
												"LinkedIn",
												"Google",
												"YouTube",
											].map((platform, index) => (
												<Badge
													key={index}
													className="bg-blue-900/50 text-blue-200"
												>
													{platform}
												</Badge>
											))}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-20 bg-gradient-to-b from-black to-blue-900/20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="mb-4 bg-blue-600 text-white px-3 py-1 text-sm">
							Prețuri Accesibile
						</Badge>
						<h2 className="text-3xl font-bold text-white mb-4">
							Alege Planul Tău de Marketing
						</h2>
						<p className="text-xl text-gray-400">
							Pachete simple și transparente, concepute pentru afaceri de toate
							dimensiunile
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{pricingPlans.map((plan, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="flex"
							>
								<Card
									className={`bg-gray-900/10 border-gray-800 flex flex-col h-full w-full ${
										plan.popular ? "border-blue-500 relative" : ""
									}`}
								>
									{plan.popular && (
										<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
											<Badge className="bg-blue-600 text-white px-3 py-1">
												Cel Mai Popular
											</Badge>
										</div>
									)}
									<CardContent className="p-6 flex-grow">
										<div className="text-center mb-6">
											<h3 className="text-xl font-semibold text-white mb-2">
												{plan.name}
											</h3>
											<div className="flex items-end justify-center">
												<span className="text-3xl font-bold text-white">
													{plan.price[language]}
												</span>
												<span className="text-gray-400 ml-1">
													{plan.period[language]}
												</span>
											</div>
											<p className="text-gray-400 mt-2">
												{plan.description[language]}
											</p>
										</div>

										<div className="space-y-4 mb-8">
											{plan.features.map((feature, idx) => (
												<div key={idx} className="flex items-start gap-2">
													<CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
													<span className="text-gray-300">
														{feature[language]}
													</span>
												</div>
											))}
										</div>

										<Button
											asChild
											className={`w-full ${
												plan.popular
													? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
													: "bg-gray-800 hover:bg-gray-700"
											} text-white`}
										>
											<Link href="/contact">{plan.cta[language]}</Link>
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					<div className="text-center mt-12 text-gray-400">
						<p>
							Ai nevoie de un plan personalizat?{" "}
							<Link href="/contact" className="text-blue-400 hover:underline">
								Contactează-ne
							</Link>{" "}
							pentru o soluție adaptată nevoilor tale.
						</p>
					</div>
				</div>
			</section>

			{/* Content Creation Section */}
			<section className="py-20 bg-black">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold text-white mb-4">
							Creație de Conținut Captivant
						</h2>
						<p className="text-xl text-gray-400">
							Creăm conținut care atrage atenția și determină utilizatorii să
							acționeze
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h3 className="text-2xl font-bold text-white mb-4">
								Conținut care convertește
							</h3>
							<p className="text-gray-300 mb-6">
								Echipa noastră de specialiști în marketing digital și creatori
								de conținut dezvoltă texte, imagini și videoclipuri care nu doar
								arată bine, ci și determină utilizatorii să ia acțiunea dorită -
								fie că este vorba despre achiziționarea unui produs, completarea
								unui formular sau contactarea afacerii dvs.
							</p>
							<p className="text-gray-300 mb-6">
								Înțelegem că fiecare platformă are specificul său și adaptăm
								conținutul pentru a maximiza impactul pe fiecare canal - de la
								postări scurte și captivante pentru Instagram și TikTok, la
								conținut informativ și detaliat pentru blog și LinkedIn.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h4 className="text-lg font-medium text-white">
											Copywriting Persuasiv
										</h4>
										<p className="text-gray-400">
											Texte care captează atenția și inspiră acțiune.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h4 className="text-lg font-medium text-white">
											Design Grafic Profesional
										</h4>
										<p className="text-gray-400">
											Imagini și grafice care reflectă identitatea brandului
											dvs.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h4 className="text-lg font-medium text-white">
											Conținut Video Captivant
										</h4>
										<p className="text-gray-400">
											Videoclipuri scurte și atractive pentru social media.
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-4">
									<div className="relative h-48 rounded-lg overflow-hidden">
										<Image
											src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop"
											alt="Social Media Content"
											fill
											className="object-cover"
										/>
									</div>
									<div className="relative h-48 rounded-lg overflow-hidden">
										<Image
											src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
											alt="Content Creation"
											fill
											className="object-cover"
										/>
									</div>
								</div>
								<div className="relative h-full rounded-lg overflow-hidden">
									<Image
										src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074&auto=format&fit=crop"
										alt="Digital Marketing Strategy"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-20 bg-black">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold text-white mb-4">
							Procesul Nostru de Lucru
						</h2>
						<p className="text-xl text-gray-400">
							Abordare simplă și eficientă pentru a obține rezultate maxime
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
						{[
							{
								step: "01",
								title: "Analiză",
								description:
									"Analizăm afacerea, publicul țintă și competiția pentru a crea o strategie personalizată.",
							},
							{
								step: "02",
								title: "Strategie",
								description:
									"Dezvoltăm o strategie de marketing digital adaptată obiectivelor și bugetului dvs.",
							},
							{
								step: "03",
								title: "Implementare",
								description:
									"Implementăm strategia pe canalele selectate și creăm conținut captivant.",
							},
							{
								step: "04",
								title: "Optimizare",
								description:
									"Monitorizăm rezultatele și optimizăm continuu pentru performanță maximă.",
							},
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
									<span className="text-xl font-bold text-blue-400">
										{item.step}
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">
									{item.title}
								</h3>
								<p className="text-gray-400">{item.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection />
		</div>
	);
}
