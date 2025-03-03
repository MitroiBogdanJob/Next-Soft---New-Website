"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	CheckCircle2,
	FileImage,
	Layers,
	PenTool,
	Image as ImageIcon,
	Layout,
	Palette,
} from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import Image from "next/image";

export default function GraphicDesignPage() {
	const { t } = useLanguage();

	const features = [
		{
			icon: <FileImage className="h-10 w-10 text-blue-500" />,
			title: "Bannere Publicitare",
			description:
				"Bannere atractive pentru site-uri web, social media și campanii de marketing online.",
		},
		{
			icon: <Layers className="h-10 w-10 text-indigo-500" />,
			title: "Materiale Tipărite",
			description:
				"Flyere, broșuri, cărți de vizită și alte materiale promoționale pentru afacerea dvs.",
		},
		{
			icon: <PenTool className="h-10 w-10 text-green-500" />,
			title: "Ilustrații Personalizate",
			description:
				"Ilustrații unice care reflectă identitatea brandului și captează atenția publicului.",
		},
		{
			icon: <ImageIcon className="h-10 w-10 text-orange-500" />,
			title: "Grafică Social Media",
			description:
				"Conținut vizual optimizat pentru platformele de social media, adaptat fiecărui canal.",
		},
		{
			icon: <Layout className="h-10 w-10 text-red-500" />,
			title: "Infografice",
			description:
				"Prezentarea informațiilor complexe într-un format vizual ușor de înțeles și atractiv.",
		},
		{
			icon: <Palette className="h-10 w-10 text-purple-500" />,
			title: "Editare Foto",
			description:
				"Retușare și editare profesională a fotografiilor pentru diverse utilizări.",
		},
	];

	const pricingPlans = [
		{
			name: "Basic",
			price: "€100",
			description:
				"Ideal pentru afaceri mici care au nevoie de elemente grafice simple și eficiente.",
			features: [
				"3 bannere pentru social media",
				"Design carte de vizită",
				"1 flyer sau broșură simplă",
				"1 rundă de revizuiri",
				"Format digital (JPG, PNG)",
				"Livrare în 3-5 zile lucrătoare",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
		{
			name: "Standard",
			price: "€300",
			description:
				"Pentru afaceri care doresc un pachet complet de materiale grafice pentru marketing.",
			features: [
				"5 bannere pentru social media",
				"Design carte de vizită",
				"Design antet și semnătură email",
				"2 flyere sau broșuri",
				"1 infografic simplu",
				"2 runde de revizuiri",
				"Formate digitale și pentru print",
				"Livrare în 5-7 zile lucrătoare",
			],
			cta: "Solicită Ofertă",
			popular: true,
		},
		{
			name: "Premium",
			price: "€500+",
			description:
				"Soluție completă pentru afaceri care doresc materiale grafice de înaltă calitate și complexitate.",
			features: [
				"10 bannere pentru social media",
				"Pachet complet de identitate vizuală",
				"Design pentru materiale tipărite",
				"2 infografice complexe",
				"Ilustrații personalizate",
				"Editare foto profesională",
				"Revizuiri nelimitate",
				"Formate pentru toate utilizările",
				"Livrare în 7-10 zile lucrătoare",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
	];

	const portfolioItems = [
		{
			image:
				"https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
			title: "Campanie Social Media",
			description:
				"Set de bannere și grafice pentru o campanie de marketing pe social media.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
			title: "Materiale Tipărite",
			description:
				"Broșuri, flyere și cărți de vizită pentru un eveniment corporativ.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop",
			title: "Infografice",
			description:
				"Infografice pentru prezentarea datelor complexe într-un format vizual atractiv.",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-32 pb-20 relative">
				<div className="absolute inset-0 bg-black/20   z-0"></div>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						className="max-w-4xl mx-auto text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Badge className="mb-4 bg-blue-600 text-white px-3 py-1 text-sm">
							Materiale Vizuale Captivante
						</Badge>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Design Grafic Profesional
						</h1>
						<p className="text-xl text-gray-300">
							Creăm elemente grafice care captează atenția și comunică eficient
							mesajul brandului dumneavoastră
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
								De ce este important designul grafic?
							</h2>
							<p className="text-gray-300 mb-6">
								În era digitală actuală, conținutul vizual de calitate este
								esențial pentru a capta atenția publicului și a transmite
								eficient mesajul brandului dumneavoastră. Designul grafic
								profesional vă ajută să vă diferențiați de competiție, să
								construiți o identitate vizuală coerentă și să comunicați mai
								eficient cu audiența țintă.
							</p>
							<p className="text-gray-300 mb-6">
								La NextSoft, creăm elemente grafice care nu doar arată bine, ci
								și servesc unui scop strategic în marketingul și comunicarea
								afacerii dumneavoastră. De la bannere pentru social media și
								materiale tipărite, la infografice complexe și ilustrații
								personalizate, oferim soluții complete de design grafic adaptate
								nevoilor specifice ale fiecărui client.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Impact Vizual Puternic
										</h3>
										<p className="text-gray-400">
											Elemente grafice care captează atenția și rămân în memoria
											publicului.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Comunicare Eficientă
										</h3>
										<p className="text-gray-400">
											Transmiterea mesajelor complexe într-un format vizual ușor
											de înțeles.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Consistență Vizuală
										</h3>
										<p className="text-gray-400">
											Materiale grafice coerente care întăresc identitatea
											brandului.
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
									src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop"
									alt="Graphic Design"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<div className="bg-black/10   p-6 rounded-lg">
										<h3 className="text-xl font-bold text-white mb-2">
											Instrumente Utilizate
										</h3>
										<div className="flex flex-wrap gap-2">
											{[
												"Adobe Photoshop",
												"Adobe Illustrator",
												"Adobe InDesign",
												"Figma",
												"Canva",
												"Procreate",
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
								Servicii complete de design grafic pentru toate nevoile afacerii
								dumneavoastră
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
									<Card className="bg-gray-900/10   border-gray-800 h-full">
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
				</div>
			</section>
		</div>
	);
}
