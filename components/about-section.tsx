"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AboutSection() {
	const { t, language } = useLanguage();
	const [imageLoaded, setImageLoaded] = useState(false);

	const values = [
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
			name: t("about.values.collaboration"),
			description:
				language === "ro"
					? "Credem în parteneriate colaborative cu clienții noștri."
					: "We believe in collaborative partnerships with our clients.",
		},
		{
			name: t("about.values.client-focus"),
			description:
				language === "ro"
					? "Prioritizăm nevoile și succesul clienților noștri mai presus de toate."
					: "We prioritize our clients' needs and success above all else.",
		},
	];

	return (
		<section className="py-20 relative">
			{/* Background overlay for better text readability */}
			<div className="absolute inset-0 bg-black/30   z-0"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							{t("about.title")}
						</h2>
						<p className="text-xl text-blue-400 mb-6">{t("about.subtitle")}</p>
						<p className="text-gray-300 mb-6">{t("about.description")}</p>
						<p className="text-gray-300 mb-8">{t("about.mission")}</p>
						<Button
							asChild
							className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
						>
							<Link
								href="/about"
								className="flex items-center gap-2"
								prefetch={false}
							>
								<span>
									{language === "ro"
										? "Află mai multe despre noi"
										: "Learn more about us"}
								</span>
								<ArrowRight size={16} />
							</Link>
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: false }}
						className="relative"
					>
						<div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-600/20 blur-3xl"></div>
						<div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl"></div>

						<div className="bg-gray-900/30   border border-gray-800 rounded-lg p-8 relative">
							<h3 className="text-xl font-semibold text-white mb-6">
								{t("about.values.title")}
							</h3>
							<div className="space-y-4">
								{values.map((value, index) => (
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
	);
}
