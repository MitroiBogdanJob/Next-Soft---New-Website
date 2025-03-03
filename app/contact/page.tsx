"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
	const { t, language } = useLanguage();
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			toast({
				title: "Message Sent",
				description: t("contact.form.success"),
				duration: 5000,
			});

			// Reset form
			const form = e.target as HTMLFormElement;
			form.reset();
		}, 1500);
	};

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="pt-32 pb-20 relative">
				<div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						className="max-w-4xl mx-auto text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							{t("contact.title")}
						</h1>
						<p className="text-xl text-gray-300">{t("contact.subtitle")}</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<Card className="bg-gray-900/20 backdrop-blur-sm border-gray-800">
								<CardContent className="p-8">
									<form onSubmit={handleSubmit} className="space-y-6">
										<div className="space-y-2">
											<Label htmlFor="name">{t("contact.form.name")}</Label>
											<Input
												id="name"
												required
												className="bg-gray-800/30 border-gray-700 focus:border-blue-500"
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="email">{t("contact.form.email")}</Label>
											<Input
												id="email"
												type="email"
												required
												className="bg-gray-800/30 border-gray-700 focus:border-blue-500"
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="phone">{t("contact.form.phone")}</Label>
											<Input
												id="phone"
												type="tel"
												className="bg-gray-800/30 border-gray-700 focus:border-blue-500"
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="message">
												{t("contact.form.message")}
											</Label>
											<Textarea
												id="message"
												required
												rows={5}
												className="bg-gray-800/30 border-gray-700 focus:border-blue-500"
											/>
										</div>

										<Button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
										>
											{isSubmitting ? (
												<span className="flex items-center gap-2">
													<svg
														className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
													>
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"
														></circle>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
														></path>
													</svg>
													Processing...
												</span>
											) : (
												<span className="flex items-center gap-2">
													<Send size={16} />
													{t("contact.form.submit")}
												</span>
											)}
										</Button>
									</form>
								</CardContent>
							</Card>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="space-y-8"
						>
							<div>
								<h2 className="text-2xl font-bold text-white mb-6">
									Contact Information
								</h2>
								<p className="text-gray-300 mb-8">
									Have questions or ready to start your project? Reach out to us
									using any of the methods below, and our team will get back to
									you promptly.
								</p>

								<div className="space-y-6">
									<div className="flex items-start gap-4">
										<div className="bg-blue-900/20 p-3 rounded-lg">
											<Mail className="h-6 w-6 text-blue-400" />
										</div>
										<div>
											<h3 className="text-lg font-medium text-white">
												Email Us
											</h3>
											<p className="text-gray-400">nextsoftsrl@outlook.com</p>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<div className="bg-blue-900/20 p-3 rounded-lg">
											<Phone className="h-6 w-6 text-blue-400" />
										</div>
										<div>
											<h3 className="text-lg font-medium text-white">
												Call Us
											</h3>
											<p className="text-gray-400">0758498244</p>
										</div>
									</div>

									<div className="flex items-start gap-4">
										<div className="bg-blue-900/20 p-3 rounded-lg">
											<MapPin className="h-6 w-6 text-blue-400" />
										</div>
										<div>
											<h3 className="text-lg font-medium text-white">
												Visit Us
											</h3>
											<p className="text-gray-400">
												Next Soft Srl
												<br />
												Strada Posada 46
												<br />
												Ramnicu Valcea, Romania
											</p>
											<a
												href="https://maps.app.goo.gl/2SJwQyVF93NKNTeL9"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 transition-colors"
											>
												<ExternalLink size={16} />
												<span>Open in Google Maps</span>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h2 className="text-2xl font-bold text-white mb-6">
									Working Hours
								</h2>
								<div className="space-y-2">
									<div className="flex justify-between">
										<span className="text-gray-300">Monday - Friday:</span>
										<span className="text-gray-400">09:00 AM - 06:00 PM</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-300">Saturday - Sunday:</span>
										<span className="text-gray-400">Closed</span>
									</div>
								</div>
							</div>

							{/* Location Button */}
							<div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
								<h3 className="text-xl font-bold text-white mb-4">
									Our Location
								</h3>
								<p className="text-gray-300 mb-6">
									Find us in Râmnicu Vâlcea, on Strada Posada, Nr. 46.
								</p>
								<a
									href="https://maps.app.goo.gl/2SJwQyVF93NKNTeL9"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-colors"
								>
									<MapPin size={20} />
									<span>Open in Google Maps</span>
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
