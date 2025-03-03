"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	CheckCircle2,
	Video,
	Film,
	Scissors,
	Music,
	Zap,
	Layers,
} from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import Image from "next/image";

export default function VideoEditingPage() {
	const { t } = useLanguage();

	const features = [
		{
			icon: <Film className="h-10 w-10 text-blue-500" />,
			title: "Editare Video Profesională",
			description:
				"Transformăm materialele video brute în producții profesionale, cu tranziții fluide și efecte vizuale captivante.",
		},
		{
			icon: <Scissors className="h-10 w-10 text-indigo-500" />,
			title: "Montaj și Tăiere",
			description:
				"Montaj precis și tăiere profesională pentru a crea un flux narativ coerent și captivant.",
		},
		{
			icon: <Music className="h-10 w-10 text-green-500" />,
			title: "Coloană Sonoră și Audio",
			description:
				"Adăugare de muzică, efecte sonore și optimizare audio pentru o experiență auditivă completă.",
		},
		{
			icon: <Zap className="h-10 w-10 text-orange-500" />,
			title: "Efecte Speciale și Animații",
			description:
				"Efecte vizuale și animații care adaugă dinamism și profesionalism materialelor video.",
		},
		{
			icon: <Layers className="h-10 w-10 text-red-500" />,
			title: "Corecție Culoare",
			description:
				"Corecție și gradare de culoare pentru a obține un aspect vizual consistent și profesional.",
		},
		{
			icon: <Video className="h-10 w-10 text-purple-500" />,
			title: "Optimizare pentru Platforme",
			description:
				"Adaptare și optimizare a materialelor video pentru diverse platforme și canale de distribuție.",
		},
	];

	const pricingPlans = [
		{
			name: "Basic",
			price: "€200",
			description:
				"Ideal pentru proiecte simple și conținut pentru social media.",
			features: [
				"Video de până la 2 minute",
				"Editare de bază și tăiere",
				"Tranziții simple",
				"Coloană sonoră de bază",
				"1 rundă de revizuiri",
				"Livrare în format HD",
				"Termen de livrare: 3-5 zile",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
		{
			name: "Standard",
			price: "€500",
			description:
				"Pentru proiecte complexe care necesită editare avansată și efecte vizuale.",
			features: [
				"Video de până la 5 minute",
				"Editare avansată și tăiere",
				"Tranziții complexe",
				"Efecte vizuale de bază",
				"Corecție culoare",
				"Coloană sonoră personalizată",
				"2 runde de revizuiri",
				"Livrare în format 4K",
				"Termen de livrare: 5-7 zile",
			],
			cta: "Solicită Ofertă",
			popular: true,
		},
		{
			name: "Premium",
			price: "€1000+",
			description:
				"Soluție completă pentru proiecte profesionale care necesită editare de înaltă calitate.",
			features: [
				"Video de până la 10 minute",
				"Editare profesională completă",
				"Efecte vizuale avansate",
				"Animații personalizate",
				"Gradare culoare avansată",
				"Coloană sonoră premium",
				"Mixaj audio profesional",
				"Revizuiri nelimitate",
				"Livrare în multiple formate",
				"Termen de livrare: 7-10 zile",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
	];

	const portfolioItems = [
		{
			image:
				"https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070&auto=format&fit=crop",
			title: "Videoclip Corporativ",
			description:
				"Prezentare video profesională pentru o companie din industria tech.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1574717024453-354056afd6fc?q=80&w=2070&auto=format&fit=crop",
			title: "Reclamă Produs",
			description:
				"Videoclip promoțional pentru lansarea unui nou produs pe piață.",
		},
		{
			image:
				"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
			title: "Conținut Social Media",
			description:
				"Serie de videoclipuri scurte și captivante pentru platformele de social media.",
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
							Conținut Video Captivant
						</Badge>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Editare Video Profesională
						</h1>
						<p className="text-xl text-gray-300">
							Transformăm materialele video brute în producții profesionale care
							captează atenția și transmit mesajul dorit
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
								De ce este important conținutul video?
							</h2>
							<p className="text-gray-300 mb-6">
								În era digitală actuală, conținutul video a devenit unul dintre
								cele mai puternice instrumente de marketing și comunicare.
								Studiile arată că videoclipurile generează cu 1200% mai multe
								distribuiri decât textul și imaginile la un loc, iar 90% dintre
								utilizatori spun că videoclipurile îi ajută în procesul de
								decizie de cumpărare.
							</p>
							<p className="text-gray-300 mb-6">
								La NextSoft, transformăm materialele video brute în producții
								profesionale care captează atenția, transmit mesajul dorit și
								generează rezultate. Indiferent dacă aveți nevoie de un
								videoclip corporativ, o reclamă pentru un produs sau conținut
								pentru social media, echipa noastră de editori video
								profesioniști vă stă la dispoziție.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Engagement Crescut
										</h3>
										<p className="text-gray-400">
											Videoclipurile generează de 10 ori mai mult engagement
											decât alte tipuri de conținut.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Conversii Mai Bune
										</h3>
										<p className="text-gray-400">
											Includerea unui video pe o pagină de produs poate crește
											conversiile cu până la 80%.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Retenție Superioară
										</h3>
										<p className="text-gray-400">
											Utilizatorii rețin 95% din mesajul unui video, comparativ
											cu doar 10% din text.
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
									src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070&auto=format&fit=crop"
									alt="Video Editing"
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
												"Adobe Premiere Pro",
												"After Effects",
												"DaVinci Resolve",
												"Final Cut Pro",
												"Adobe Audition",
												"Cinema 4D",
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
								Servicii complete de editare video pentru toate nevoile afacerii
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

					{/* Portfolio */}
					<div className="mb-20">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-white mb-4">
								Proiecte Recente
							</h2>
							<p className="text-xl text-gray-400 max-w-3xl mx-auto">
								Exemple de materiale video create pentru clienții noștri
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
										className={`bg-gray-900/10   border-gray-800 flex flex-col h-full w-full ${
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
									Pași simpli pentru a obține materialele video perfecte pentru
									afacerea dumneavoastră
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
								{[
									{
										step: "01",
										title: "Brief",
										description:
											"Discutăm despre obiectivele, publicul țintă și mesajul pe care doriți să-l transmiteți.",
									},
									{
										step: "02",
										title: "Editare",
										description:
											"Edităm materialele video conform briefului, adăugând tranziții, efecte și coloană sonoră.",
									},
									{
										step: "03",
										title: "Revizuire",
										description:
											"Prezentăm o versiune preliminară și implementăm feedback-ul pentru a perfecționa rezultatul.",
									},
									{
										step: "04",
										title: "Livrare",
										description:
											"Livrăm materialul video final în formatele necesare pentru utilizarea dorită.",
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

					{/* FAQ Section */}
					<section className="py-20">
						<div className="container mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-white mb-4">
									Întrebări Frecvente
								</h2>
								<p className="text-xl text-gray-400 max-w-3xl mx-auto">
									Răspunsuri la cele mai comune întrebări despre serviciile
									noastre de editare video
								</p>
							</div>

							<div className="max-w-3xl mx-auto space-y-6">
								{[
									{
										question: "Ce tipuri de materiale video pot fi editate?",
										answer:
											"Putem edita o gamă largă de materiale video, inclusiv videoclipuri corporative, reclame pentru produse, tutoriale, videoclipuri pentru social media, interviuri, prezentări de evenimente și multe altele. Indiferent de tipul de material video pe care îl aveți, echipa noastră poate transforma materialele brute într-o producție profesională.",
									},
									{
										question:
											"Ce formate de fișiere acceptați pentru materialele brute?",
										answer:
											"Acceptăm majoritatea formatelor video populare, inclusiv MP4, MOV, AVI, WMV, MKV și altele. De asemenea, putem lucra cu materiale de la diverse camere și dispozitive, inclusiv DSLR-uri, camere profesionale, smartphone-uri și drone.",
									},
									{
										question: "Cât durează procesul de editare video?",
										answer:
											"Durata procesului de editare variază în funcție de complexitatea proiectului, lungimea materialului final și pachetul ales. În general, proiectele simple pot fi finalizate în 3-5 zile, în timp ce proiectele mai complexe pot necesita 7-10 zile sau mai mult. Vă vom oferi un termen estimativ la începutul proiectului.",
									},
									{
										question:
											"Pot solicita modificări după ce primesc prima versiune?",
										answer:
											"Da, toate pachetele noastre includ runde de revizuiri în care puteți solicita modificări. Numărul de runde de revizuiri variază în funcție de pachetul ales. Pachetul Basic include 1 rundă, Standard include 2 runde, iar Premium include revizuiri nelimitate.",
									},
									{
										question:
											"Oferiți și servicii de filmare sau doar editare?",
										answer:
											"În prezent, ne concentrăm pe servicii de editare video, dar avem parteneri de încredere care oferă servicii de filmare. Putem coordona întregul proces pentru dumneavoastră, de la filmare la editarea finală, pentru a vă oferi o soluție completă.",
									},
								].map((faq, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<Card className="bg-gray-900/10   border-gray-800">
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
