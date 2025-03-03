"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
	const { t, language } = useLanguage();

	return (
		<section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30   relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					className="max-w-4xl mx-auto text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						{t("cta.title")}
					</h2>
					<p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
						{t("cta.description")}
					</p>
					<Button
						asChild
						size="lg"
						className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
					>
						<Link
							href="/contact"
							className="flex items-center gap-2"
							prefetch={false}
						>
							<span>{t("cta.button")}</span>
							<ArrowRight size={20} />
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
