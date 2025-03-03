"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ArrowRight,
	CheckCircle2,
	Search,
	BarChart3,
	Globe,
	TrendingUp,
	Target,
	Users,
} from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/cta-section";
import Image from "next/image";

export default function SEOPage() {
	const { t } = useLanguage();

	const features = [
		{
			icon: <Search className="h-10 w-10 text-blue-500" />,
			title: "Audit SEO Complet",
			description:
				"Analizăm în detaliu site-ul dvs. pentru a identifica problemele tehnice și oportunitățile de optimizare.",
		},
		{
			icon: <BarChart3 className="h-10 w-10 text-indigo-500" />,
			title: "Cercetare Cuvinte Cheie",
			description:
				"Identificăm cele mai relevante și profitabile cuvinte cheie pentru afacerea dvs.",
		},
		{
			icon: <Globe className="h-10 w-10 text-green-500" />,
			title: "Optimizare On-Page",
			description:
				"Optimizăm conținutul, meta-tag-urile și structura site-ului pentru motoarele de căutare.",
		},
		{
			icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
			title: "Link Building",
			description:
				"Construim link-uri de calitate care cresc autoritatea domeniului dvs.",
		},
		{
			icon: <Target className="h-10 w-10 text-red-500" />,
			title: "SEO Local",
			description:
				"Optimizăm prezența online locală pentru afacerile care deservesc o anumită zonă geografică.",
		},
		{
			icon: <Users className="h-10 w-10 text-purple-500" />,
			title: "Raportare și Analiză",
			description:
				"Monitorizăm și raportăm regulat progresul și rezultatele campaniilor SEO.",
		},
	];

	const pricingPlans = [
		{
			name: "Basic",
			price: "€300",
			description:
				"Ideal pentru afaceri mici care doresc să-și îmbunătățească vizibilitatea online.",
			features: [
				"Audit SEO inițial",
				"Cercetare cuvinte cheie (10 cuvinte)",
				"Optimizare on-page pentru 5 pagini",
				"Raport lunar de performanță",
				"Suport prin email",
			],
			cta: "Solicită Ofertă",
			popular: false,
		},
		{
			name: "Standard",
			price: "€600",
			description:
				"Pentru afaceri în creștere care doresc să-și îmbunătățească semnificativ prezența în motoarele de căutare.",
			features: [
				"Audit SEO complet",
				"Cercetare cuvinte cheie (25 cuvinte)",
				"Optimizare on-page pentru 10 pagini",
				"Optimizare tehnică",
				"Link building de bază",
				"SEO local",
				"Rapoarte bi-săptămânale",
				"Suport prin email și telefon",
			],
			cta: "Solicită Ofertă",
			popular: true,
		},
		{
			name: "Premium",
			price: "€1000",
			description:
				"Soluție completă pentru afaceri care doresc să domine rezultatele căutărilor în nișa lor.",
			features: [
				"Audit SEO avansat",
				"Cercetare cuvinte cheie extinsă",
				"Optimizare on-page pentru toate paginile",
				"Optimizare tehnică avansată",
				"Link building agresiv",
				"SEO local avansat",
				"Optimizare conținut",
				"Monitorizare competiție",
				"Rapoarte săptămânale",
				"Suport prioritar 24/7",
			],
			cta: "Solicită Ofertă",
			popular: false,
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
							Vizibilitate în Google
						</Badge>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Optimizare SEO Profesională
						</h1>
						<p className="text-xl text-gray-300">
							Creștem vizibilitatea site-ului dvs. în motoarele de căutare
							pentru a atrage mai mulți clienți și a genera mai multe vânzări
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
								De ce este important SEO?
							</h2>
							<p className="text-gray-300 mb-6">
								Optimizarea pentru motoarele de căutare (SEO) este esențială
								pentru succesul online al afacerii dumneavoastră. Peste 90%
								dintre experiențele online încep cu o căutare pe Google, iar 75%
								dintre utilizatori nu trec niciodată de prima pagină de
								rezultate. Fără o strategie SEO eficientă, site-ul dumneavoastră
								riscă să rămână invizibil pentru potențialii clienți.
							</p>
							<p className="text-gray-300 mb-6">
								La NextSoft, oferim servicii complete de optimizare SEO care vă
								ajută să vă poziționați mai bine în rezultatele căutărilor, să
								atrageți trafic de calitate și să convertiți vizitatorii în
								clienți. Utilizăm cele mai recente tehnici și strategii pentru a
								vă ajuta să depășiți competiția și să obțineți rezultate
								durabile.
							</p>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Trafic Organic de Calitate
										</h3>
										<p className="text-gray-400">
											Atrageți vizitatori interesați de produsele sau serviciile
											dvs.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											Credibilitate și Autoritate
										</h3>
										<p className="text-gray-400">
											Poziționarea în primele rezultate crește încrederea
											utilizatorilor în brandul dvs.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-blue-500 mt-1" />
									<div>
										<h3 className="text-lg font-medium text-white">
											ROI Excelent
										</h3>
										<p className="text-gray-400">
											SEO oferă unul dintre cele mai bune rapoarte
											cost-beneficiu în marketing digital.
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
									src="https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=2070&auto=format&fit=crop"
									alt="SEO Optimization"
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<div className="bg-black/10   p-6 rounded-lg">
										<h3 className="text-xl font-bold text-white mb-2">
											Rezultate Măsurabile
										</h3>
										<div className="space-y-3">
											<div className="flex justify-between items-center">
												<span className="text-gray-300">
													Creștere Trafic Organic
												</span>
												<span className="text-green-400 font-bold">+150%</span>
											</div>
											<div className="w-full bg-gray-700 rounded-full h-2">
												<div
													className="bg-green-500 h-2 rounded-full"
													style={{ width: "75%" }}
												></div>
											</div>

											<div className="flex justify-between items-center">
												<span className="text-gray-300">
													Îmbunătățire Poziții
												</span>
												<span className="text-green-400 font-bold">
													+12 poziții
												</span>
											</div>
											<div className="w-full bg-gray-700 rounded-full h-2">
												<div
													className="bg-green-500 h-2 rounded-full"
													style={{ width: "65%" }}
												></div>
											</div>

											<div className="flex justify-between items-center">
												<span className="text-gray-300">
													Creștere Conversii
												</span>
												<span className="text-green-400 font-bold">+80%</span>
											</div>
											<div className="w-full bg-gray-700 rounded-full h-2">
												<div
													className="bg-green-500 h-2 rounded-full"
													style={{ width: "80%" }}
												></div>
											</div>
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
								Servicii complete de optimizare SEO pentru a crește
								vizibilitatea online a afacerii dumneavoastră
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

					{/* Process Section */}
					<section className="py-20">
						<div className="container mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-white mb-4">
									Procesul Nostru SEO
								</h2>
								<p className="text-xl text-gray-400 max-w-3xl mx-auto">
									Abordare metodică pentru a obține rezultate durabile în
									optimizarea pentru motoarele de căutare
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
								{[
									{
										step: "01",
										title: "Audit & Analiză",
										description:
											"Analizăm site-ul, competiția și piața pentru a identifica oportunitățile și problemele.",
									},
									{
										step: "02",
										title: "Strategie",
										description:
											"Dezvoltăm o strategie SEO personalizată bazată pe obiectivele afacerii dvs.",
									},
									{
										step: "03",
										title: "Implementare",
										description:
											"Implementăm optimizările tehnice, on-page și off-page conform strategiei.",
									},
									{
										step: "04",
										title: "Monitorizare & Optimizare",
										description:
											"Monitorizăm rezultatele și ajustăm continuu strategia pentru performanță maximă.",
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
													<span className="text-gray-400 ml-1">/lună</span>
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

					{/* Results Section */}
					<section className="py-20">
						<div className="container mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center mb-12">
								<h2 className="text-3xl font-bold text-white mb-4">
									Rezultate Reale
								</h2>
								<p className="text-xl text-gray-400 max-w-3xl mx-auto">
									Iată cum am ajutat alte afaceri să-și îmbunătățească prezența
									online
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{[
									{
										metric: "Creștere Trafic",
										value: "150%",
										description:
											"Creștere medie a traficului organic pentru clienții noștri în primele 6 luni.",
									},
									{
										metric: "Poziții în Top 10",
										value: "85%",
										description:
											"Din cuvintele cheie țintite ajung în primele 10 rezultate Google în 6 luni.",
									},
									{
										metric: "Creștere Conversii",
										value: "80%",
										description:
											"Creștere medie a ratei de conversie pentru site-urile optimizate de noi.",
									},
								].map((result, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<Card className="bg-gray-900/10   border-gray-800 h-full">
											<CardContent className="p-6 text-center">
												<h3 className="text-xl font-semibold text-white mb-3">
													{result.metric}
												</h3>
												<p className="text-4xl font-bold text-green-400 mb-4">
													{result.value}
												</p>
												<p className="text-gray-400">{result.description}</p>
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
									Răspunsuri la cele mai comune întrebări despre SEO
								</p>
							</div>

							<div className="max-w-3xl mx-auto space-y-6">
								{[
									{
										question: "Cât durează până când voi vedea rezultate?",
										answer:
											"SEO este un proces pe termen lung. În general, primele îmbunătățiri pot fi observate după 3-4 luni, dar rezultatele semnificative apar de obicei după 6-12 luni de optimizare continuă. Acest timp variază în funcție de competitivitatea industriei, starea actuală a site-ului și agresivitatea strategiei implementate.",
									},
									{
										question: "Ce face ca serviciile dvs. SEO să fie diferite?",
										answer:
											"Ne diferențiem prin abordarea personalizată pentru fiecare client, transparența totală în raportare și focus pe rezultate măsurabile. Nu folosim tehnici 'black hat' care pot duce la penalizări, ci implementăm strategii etice și durabile. În plus, combinăm expertiza tehnică cu înțelegerea profundă a afacerii dvs. pentru a obține cele mai bune rezultate.",
									},
									{
										question:
											"Oferiți garanții pentru poziționarea în prima pagină?",
										answer:
											"Nu oferim garanții specifice de poziționare, deoarece algoritmii motoarelor de căutare sunt în continuă schimbare și nicio agenție nu poate controla complet rezultatele. Ceea ce garantăm este implementarea celor mai bune practici SEO, transparență totală și eforturi continue de îmbunătățire. Majoritatea clienților noștri văd îmbunătățiri semnificative ale poziționării în timp.",
									},
									{
										question:
											"Ce informații aveți nevoie pentru a începe optimizarea SEO?",
										answer:
											"Pentru a începe, avem nevoie de acces la site-ul dvs. (CMS, Google Analytics, Search Console), informații despre afacerea dvs. (produse/servicii, public țintă, obiective), cuvinte cheie țintă (dacă le aveți deja identificate) și detalii despre competitorii principali. Vom discuta toate acestea în detaliu în timpul consultării inițiale.",
									},
									{
										question: "Cum măsurați succesul campaniilor SEO?",
										answer:
											"Măsurăm succesul prin mai mulți indicatori cheie de performanță (KPI), inclusiv: creșterea traficului organic, îmbunătățirea poziționării pentru cuvintele cheie țintă, creșterea ratei de conversie, reducerea ratei de respingere, creșterea timpului petrecut pe site și, cel mai important, creșterea numărului de lead-uri sau vânzări generate prin traficul organic.",
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
