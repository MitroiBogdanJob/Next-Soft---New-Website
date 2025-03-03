"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	CheckCircle2,
	Globe,
	Smartphone,
	Zap,
	Search,
	Shield,
	Code,
} from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WebsitePage() {
	const { t } = useLanguage();

	const features = [
		{
			icon: <Globe className="h-10 w-10 text-blue-500" />,
			title: "Design Profesional",
			description:
				"Design modern și atractiv, adaptat identității brandului dumneavoastră, cu focus pe experiența utilizatorului.",
		},
		{
			icon: <Smartphone className="h-10 w-10 text-indigo-500" />,
			title: "Responsive Design",
			description:
				"Site-ul va arăta perfect pe orice dispozitiv: desktop, laptop, tabletă sau smartphone.",
		},
		{
			icon: <Zap className="h-10 w-10 text-green-500" />,
			title: "Performanță Optimizată",
			description:
				"Timp de încărcare rapid și performanță excelentă pentru o experiență plăcută a utilizatorilor.",
		},
		{
			icon: <Search className="h-10 w-10 text-orange-500" />,
			title: "Optimizare SEO",
			description:
				"Implementăm cele mai bune practici SEO pentru a vă ajuta să fiți găsit mai ușor în motoarele de căutare.",
		},
		{
			icon: <Shield className="h-10 w-10 text-red-500" />,
			title: "Securitate Avansată",
			description:
				"Protecție împotriva amenințărilor cibernetice și conformitate cu standardele de securitate.",
		},
		{
			icon: <Code className="h-10 w-10 text-purple-500" />,
			title: "Cod Curat și Optimizat",
			description:
				"Dezvoltare cu tehnologii moderne pentru performanță și scalabilitate.",
		},
	];

	const wordpressFeatures = [
		"Design personalizat adaptat brandului dvs.",
		"Până la 5 pagini (pentru pachetul Basic)",
		"Până la 10 pagini (pentru pachetul Standard)",
		"Pagini nelimitate (pentru pachetul Premium)",
		"Panou de administrare intuitiv",
		"Optimizare SEO de bază",
		"Integrare social media",
		"Formular de contact",
		"Responsive design (adaptare pe toate dispozitivele)",
		"Instalare plugin-uri esențiale",
		"Configurare Google Analytics",
		"Securitate de bază",
		"Backup automat",
		"Suport tehnic 6 luni",
	];

	const customFeatures = [
		"Design personalizat premium",
		"Arhitectură modernă cu React și Next.js",
		"Backend robust dezvoltat în C# și .NET",
		"Bază de date SQL Server pentru performanță",
		"Funcționalități avansate personalizate",
		"Optimizare SEO avansată",
		"Integrare API-uri terțe",
		"Panou de administrare personalizat",
		"Securitate avansată",
		"Performanță optimizată",
		"Scalabilitate pentru creștere viitoare",
		"Testare completă pe toate dispozitivele",
		"Documentație tehnică",
		"Suport tehnic prioritar 12 luni",
	];

	const wordpressPricingPlans = [
		{
			name: "Basic",
			price: "€500",
			description:
				"Ideal pentru afaceri mici sau startup-uri care au nevoie de o prezență online de bază.",
			features: [
				"Design responsive modern",
				"Până la 5 pagini",
				"Formular de contact",
				"Optimizare SEO de bază",
				"Integrare social media",
				"6 luni găzduire gratuită",
				"6 luni mentenanță gratuită",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
		{
			name: "Standard",
			price: "€750",
			description:
				"Perfect pentru afaceri în creștere care doresc o prezență online profesională și completă.",
			features: [
				"Tot ce include pachetul Basic",
				"Până la 10 pagini",
				"Design personalizat premium",
				"Blog integrat",
				"Optimizare SEO avansată",
				"Integrare Google Analytics",
				"Panou de administrare",
				"Suport tehnic prioritar",
			],
			cta: "Solicită Ofertă",
			popular: true,
		},
		{
			name: "Premium",
			price: "€1000",
			description:
				"Soluție completă pentru afaceri care necesită funcționalități avansate și personalizare extinsă.",
			features: [
				"Tot ce include pachetul Standard",
				"Pagini nelimitate",
				"Design premium personalizat",
				"Funcționalități avansate",
				"Optimizare SEO completă",
				"Integrare cu sisteme terțe",
				"Securitate avansată",
				"Consultanță marketing digital",
				"Suport tehnic prioritar 24/7",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
	];

	const customPricingPlans = [
		{
			name: "Basic",
			price: "€1000",
			description:
				"Soluție personalizată pentru afaceri mici care doresc o prezență online profesională.",
			features: [
				"Design personalizat premium",
				"Dezvoltare cu React și Next.js",
				"Până la 5 pagini",
				"Formular de contact avansat",
				"Optimizare SEO",
				"Integrare social media",
				"Panou de administrare basic",
				"12 luni găzduire gratuită",
				"12 luni mentenanță gratuită",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
		{
			name: "Business",
			price: "€2000",
			description:
				"Pentru afaceri care necesită funcționalități avansate și personalizare extinsă.",
			features: [
				"Tot ce include pachetul Basic",
				"Până la 10 pagini",
				"Backend dezvoltat în C# și .NET",
				"Bază de date SQL Server",
				"Funcționalități personalizate",
				"Integrare API-uri terțe",
				"Panou de administrare avansat",
				"Optimizare performanță",
				"Securitate avansată",
				"Suport tehnic prioritar",
			],
			cta: "Solicită Ofertă",
			popular: true,
		},
		{
			name: "Enterprise",
			price: "€3000",
			description:
				"Soluție completă pentru afaceri cu cerințe complexe și nevoi de scalabilitate.",
			features: [
				"Tot ce include pachetul Business",
				"Pagini nelimitate",
				"Arhitectură scalabilă",
				"Funcționalități complexe personalizate",
				"Integrare cu sisteme enterprise",
				"Optimizare avansată pentru performanță",
				"Securitate la nivel enterprise",
				"Testare completă și QA",
				"Documentație tehnică detaliată",
				"Suport tehnic dedicat 24/7",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
	];

	const portfolioItems = [
		{
			image:
				"https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=2070&auto=format&fit=crop",
			title: "RoTravel Agency",
			description:
				"Website de prezentare pentru o agenție de turism, cu design modern și funcționalități de rezervare.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
			title: "Valcea Business Hub",
			description:
				"Portal de afaceri pentru companiile din Râmnicu Vâlcea, cu profil de companie și funcționalități de networking.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
			title: "MediCenter Clinic",
			description:
				"Website pentru o clinică medicală, cu sistem de programări online și prezentare a serviciilor medicale.",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-32 pb-20 relative">
				<div className="absolute inset-0 bg-black/50   z-0"></div>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						className="max-w-4xl mx-auto text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Badge className="mb-4 bg-blue-600 text-white px-3 py-1 text-sm">
							Servicii Web Premium
						</Badge>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Website-uri de Prezentare Profesionale
						</h1>
						<p className="text-xl text-gray-300">
							Doriți ca brandul sau afacerea dumneavoastră să fie vizibilă
							online? Un website de prezentare profesional, creat de noi, va
							aduce rezultate reale.
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
							<h2 className="text-3xl font-bold text-white mb-6">
								De ce să alegeți un website de prezentare?
							</h2>
							<p className="text-gray-300 mb-6">
								Cu peste 6 ani de experiență și peste 120 de proiecte
								finalizate, oferim o soluție completă și premium pentru Crearea
								Website-urilor de Prezentare și Dezvoltarea de Website-uri
								Profesionale, folosind cele mai noi tehnologii din domeniu.
							</p>
							<p className="text-gray-300 mb-6">
								Indiferent de mărimea afacerii dumneavoastră, prețurile noastre
								sunt flexibile, în funcție de complexitatea proiectului și
								cerințele specifice ale fiecărui client. Alegeți cu încredere
								serviciul nostru de creare website!
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Vizibilitate Online 24/7
										</h3>
										<p className="text-gray-400">
											Afacerea dumneavoastră va fi vizibilă pentru potențialii
											clienți în orice moment.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Credibilitate și Profesionalism
										</h3>
										<p className="text-gray-400">
											Un website bine realizat inspiră încredere și demonstrează
											profesionalismul afacerii dumneavoastră.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Atragerea de Noi Clienți
										</h3>
										<p className="text-gray-400">
											Prin optimizare SEO și design atractiv, website-ul va
											atrage noi clienți și va genera lead-uri.
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
									src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
									alt="Website de prezentare"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<div className="bg-black/70   p-6 rounded-lg">
										<h3 className="text-xl font-bold text-white mb-2">
											Tehnologii Utilizate
										</h3>
										<div className="flex flex-wrap gap-2">
											{[
												"React",
												"Next.js",
												"Tailwind CSS",
												"WordPress",
												"C#",
												"SQL",
												"Node.js",
											].map((tech, index) => (
												<Badge
													key={index}
													className="bg-blue-900/50 text-blue-200"
												>
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
								Website-uri de prezentare create cu atenție la detalii și focus
								pe rezultate
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
									<Card className="bg-gray-900/50 border-gray-800 h-full">
										<CardContent className="p-6">
											<div className="mb-4">{feature.icon}</div>
											<h3 className="text-xl font-semibold text-white mb-3">
												{feature.title}
											</h3>
											<p className="text-gray-400">{feature.description}</p>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>

					{/* Pricing Tabs */}
					<div className="mb-20">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-white mb-4">
								Soluții Adaptate Nevoilor Dumneavoastră
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto">
								Oferim două tipuri de soluții pentru website-uri de prezentare,
								în funcție de complexitatea și cerințele proiectului
								dumneavoastră
							</p>
						</div>

						<Tabs defaultValue="wordpress" className="w-full">
							<TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
								<TabsTrigger value="wordpress">WordPress</TabsTrigger>
								<TabsTrigger value="custom">Custom Development</TabsTrigger>
							</TabsList>

							<TabsContent value="wordpress">
								<div className="mb-8">
									<div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-8">
										<h3 className="text-2xl font-bold text-white mb-4">
											Soluție WordPress
										</h3>
										<p className="text-gray-300 mb-6">
											Soluția noastră WordPress oferă un echilibru perfect între
											cost, funcționalitate și ușurință în utilizare. Ideală
											pentru afaceri mici și mijlocii care doresc o prezență
											online profesională, rapidă și ușor de administrat.
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<h4 className="text-lg font-semibold text-white mb-3">
													Avantaje:
												</h4>
												<ul className="space-y-2">
													{[
														"Cost accesibil (€500 - €1000)",
														"Implementare rapidă (2-4 săptămâni)",
														"Panou de administrare intuitiv",
														"Actualizări ușoare de conținut",
														"Multitudine de plugin-uri disponibile",
														"Scalabilitate moderată",
													].map((item, idx) => (
														<li key={idx} className="flex items-start gap-2">
															<CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
															<span className="text-gray-300">{item}</span>
														</li>
													))}
												</ul>
											</div>
											<div>
												<h4 className="text-lg font-semibold text-white mb-3">
													Caracteristici:
												</h4>
												<ul className="space-y-2">
													{wordpressFeatures.slice(0, 8).map((feature, idx) => (
														<li key={idx} className="flex items-start gap-2">
															<CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
															<span className="text-gray-300">{feature}</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
										{wordpressPricingPlans.map((plan, index) => (
											<motion.div
												key={index}
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.5, delay: index * 0.1 }}
												viewport={{ once: true }}
												className="flex"
											>
												<Card
													className={`bg-gray-900/50 border-gray-800 flex flex-col h-full w-full ${
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
																	{plan.price}
																</span>
															</div>
															<p className="text-gray-400 mt-2">
																{plan.description}
															</p>
														</div>

														<div className="space-y-4 mb-8">
															{plan.features.map((feature, idx) => (
																<div
																	key={idx}
																	className="flex items-start gap-2"
																>
																	<CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
																	<span className="text-gray-300">
																		{feature}
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
															<Link href="/contact">{plan.cta}</Link>
														</Button>
													</CardContent>
												</Card>
											</motion.div>
										))}
									</div>
								</div>
							</TabsContent>

							<TabsContent value="custom">
								<div className="mb-8">
									<div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-8">
										<h3 className="text-2xl font-bold text-white mb-4">
											Dezvoltare Personalizată
										</h3>
										<p className="text-gray-300 mb-6">
											Soluția noastră de dezvoltare personalizată oferă
											libertate totală în design și funcționalitate. Utilizăm
											tehnologii moderne precum React, Next.js, C# și SQL Server
											pentru a crea website-uri unice, performante și scalabile.
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<h4 className="text-lg font-semibold text-white mb-3">
													Avantaje:
												</h4>
												<ul className="space-y-2">
													{[
														"Personalizare completă",
														"Performanță superioară",
														"Scalabilitate excelentă",
														"Securitate avansată",
														"Funcționalități complexe",
														"Integrare cu orice sistem terț",
													].map((item, idx) => (
														<li key={idx} className="flex items-start gap-2">
															<CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
															<span className="text-gray-300">{item}</span>
														</li>
													))}
												</ul>
											</div>
											<div>
												<h4 className="text-lg font-semibold text-white mb-3">
													Tehnologii:
												</h4>
												<ul className="space-y-2">
													{[
														"React & Next.js pentru frontend",
														"C# & .NET pentru backend",
														"SQL Server pentru baza de date",
														"Tailwind CSS pentru design",
														"API RESTful pentru integrări",
														"CI/CD pentru deployment automat",
														"Testare automată",
														"Monitorizare performanță",
													].map((tech, idx) => (
														<li key={idx} className="flex items-start gap-2">
															<CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
															<span className="text-gray-300">{tech}</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
										{customPricingPlans.map((plan, index) => (
											<motion.div
												key={index}
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.5, delay: index * 0.1 }}
												viewport={{ once: true }}
												className="flex"
											>
												<Card
													className={`bg-gray-900/50 border-gray-800 flex flex-col h-full w-full ${
														plan.popular ? "border-blue-500 relative" : ""
													}`}
												>
													{plan.popular && (
														<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
															<Badge className="bg-blue-600 text-white px-3 py-1">
																Recomandat
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
																	{plan.price}
																</span>
															</div>
															<p className="text-gray-400 mt-2">
																{plan.description}
															</p>
														</div>

														<div className="space-y-4 mb-8">
															{plan.features.map((feature, idx) => (
																<div
																	key={idx}
																	className="flex items-start gap-2"
																>
																	<CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
																	<span className="text-gray-300">
																		{feature}
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
															<Link href="/contact">{plan.cta}</Link>
														</Button>
													</CardContent>
												</Card>
											</motion.div>
										))}
									</div>
								</div>
							</TabsContent>
						</Tabs>

						<div className="text-center mt-12 text-gray-400">
							<p>
								Aveți nevoie de un pachet personalizat?{" "}
								<Link href="/contact" className="text-blue-400 hover:underline">
									Contactați-ne
								</Link>{" "}
								pentru o soluție adaptată nevoilor dumneavoastră.
							</p>
						</div>
					</div>

					{/* Portfolio */}
					<div className="mb-20">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-white mb-4">
								Proiecte Recente
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto">
								Exemple de website-uri de prezentare realizate pentru clienții
								noștri
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
											<h3 className="text-xl font-bold text-white mb-2">
												{item.title}
											</h3>
											<p className="text-gray-300 text-sm">
												{item.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Process Section */}
					<section className="py-20">
						<div className="container mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-white mb-4">
									Procesul Nostru de Lucru
								</h2>
								<p className="text-xl text-gray-400 max-w-3xl mx-auto">
									Pași simpli pentru a obține website-ul perfect pentru afacerea
									dumneavoastră
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
								{[
									{
										step: "01",
										title: "Consultare",
										description:
											"Discutăm despre nevoile și obiectivele afacerii dumneavoastră pentru a înțelege exact ce doriți să realizați.",
									},
									{
										step: "02",
										title: "Design",
										description:
											"Creăm un design personalizat care reflectă identitatea brandului dumneavoastră și atrage publicul țintă.",
									},
									{
										step: "03",
										title: "Dezvoltare",
										description:
											"Implementăm designul și funcționalitățile folosind cele mai moderne tehnologii pentru performanță optimă.",
									},
									{
										step: "04",
										title: "Lansare",
										description:
											"După testare și ajustări, lansăm website-ul și vă oferim suport continuu pentru a asigura succesul online.",
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
										<div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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

					{/* Benefits Section */}
					<section className="py-20">
						<div className="container mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-white mb-4">
									Beneficii Incluse Gratuit
								</h2>
								<p className="text-xl text-gray-400 max-w-3xl mx-auto">
									Fiecare website de prezentare include aceste beneficii
									valoroase
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
								{[
									{
										title: "Optimizare SEO",
										description:
											"Implementăm cele mai bune practici SEO pentru a vă ajuta să fiți găsit mai ușor în Google.",
										icon: <Search className="h-10 w-10 text-blue-500" />,
									},
									{
										title: "6 Luni Găzduire",
										description:
											"Găzduire gratuită pentru primele 6 luni, pe servere rapide și sigure.",
										icon: <Globe className="h-10 w-10 text-blue-500" />,
									},
									{
										title: "6 Luni Mentenanță",
										description:
											"Actualizări și mentenanță gratuită pentru a menține website-ul funcțional și securizat.",
										icon: <Code className="h-10 w-10 text-blue-500" />,
									},
									{
										title: "6 Luni Suport",
										description:
											"Asistență tehnică și suport pentru orice întrebări sau probleme întâmpinate.",
										icon: <Shield className="h-10 w-10 text-blue-500" />,
									},
								].map((benefit, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<Card className="bg-gray-900/50 border-gray-800 h-full">
											<CardContent className="p-6 text-center">
												<div className="bg-blue-900/30 p-4 rounded-full inline-block mb-4">
													{benefit.icon}
												</div>
												<h3 className="text-xl font-semibold text-white mb-3">
													{benefit.title}
												</h3>
												<p className="text-gray-400">{benefit.description}</p>
												<p className="text-green-400 font-bold mt-4">GRATUIT</p>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</div>
					</section>

					{/* FAQ Section */}
					<section className="py-20">
						<div className="container mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-white mb-4">
									Întrebări Frecvente
								</h2>
								<p className="text-xl text-gray-400 max-w-3xl mx-auto">
									Răspunsuri la cele mai comune întrebări despre serviciile
									noastre
								</p>
							</div>

							<div className="max-w-3xl mx-auto space-y-6">
								{[
									{
										question: "Cât durează crearea unui website de prezentare?",
										answer:
											"Durata variază în funcție de complexitatea proiectului. Pentru soluțiile WordPress, un website de prezentare poate fi finalizat în 2-4 săptămâni. Pentru dezvoltarea personalizată cu React, Next.js și C#, durata poate fi de 4-8 săptămâni. Proiectele mai complexe pot necesita mai mult timp.",
									},
									{
										question:
											"Care este diferența dintre soluția WordPress și dezvoltarea personalizată?",
										answer:
											"Soluția WordPress este mai rapidă și mai accesibilă ca preț, ideală pentru afaceri mici și mijlocii care au nevoie de un website profesional într-un timp scurt. Dezvoltarea personalizată oferă libertate totală în design și funcționalitate, performanță superioară și scalabilitate excelentă, fiind recomandată pentru afaceri cu cerințe specifice și complexe.",
									},
									{
										question:
											"Ce informații trebuie să vă furnizez pentru a începe proiectul?",
										answer:
											"Pentru a începe, avem nevoie de informații despre afacerea dumneavoastră, publicul țintă, obiectivele website-ului, preferințele de design, conținut (texte, imagini) și orice alte cerințe specifice. Vă vom ghida prin acest proces în timpul consultării inițiale.",
									},
									{
										question:
											"Pot să-mi actualizez singur conținutul website-ului?",
										answer:
											"Da, toate website-urile noastre includ un panou de administrare intuitiv care vă permite să actualizați conținutul (texte, imagini, produse) fără cunoștințe tehnice avansate. Oferim și instruire pentru utilizarea acestuia.",
									},
									{
										question:
											"Ce se întâmplă după ce expiră perioada de găzduire și mentenanță gratuită?",
										answer:
											"După perioada gratuită de 6 luni, puteți opta pentru unul din pachetele noastre de mentenanță și găzduire la prețuri competitive. Vă vom contacta înainte de expirarea perioadei pentru a discuta opțiunile disponibile.",
									},
								].map((faq, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<Card className="bg-gray-900/50 border-gray-800">
											<CardContent className="p-6">
												<h3 className="text-xl font-semibold text-white mb-3">
													{faq.question}
												</h3>
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
