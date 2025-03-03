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
	Layers,
} from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import Image from "next/image";

export default function WebApplicationsPage() {
	const { t } = useLanguage();

	const features = [
		{
			icon: <Code className="h-10 w-10 text-blue-500" />,
			title: "Dezvoltare Personalizată",
			description:
				"Aplicații web create special pentru nevoile afacerii dumneavoastră, cu funcționalități personalizate.",
		},
		{
			icon: <Layers className="h-10 w-10 text-indigo-500" />,
			title: "Arhitectură Scalabilă",
			description:
				"Construim aplicații care pot crește odată cu afacerea dumneavoastră, fără compromisuri de performanță.",
		},
		{
			icon: <Database className="h-10 w-10 text-green-500" />,
			title: "Baze de Date Robuste",
			description:
				"Utilizăm SQL Server pentru a asigura integritatea, securitatea și performanța datelor dumneavoastră.",
		},
		{
			icon: <Server className="h-10 w-10 text-orange-500" />,
			title: "API-uri RESTful",
			description:
				"Dezvoltăm API-uri moderne pentru integrare ușoară cu alte sisteme și aplicații.",
		},
		{
			icon: <Shield className="h-10 w-10 text-red-500" />,
			title: "Securitate Avansată",
			description:
				"Implementăm cele mai bune practici de securitate pentru a proteja datele și utilizatorii.",
		},
		{
			icon: <Zap className="h-10 w-10 text-purple-500" />,
			title: "Performanță Optimizată",
			description:
				"Aplicații rapide și responsive, optimizate pentru cea mai bună experiență a utilizatorilor.",
		},
	];

	const pricingPlans = [
		{
			name: "Startup",
			price: "€2000 - €5000",
			description:
				"Ideal pentru afaceri mici sau startup-uri care au nevoie de o aplicație web de bază.",
			features: [
				"Dezvoltare frontend cu React și Next.js",
				"Backend dezvoltat în C# și .NET",
				"Bază de date SQL Server",
				"Până la 5 module funcționale",
				"Autentificare și gestionare utilizatori",
				"Design responsive pentru toate dispozitivele",
				"Integrare cu 1-2 servicii terțe",
				"Securitate de bază",
				"6 luni mentenanță gratuită",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
		{
			name: "Business",
			price: "€5000 - €10000",
			description:
				"Pentru afaceri în creștere care necesită funcționalități avansate și integrări multiple.",
			features: [
				"Tot ce include pachetul Startup",
				"Până la 10 module funcționale",
				"Dashboard administrativ avansat",
				"Rapoarte și analize personalizate",
				"Integrare cu până la 5 servicii terțe",
				"API RESTful pentru integrări externe",
				"Optimizare avansată pentru performanță",
				"Securitate avansată",
				"Testare automată",
				"12 luni mentenanță gratuită",
			],
			cta: "Solicită Ofertă",
			popular: true,
		},
		{
			name: "Enterprise",
			price: "€10000+",
			description:
				"Soluție completă pentru afaceri cu cerințe complexe și nevoi de scalabilitate.",
			features: [
				"Tot ce include pachetul Business",
				"Module funcționale nelimitate",
				"Arhitectură microservices",
				"Scalabilitate pentru volume mari de utilizatori",
				"Integrare cu orice sistem terț",
				"API-uri avansate și documentație completă",
				"Optimizare pentru performanță la scară mare",
				"Securitate la nivel enterprise",
				"CI/CD pentru deployment automat",
				"Suport tehnic dedicat 24/7",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
	];

	const portfolioItems = [
		{
			image:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
			title: "CRM pentru Imobiliare",
			description:
				"Sistem complet de gestionare a relațiilor cu clienții pentru o agenție imobiliară, cu funcționalități de urmărire lead-uri și proprietăți.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
			title: "Platformă de Management Proiecte",
			description:
				"Aplicație web pentru gestionarea proiectelor, cu funcționalități de urmărire sarcini, colaborare și raportare.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
			title: "Dashboard Financiar",
			description:
				"Dashboard interactiv pentru monitorizarea și analiza datelor financiare, cu grafice și rapoarte personalizate.",
		},
	];

	const technologies = [
		{
			name: "Frontend",
			items: [
				"React",
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Material UI",
				"Redux",
			],
		},
		{
			name: "Backend",
			items: [
				"C#",
				".NET Core",
				"ASP.NET",
				"Entity Framework",
				"Web API",
				"SignalR",
			],
		},
		{
			name: "Baze de Date",
			items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Azure SQL"],
		},
		{
			name: "DevOps & Cloud",
			items: ["Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
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
							Soluții Software Personalizate
						</Badge>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Aplicații Web Personalizate
						</h1>
						<p className="text-xl text-gray-300">
							Dezvoltăm aplicații web personalizate care transformă procesele de
							afaceri și oferă experiențe digitale excepționale.
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
								De ce să alegeți o aplicație web personalizată?
							</h2>
							<p className="text-gray-300 mb-6">
								Aplicațiile web personalizate sunt soluții software create
								special pentru a răspunde nevoilor specifice ale afacerii
								dumneavoastră. Spre deosebire de soluțiile generice, acestea
								sunt concepute pentru a se integra perfect în fluxurile de lucru
								existente și pentru a rezolva provocările unice cu care vă
								confruntați.
							</p>
							<p className="text-gray-300 mb-6">
								Cu o experiență vastă în dezvoltarea de aplicații web
								personalizate, echipa noastră utilizează tehnologii moderne
								precum React, Next.js, C# și SQL Server pentru a crea soluții
								robuste, scalabile și ușor de utilizat.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Eficiență Operațională
										</h3>
										<p className="text-gray-400">
											Automatizați procesele manuale și reduceți erorile umane,
											crescând productivitatea.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Avantaj Competitiv
										</h3>
										<p className="text-gray-400">
											Obțineți un avantaj față de competiție cu soluții software
											adaptate perfect nevoilor dvs.
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
											Aplicațiile noastre cresc odată cu afacerea dvs.,
											adaptându-se la nevoile în schimbare.
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
									src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
									alt="Web Application Development"
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
												"C#",
												".NET",
												"SQL Server",
												"Azure",
												"TypeScript",
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
								Aplicații web personalizate dezvoltate cu tehnologii moderne și
								focus pe rezultate
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
									className="bg-gray-900/50   p-6 rounded-lg border border-gray-800"
								>
									<div className="mb-4">{feature.icon}</div>
									<h3 className="text-xl font-bold text-white mb-2">
										{feature.title}
									</h3>
									<p className="text-gray-400">{feature.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
