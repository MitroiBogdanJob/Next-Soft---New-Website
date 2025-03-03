"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	CheckCircle2,
	ShoppingCart,
	CreditCard,
	BarChart,
	Search,
	Shield,
	Code,
	Truck,
	Smartphone,
	Settings,
	Cpu,
} from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EcommercePage() {
	const { t } = useLanguage();

	const features = [
		{
			icon: <ShoppingCart className="h-10 w-10 text-blue-500" />,
			title: "Gestionare Produse",
			description:
				"Sistem complet de gestionare a produselor, cu categorii, atribute, variante și stocuri.",
		},
		{
			icon: <CreditCard className="h-10 w-10 text-indigo-500" />,
			title: "Procesare Plăți",
			description:
				"Integrare cu multiple metode de plată pentru o experiență de checkout fluidă și sigură.",
		},
		{
			icon: <Truck className="h-10 w-10 text-green-500" />,
			title: "Gestionare Comenzi",
			description:
				"Sistem avansat de gestionare a comenzilor, cu notificări automate și urmărire status.",
		},
		{
			icon: <Smartphone className="h-10 w-10 text-orange-500" />,
			title: "Design Responsive",
			description:
				"Magazinul dvs. online va arăta și va funcționa perfect pe orice dispozitiv.",
		},
		{
			icon: <BarChart className="h-10 w-10 text-red-500" />,
			title: "Analiză Vânzări",
			description:
				"Rapoarte detaliate și analize pentru a înțelege comportamentul clienților și a optimiza vânzările.",
		},
		{
			icon: <Shield className="h-10 w-10 text-purple-500" />,
			title: "Securitate Avansată",
			description:
				"Protecție completă pentru datele clienților și tranzacțiile online.",
		},
	];

	const wordpressFeatures = [
		"Sistem complet de gestionare a produselor",
		"Coș de cumpărături și checkout optimizat",
		"Integrare cu procesatori de plăți populari",
		"Calculare automată a taxelor și livrării",
		"Gestionare stocuri și inventar",
		"Cupoane și reduceri",
		"Conturi clienți și istoric comenzi",
		"Optimizare SEO pentru produse",
		"Rapoarte de vânzări de bază",
		"Design responsive pentru toate dispozitivele",
		"Integrare cu servicii de email marketing",
		"Securitate de bază și backup-uri",
	];

	const customFeatures = [
		"Arhitectură personalizată cu React și Next.js",
		"Backend robust dezvoltat în C# și .NET",
		"Bază de date SQL Server pentru performanță",
		"Sistem avansat de gestionare a produselor",
		"Checkout personalizat multi-step",
		"Integrare cu orice procesator de plăți",
		"Sistem complex de reduceri și promoții",
		"Gestionare avansată a stocurilor",
		"Dashboard administrativ personalizat",
		"Rapoarte și analize avansate",
		"Optimizare pentru performanță și scalabilitate",
		"Securitate la nivel enterprise",
		"API pentru integrări cu sisteme terțe",
		"Suport pentru marketplace și vânzători multipli",
	];

	const wordpressPricingPlans = [
		{
			name: "Basic",
			price: "€1000",
			description:
				"Ideal pentru afaceri mici care doresc să înceapă să vândă online.",
			features: [
				"Până la 100 produse",
				"Design responsive",
				"Integrare cu 2 metode de plată",
				"Gestionare comenzi de bază",
				"Conturi clienți",
				"Cupoane de reducere",
				"Optimizare SEO de bază",
				"6 luni găzduire gratuită",
				"6 luni mentenanță gratuită",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
		{
			name: "Business",
			price: "€2500",
			description:
				"Pentru afaceri în creștere cu nevoi de e-commerce mai complexe.",
			features: [
				"Până la 1000 produse",
				"Design premium personalizat",
				"Integrare cu 5 metode de plată",
				"Gestionare avansată a comenzilor",
				"Sistem de recenzii produse",
				"Cupoane și programe de fidelizare",
				"Rapoarte de vânzări",
				"Integrare cu servicii de email marketing",
				"Optimizare SEO avansată",
				"Suport tehnic prioritar",
			],
			cta: "Solicită Ofertă",
			popular: true,
		},
		{
			name: "Premium",
			price: "€5000",
			description:
				"Soluție completă pentru afaceri cu volume mari de vânzări și cerințe complexe.",
			features: [
				"Produse nelimitate",
				"Design premium personalizat",
				"Integrare cu orice metodă de plată",
				"Sistem complet de gestionare comenzi",
				"Sistem avansat de recenzii și rating",
				"Marketing și fidelizare avansate",
				"Rapoarte și analize detaliate",
				"Integrare cu orice sistem terț",
				"Optimizare SEO completă",
				"Suport tehnic dedicat 24/7",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
	];

	const customPricingPlans = [
		{
			name: "Basic",
			price: "€5000",
			description:
				"Pentru afaceri care doresc o soluție e-commerce personalizată de bază.",
			features: [
				"Dezvoltare frontend cu React și Next.js",
				"Backend dezvoltat în C# și .NET",
				"Bază de date SQL Server",
				"Până la 500 produse",
				"Integrare cu 3 metode de plată",
				"Sistem de gestionare comenzi",
				"Panou de administrare personalizat",
				"Design responsive premium",
				"12 luni găzduire gratuită",
				"12 luni mentenanță gratuită",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
		{
			name: "Business",
			price: "€8000",
			description:
				"Pentru afaceri în creștere care necesită funcționalități avansate și integrări multiple.",
			features: [
				"Tot ce include pachetul Basic",
				"Până la 5000 produse",
				"Integrare cu 5+ metode de plată",
				"Sistem avansat de gestionare comenzi",
				"Dashboard administrativ complex",
				"Rapoarte și analize personalizate",
				"Sistem de reduceri și promoții",
				"Integrare cu servicii de marketing",
				"API pentru integrări externe",
				"Optimizare avansată pentru performanță",
			],
			cta: "Solicită Ofertă",
			popular: true,
		},
		{
			name: "Enterprise",
			price: "€10000+",
			description:
				"Soluție completă pentru afaceri cu volume mari și cerințe complexe de e-commerce.",
			features: [
				"Tot ce include pachetul Business",
				"Produse nelimitate",
				"Arhitectură scalabilă pentru volume mari",
				"Integrare cu orice sistem terț",
				"Funcționalități de marketplace",
				"Suport pentru vânzători multipli",
				"Sistem complex de discount și loialitate",
				"Analiză avansată și machine learning",
				"Securitate la nivel enterprise",
				"Suport tehnic dedicat 24/7",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
	];

	const useCases = [
		{
			title: "Magazine Online B2C",
			description:
				"Vânzare directă către consumatori, cu experiență de cumpărare optimizată și conversii maxime.",
			icon: <ShoppingCart className="h-10 w-10 text-blue-500" />,
		},
		{
			title: "Platforme B2B",
			description:
				"Soluții pentru vânzări business-to-business, cu prețuri personalizate și comenzi în volum mare.",
			icon: <Settings className="h-10 w-10 text-indigo-500" />,
		},
		{
			title: "Marketplace-uri",
			description:
				"Platforme multi-vendor unde mai mulți vânzători își pot lista și vinde produsele.",
			icon: <Cpu className="h-10 w-10 text-green-500" />,
		},
		{
			title: "Abonamente și Servicii",
			description:
				"Vânzare de abonamente, servicii sau produse digitale cu plăți recurente.",
			icon: <CreditCard className="h-10 w-10 text-orange-500" />,
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
							Soluții E-commerce Complete
						</Badge>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Magazine Online Profesionale
						</h1>
						<p className="text-xl text-gray-300">
							Transformați-vă afacerea cu un magazin online performant,
							securizat și optimizat pentru conversii.
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
								De ce să alegeți un magazin online?
							</h2>
							<p className="text-gray-300 mb-6">
								În era digitală actuală, un magazin online profesional este
								esențial pentru orice afacere care dorește să crească și să
								rămână competitivă. Cu o experiență vastă în dezvoltarea de
								soluții e-commerce, oferim magazine online personalizate care
								transformă vizitatorii în clienți fideli.
							</p>
							<p className="text-gray-300 mb-6">
								Fie că optați pentru o soluție bazată pe WordPress/WooCommerce
								sau pentru o dezvoltare complet personalizată cu React, Next.js
								și C#, vă garantăm un magazin online performant, securizat și
								ușor de administrat.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Vânzări 24/7
										</h3>
										<p className="text-gray-400">
											Magazinul dvs. online vinde non-stop, fără limitări de
											program sau locație.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Extindere Geografică
										</h3>
										<p className="text-gray-400">
											Ajungeți la clienți din întreaga țară sau chiar din
											întreaga lume.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Scalabilitate
										</h3>
										<p className="text-gray-400">
											Magazinul dvs. online poate crește odată cu afacerea, fără
											limitări fizice.
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
									src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
									alt="E-commerce Website"
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
												"WordPress",
												"WooCommerce",
												"React",
												"Next.js",
												"C#",
												"SQL Server",
												"Stripe",
												"PayPal",
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
								Magazine online complete, cu toate funcționalitățile necesare
								pentru succes
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
									<Card className="bg-gray-900/30   border-gray-800 h-full">
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

					{/* Use Cases */}
					<div className="mb-20">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-white mb-4">
								Soluții pentru Orice Tip de Afacere
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto">
								Dezvoltăm magazine online adaptate perfect nevoilor specifice
								ale afacerii dumneavoastră
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
									<Card className="bg-gray-900/30   border-gray-800 h-full">
										<CardContent className="p-6">
											<div className="flex items-start gap-4">
												<div className="bg-blue-900/30 p-3 rounded-lg">
													{useCase.icon}
												</div>
												<div>
													<h3 className="text-xl font-semibold text-white mb-2">
														{useCase.title}
													</h3>
													<p className="text-gray-400">{useCase.description}</p>
												</div>
											</div>
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
								Oferim două tipuri de soluții pentru magazine online, în funcție
								de complexitatea și cerințele proiectului dumneavoastră
							</p>
						</div>

						<Tabs defaultValue="wordpress" className="w-full">
							<TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
								<TabsTrigger value="wordpress">
									WordPress / WooCommerce
								</TabsTrigger>
								<TabsTrigger value="custom">Custom Development</TabsTrigger>
							</TabsList>

							<TabsContent value="wordpress">
								<div className="mb-8">
									<div className="bg-gray-900/30   border border-gray-800 rounded-lg p-8 mb-8">
										<h3 className="text-2xl font-bold text-white mb-4">
											Soluție WordPress / WooCommerce
										</h3>
										<p className="text-gray-300 mb-6">
											Soluția noastră bazată pe WordPress și WooCommerce oferă
											un echilibru perfect între cost, funcționalitate și
											ușurință în utilizare. Ideală pentru afaceri mici și
											mijlocii care doresc să înceapă să vândă online rapid și
											eficient.
										</p>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<h4 className="text-lg font-semibold text-white mb-3">
													Avantaje:
												</h4>
												<ul className="space-y-2">
													{[
														"Cost accesibil (€1000 - €5000)",
														"Implementare rapidă (3-6 săptămâni)",
														"Panou de administrare intuitiv",
														"Actualizări ușoare de produse",
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
													className={`bg-gray-900/30   border-gray-800 flex flex-col h-full w-full ${
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
									<div className="bg-gray-900/30   border border-gray-800 rounded-lg p-8 mb-8">
										<h3 className="text-2xl font-bold text-white mb-4">
											Dezvoltare Personalizată
										</h3>
										<p className="text-gray-300 mb-6">
											Soluția noastră de dezvoltare personalizată oferă
											libertate totală în design și funcționalitate. Utilizăm
											tehnologii moderne precum React, Next.js, C# și SQL Server
											pentru a crea magazine online unice, performante și
											scalabile.
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
														"API RESTful pentru integrări",
														"Stripe, PayPal și alte gateway-uri",
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
													className={`bg-gray-900/30   border-gray-800 flex flex-col h-full w-full ${
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

					{/* Process Section */}
					<section className="py-20">
						<div className="container mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-white mb-4">
									Procesul Nostru de Lucru
								</h2>
								<p className="text-xl text-gray-400 max-w-3xl mx-auto">
									Pași simpli pentru a obține magazinul online perfect pentru
									afacerea dumneavoastră
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
								{[
									{
										step: "01",
										title: "Analiză",
										description:
											"Analizăm nevoile afacerii și definim cerințele magazinului online.",
									},
									{
										step: "02",
										title: "Design",
										description:
											"Creăm un design atractiv și optimizat pentru conversii.",
									},
									{
										step: "03",
										title: "Dezvoltare",
										description:
											"Implementăm magazinul online cu toate funcționalitățile necesare.",
									},
									{
										step: "04",
										title: "Testare",
										description:
											"Testăm riguros toate funcționalitățile și procesul de checkout.",
									},
									{
										step: "05",
										title: "Lansare",
										description:
											"Lansăm magazinul online și oferim suport continuu.",
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

					{/* FAQ Section */}
					<section className="py-20">
						<div className="container mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-white mb-4">
									Întrebări Frecvente
								</h2>
								<p className="text-xl text-gray-400 max-w-3xl mx-auto">
									Răspunsuri la cele mai comune întrebări despre magazinele
									online
								</p>
							</div>

							<div className="max-w-3xl mx-auto space-y-6">
								{[
									{
										question:
											"Care este diferența dintre soluția WordPress/WooCommerce și dezvoltarea personalizată?",
										answer:
											"Soluția WordPress/WooCommerce este mai rapidă și mai accesibilă ca preț, ideală pentru afaceri mici și mijlocii care au nevoie de un magazin online într-un timp scurt. Dezvoltarea personalizată oferă libertate totală în design și funcționalitate, performanță superioară și scalabilitate excelentă, fiind recomandată pentru afaceri cu cerințe specifice și complexe sau volume mari de vânzări.",
									},
									{
										question: "Cât durează dezvoltarea unui magazin online?",
										answer:
											"Durata variază în funcție de complexitatea proiectului. Pentru soluțiile WordPress/WooCommerce, un magazin online poate fi finalizat în 3-6 săptămâni. Pentru dezvoltarea personalizată cu React, Next.js și C#, durata poate fi de 8-12 săptămâni. Proiectele mai complexe pot necesita mai mult timp.",
									},
									{
										question:
											"Ce metode de plată pot integra în magazinul meu online?",
										answer:
											"Putem integra orice metodă de plată populară, inclusiv card de credit/debit (prin Stripe, PayPal, etc.), plata la livrare, transfer bancar, și alte soluții locale. Pentru dezvoltarea personalizată, putem integra orice gateway de plată care oferă API.",
									},
									{
										question: "Pot să-mi administrez singur magazinul online?",
										answer:
											"Da, toate magazinele noastre online includ un panou de administrare intuitiv care vă permite să gestionați produse, comenzi, clienți și alte aspecte ale magazinului fără cunoștințe tehnice avansate. Oferim și instruire pentru utilizarea acestuia.",
									},
									{
										question:
											"Ce se întâmplă după ce expiră perioada de găzduire și mentenanță gratuită?",
										answer:
											"După perioada gratuită, puteți opta pentru unul din pachetele noastre de mentenanță și găzduire la prețuri competitive. Vă vom contacta înainte de expirarea perioadei pentru a discuta opțiunile disponibile.",
									},
								].map((faq, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<Card className="bg-gray-900/30   border-gray-800">
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
