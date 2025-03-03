"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	CheckCircle2,
	Code,
	Database,
	Server,
	Shield,
	Zap,
	Link2,
	Smartphone,
	Settings,
	Cpu,
} from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import Image from "next/image";

export default function APIsPage() {
	const { t } = useLanguage();

	const features = [
		{
			icon: <Code className="h-10 w-10 text-blue-500" />,
			title: "API-uri RESTful",
			description:
				"Dezvoltăm API-uri RESTful moderne, scalabile și ușor de utilizat pentru orice tip de aplicație.",
		},
		{
			icon: <Link2 className="h-10 w-10 text-indigo-500" />,
			title: "Integrări Perfecte",
			description:
				"Conectăm sistemele dumneavoastră cu aplicații terțe, asigurând un flux de date eficient și sigur.",
		},
		{
			icon: <Database className="h-10 w-10 text-green-500" />,
			title: "Gestionare Date",
			description:
				"Manipulare eficientă a datelor, cu operațiuni CRUD optimizate și validare robustă.",
		},
		{
			icon: <Server className="h-10 w-10 text-orange-500" />,
			title: "Documentație Swagger",
			description:
				"Documentație completă și interactivă pentru API-urile dezvoltate, facilitând integrarea și utilizarea.",
		},
		{
			icon: <Shield className="h-10 w-10 text-red-500" />,
			title: "Securitate Avansată",
			description:
				"Implementăm autentificare OAuth, JWT, rate limiting și alte măsuri de securitate pentru API-uri.",
		},
		{
			icon: <Zap className="h-10 w-10 text-purple-500" />,
			title: "Performanță Optimizată",
			description:
				"API-uri rapide și eficiente, optimizate pentru volume mari de cereri și răspunsuri prompte.",
		},
	];

	const pricingPlans = [
		{
			name: "Basic API",
			price: "€3000 - €5000",
			description:
				"Ideal pentru afaceri care au nevoie de API-uri simple pentru integrări de bază.",
			features: [
				"Dezvoltare API RESTful cu C# și .NET",
				"Până la 10 endpoint-uri",
				"Autentificare de bază",
				"Documentație Swagger",
				"Validare date",
				"Gestionare erori",
				"Testare de bază",
				"Găzduire în cloud (Azure)",
				"6 luni mentenanță gratuită",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
		{
			name: "Standard API",
			price: "€5000 - €8000",
			description:
				"Pentru afaceri care necesită API-uri mai complexe cu funcționalități avansate.",
			features: [
				"Tot ce include pachetul Basic",
				"Până la 25 endpoint-uri",
				"Autentificare OAuth/JWT",
				"Rate limiting și throttling",
				"Caching pentru performanță",
				"Versioning API",
				"Logging și monitorizare",
				"Testare automată",
				"CI/CD pentru deployment",
				"12 luni mentenanță gratuită",
			],
			cta: "Solicită Ofertă",
			popular: true,
		},
		{
			name: "Enterprise API",
			price: "€8000+",
			description:
				"Soluție completă pentru afaceri cu cerințe complexe și volume mari de date.",
			features: [
				"Tot ce include pachetul Standard",
				"Endpoint-uri nelimitate",
				"Arhitectură microservices",
				"Securitate la nivel enterprise",
				"Scalabilitate pentru volume mari",
				"Integrare cu orice sistem terț",
				"Documentație tehnică detaliată",
				"Suport pentru multiple formate de date",
				"Analiză și optimizare continuă",
				"Suport tehnic dedicat 24/7",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
	];

	const useCases = [
		{
			title: "Integrare Sisteme",
			description:
				"Conectați sistemele interne cu aplicații terțe pentru un flux de date eficient.",
			icon: <Link2 className="h-10 w-10 text-blue-500" />,
		},
		{
			title: "Aplicații Mobile",
			description:
				"Furnizați date și funcționalități pentru aplicațiile mobile ale companiei.",
			icon: <Smartphone className="h-10 w-10 text-indigo-500" />,
		},
		{
			title: "Automatizare Procese",
			description:
				"Automatizați procesele de afaceri prin integrarea sistemelor disparate.",
			icon: <Settings className="h-10 w-10 text-green-500" />,
		},
		{
			title: "Platforme IoT",
			description:
				"Conectați dispozitive IoT și procesați datele colectate în timp real.",
			icon: <Cpu className="h-10 w-10 text-orange-500" />,
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
							Integrări Perfecte
						</Badge>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Dezvoltare API-uri Personalizate
						</h1>
						<p className="text-xl text-gray-300">
							Conectăm sistemele și aplicațiile dumneavoastră prin API-uri
							robuste, securizate și performante.
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
								Ce sunt API-urile și de ce aveți nevoie de ele?
							</h2>
							<p className="text-gray-300 mb-6">
								API-urile (Application Programming Interfaces) sunt interfețe
								care permit diferitelor aplicații și sisteme să comunice între
								ele. Ele funcționează ca un "translator" care facilitează
								schimbul de date și funcționalități între sisteme diferite.
							</p>
							<p className="text-gray-300 mb-6">
								În era digitală actuală, API-urile sunt esențiale pentru
								integrarea sistemelor, automatizarea proceselor și crearea de
								experiențe digitale unificate. Cu o experiență vastă în
								dezvoltarea de API-uri, echipa noastră utilizează tehnologii
								moderne precum C#, .NET și Azure pentru a crea soluții robuste
								și scalabile.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Integrare Fără Efort
										</h3>
										<p className="text-gray-400">
											Conectați sistemele existente cu aplicații terțe pentru un
											flux de date eficient.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Automatizare Procese
										</h3>
										<p className="text-gray-400">
											Automatizați procesele de afaceri prin integrarea
											sistemelor disparate.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Inovație Rapidă
										</h3>
										<p className="text-gray-400">
											Dezvoltați noi funcționalități și servicii mai rapid prin
											utilizarea API-urilor.
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
									src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
									alt="API Development"
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
												"C#",
												".NET Core",
												"ASP.NET Web API",
												"Entity Framework",
												"SQL Server",
												"Azure",
												"Swagger",
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
								API-uri personalizate dezvoltate cu tehnologii moderne și focus
								pe performanță și securitate
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
								Cazuri de Utilizare
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto">
								API-urile noastre pot fi utilizate în diverse scenarii pentru a
								îmbunătăți operațiunile afacerii dumneavoastră
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

					{/* Pricing */}
					<div className="mb-20">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-white mb-4">
								Pachete și Prețuri
							</h2>
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
												<p className="text-gray-400 mt-2">{plan.description}</p>
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
									Pași simpli pentru a obține API-urile perfecte pentru afacerea
									dumneavoastră
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
								{[
									{
										step: "01",
										title: "Analiză",
										description:
											"Analizăm nevoile afacerii și definim cerințele API-urilor.",
									},
									{
										step: "02",
										title: "Design",
										description:
											"Proiectăm arhitectura API-urilor și definim endpoint-urile.",
									},
									{
										step: "03",
										title: "Dezvoltare",
										description:
											"Implementăm API-urile cu toate funcționalitățile necesare.",
									},
									{
										step: "04",
										title: "Testare & Lansare",
										description:
											"Testăm riguros și lansăm API-urile în producție.",
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

					{/* CTA Section */}
					<CTASection />
				</div>
			</section>
		</div>
	);
}
