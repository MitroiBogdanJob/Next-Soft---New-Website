"use client";

import { useLanguage } from "@/components/language-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export default function TestimonialsSection() {
	const { t, language } = useLanguage();
	const [activeIndex, setActiveIndex] = useState(0);

	const testimonials = [
		{
			id: "testimonial1",
			quote:
				language === "ro"
					? "NextSoft a transformat afacerea noastră cu soluțiile lor software excepționale. Expertiza și dedicarea echipei lor pentru calitate este de neegalat în industrie."
					: "NextSoft transformed our business with their exceptional software solutions. Their team's expertise and dedication to quality is unmatched in the industry.",
			author: "Alexandra Johnson",
			position:
				language === "ro" ? "CEO, TechVision Inc." : "CEO, TechVision Inc.",
			initials: "AJ",
		},
		{
			id: "testimonial2",
			quote:
				language === "ro"
					? "Colaborarea cu NextSoft pentru transformarea noastră digitală a fost cea mai bună decizie pe care am luat-o. Abordarea lor strategică și excelența tehnică au livrat rezultate peste așteptările noastre."
					: "Working with NextSoft on our digital transformation was the best decision we made. Their strategic approach and technical excellence delivered results beyond our expectations.",
			author: "Michael Chen",
			position: language === "ro" ? "CTO, GlobalTech" : "CTO, GlobalTech",
			initials: "MC",
		},
		{
			id: "testimonial3",
			quote:
				language === "ro"
					? "Campania de marketing digital concepută de NextSoft ne-a crescut ratele de conversie cu 200%. Abordarea lor bazată pe date și strategiile creative îi diferențiază de alte agenții."
					: "The digital marketing campaign designed by NextSoft increased our conversion rates by 200%. Their data-driven approach and creative strategies set them apart from other agencies.",
			author: "Sarah Williams",
			position:
				language === "ro"
					? "Director Marketing, Innovate Solutions"
					: "Marketing Director, Innovate Solutions",
			initials: "SW",
		},
		{
			id: "testimonial4",
			quote:
				language === "ro"
					? "Serviciile de migrare în cloud ale NextSoft au fost impecabile. Au gestionat tranziția complexă cu perturbări minime și au oferit suport excelent pe tot parcursul procesului."
					: "NextSoft's cloud migration services were flawless. They handled the complex transition with minimal disruption and provided excellent support throughout the process.",
			author: "David Rodriguez",
			position:
				language === "ro"
					? "Manager IT, Enterprise Systems"
					: "IT Manager, Enterprise Systems",
			initials: "DR",
		},
	];

	const nextTestimonial = useCallback(() => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	}, [testimonials.length]);

	useEffect(() => {
		const interval = setInterval(nextTestimonial, 6000);
		return () => clearInterval(interval);
	}, [nextTestimonial]);

	return (
		<section className="py-20 bg-black/80 relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						{t("testimonials.title")}
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						{t("testimonials.subtitle")}
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="relative h-[400px] md:h-[300px]">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.id}
								className="absolute w-full"
								initial={{ opacity: 0, x: 100 }}
								animate={{
									opacity: index === activeIndex ? 1 : 0,
									x: index === activeIndex ? 0 : 100,
									zIndex: index === activeIndex ? 10 : 0,
								}}
								transition={{ duration: 0.5 }}
							>
								<Card className="bg-gray-900/50 border-gray-800   overflow-hidden">
									<CardContent className="p-8">
										<Quote className="h-10 w-10 text-blue-500 mb-6 opacity-50" />
										<p className="text-xl text-gray-200 mb-8 italic">
											"{testimonial.quote}"
										</p>
										<div className="flex items-center">
											<Avatar className="h-12 w-12 mr-4 border-2 border-blue-500 bg-blue-900/50">
												<AvatarFallback className="bg-blue-900/50 text-white">
													{testimonial.initials}
												</AvatarFallback>
											</Avatar>
											<div>
												<h4 className="text-lg font-semibold text-white">
													{testimonial.author}
												</h4>
												<p className="text-gray-400">{testimonial.position}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					<div className="flex justify-center mt-8 space-x-2">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`h-2 rounded-full transition-all duration-300 ${
									index === activeIndex ? "w-8 bg-blue-500" : "w-2 bg-gray-600"
								}`}
								aria-label={`Go to testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
