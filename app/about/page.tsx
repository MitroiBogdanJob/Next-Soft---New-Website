"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import StatsSection from "@/components/stats-section";
import CTASection from "@/components/cta-section";

export default function AboutPage() {
	const { t, language } = useLanguage();

	const milestones = [
		{
			year: "",
			title: language === "ro" ? "Fondarea Companiei" : "Company Founded",
			description:
				language === "ro"
					? "NextSoft a fost înființată cu misiunea de a oferi soluții software excepționale."
					: "NextSoft was established with a mission to deliver exceptional software solutions.",
		},
		{
			year: "",
			title:
				language === "ro"
					? "Extindere în Aplicatii Desktop"
					: "Expansion to Desktop Development",
			description:
				language === "ro"
					? "Am lansat divizia noastră de dezvoltare Desktop pentru a răspunde cerințelor crescânde ale clienților."
					: "Launched our Desktop development division to meet growing client demands.",
		},
		{
			year: "",
			title:
				language === "ro"
					? "Integrarea Serviciilor Cloud"
					: "Cloud Services Integration",
			description:
				language === "ro"
					? "Am adăugat servicii complete de migrare și gestionare cloud în portofoliul nostru."
					: "Added comprehensive cloud migration and management services to our portfolio.",
		},
		{
			year: "",
			title: language === "ro" ? "Editare Video" : "Video Editing",
			description:
				language === "ro"
					? "Am extins gama serviciilor noastre prin includerea editării video."
					: "We have expanded our range of services to include video editing.",
		},
		{
			year: "",
			title:
				language === "ro"
					? "Lansarea Marketing-ului Digital"
					: "Digital Marketing Launch",
			description:
				language === "ro"
					? "Am extins serviciile pentru a include soluții complete de marketing digital."
					: "Expanded services to include comprehensive digital marketing solutions.",
		},
		{
			year: "",
			title: language === "ro" ? "Îmbunătățirea continuă a software-ului: cheia succesului în era digitală" : "Continuous software improvement: the key to success in the digital age",
			description:
				language === "ro"
					? " Investim constant în optimizarea software-ului nostru, asigurându-ne că rămânem la curent cu cele mai recente tehnologii și oferim soluții eficiente și inovatoare clienților noștri."
					: "We consistently invest in optimizing our software, ensuring we stay up-to-date with the latest technologies and provide efficient and innovative solutions to our clients.",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-32 pb-20 relative">
				<div className="absolute inset-0 bg-black/50  z-0"></div>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						className="max-w-4xl mx-auto text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							{t("about.title")}
						</h1>
						<p className="text-xl text-gray-300 mb-8">{t("about.subtitle")}</p>
						<p className="text-lg text-gray-400">{t("about.description")}</p>
					</motion.div>
				</div>
			</section>

			{/* Mission & Values */}
			<section className="py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl font-bold text-white mb-4">
								{language === "ro" ? "Misiunea Noastră" : "Our Mission"}
							</h2>
							<p className="text-lg text-blue-400 mb-6">{t("about.mission")}</p>
							<p className="text-gray-300 mb-6">
								{language === "ro"
									? "Credem că tehnologia ar trebui să fie un facilitator, nu o barieră. Soluțiile noastre sunt concepute pentru a fi intuitive, scalabile și orientate spre viitor, permițând clienților noștri să se concentreze pe activitatea lor de bază în timp ce noi gestionăm complexitățile tehnice."
									: "We believe that technology should be an enabler, not a barrier. Our solutions are designed to be intuitive, scalable, and future-proof, allowing our clients to focus on their core business while we handle the technical complexities."}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<div className="bg-gray-900/30   border border-gray-800 rounded-lg p-8">
								<h3 className="text-xl font-semibold text-white mb-6">
									{t("about.values.title")}
								</h3>
								<div className="space-y-4">
									{[
										{
											name: t("about.values.excellence"),
											description:
												language === "ro"
													? "Ne străduim pentru excelență în fiecare proiect pe care îl întreprindem."
													: "We strive for excellence in every project we undertake.",
										},
										{
											name: t("about.values.innovation"),
											description:
												language === "ro"
													? "Îmbrățișăm inovația și rămânem în fruntea tehnologiei."
													: "We embrace innovation and stay at the forefront of technology.",
										},
										{
											name: t("about.values.integrity"),
											description:
												language === "ro"
													? "Operăm cu integritate și transparență în toate relațiile noastre."
													: "We operate with integrity and transparency in all our dealings.",
										},
										{
											name: t("about.values.client-focus"),
											description:
												language === "ro"
													? "Prioritizăm nevoile și succesul clienților noștri mai presus de toate."
													: "We prioritize our clients' needs and success above all else.",
										},
									].map((value, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.4, delay: index * 0.1 }}
											viewport={{ once: true }}
											className="flex gap-4"
										>
											<CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0" />
											<div>
												<h4 className="text-lg font-medium text-white">
													{value.name}
												</h4>
												<p className="text-gray-400">{value.description}</p>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<StatsSection />

			{/* Company Timeline */}
			<section className="py-20 relative">
				<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-blue-900/20   z-0"></div>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							{language === "ro" ? "Călătoria Noastră" : "Our Journey"}
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							{language === "ro"
								? "Etape cheie în istoria companiei noastre"
								: "Key milestones in our company's history"}
						</p>
					</div>

					<div className="relative max-w-4xl mx-auto">
						{/* Timeline line */}
						<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>

						{/* Timeline items */}
						<div className="space-y-12">
							{milestones.map((milestone, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{ once: true, margin: "-100px" }}
									className={`relative flex items-center ${
										index % 2 === 0 ? "flex-row" : "flex-row-reverse"
									}`}
								>
									{/* Content */}
									<div className="w-1/2 px-6">
										<Card
											className={`bg-gray-900/30   border-gray-800 ${
												index % 2 === 0 ? "text-right" : "text-left"
											}`}
										>
											<CardContent className="p-6">
												<span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm mb-2">
													{milestone.year}
												</span>
												<h3 className="text-xl font-semibold text-white mb-2">
													{milestone.title}
												</h3>
												<p className="text-gray-400">{milestone.description}</p>
											</CardContent>
										</Card>
									</div>

									{/* Center dot */}
									<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10"></div>

									{/* Empty space for the other side */}
									<div className="w-1/2"></div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection />
		</div>
	);
}
