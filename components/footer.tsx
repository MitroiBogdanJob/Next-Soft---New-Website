"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	ArrowRight,
} from "lucide-react";
import Image from "next/image";
export default function Footer() {
	const { t, language } = useLanguage();
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black/90 border-t border-gray-800 backdrop-blur-md">
			<div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<Link
							href="/"
							className="flex items-center space-x-2"
							prefetch={false}
						>
							<div className="relative h-29 w-29">
								<Image
									src="/images/logo.png"
									alt="NextSoft Logo"
									width={60}
									height={60}
									className="object-contain"
									priority
								/>
							</div>
						</Link>
						<p className="text-gray-400 text-sm">
							{language === "ro"
								? "Oferim soluții software și servicii de marketing digital pentru a ajuta afacerile să prospere în era digitală."
								: "We provide world-class software solutions and digital marketing services to help businesses thrive in the digital era."}
						</p>
						<div className="flex space-x-4">
							<a
								href="https://www.facebook.com/profile.php?id=61572972595275"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="Facebook"
							></a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="Twitter"
							></a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="LinkedIn"
							></a>
							<a
								href="https://www.instagram.com/next.soft/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="Instagram"
							></a>
						</div>
					</div>

					{/* Services */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">
							{t("nav.services")}
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/services/website"
									className="text-gray-400 hover:text-white transition-colors text-sm"
									prefetch={false}
								>
									{t("services.website.title")}
								</Link>
							</li>
							<li>
								<Link
									href="/services/ecommerce"
									className="text-gray-400 hover:text-white transition-colors text-sm"
									prefetch={false}
								>
									{t("services.ecommerce.title")}
								</Link>
							</li>
							<li>
								<Link
									href="/services/web-applications"
									className="text-gray-400 hover:text-white transition-colors text-sm"
									prefetch={false}
								>
									{t("services.webapps.title")}
								</Link>
							</li>
							<li>
								<Link
									href="/services/apis"
									className="text-gray-400 hover:text-white transition-colors text-sm"
									prefetch={false}
								>
									{t("services.apis.title")}
								</Link>
							</li>
							<li>
								<Link
									href="/services/seo"
									className="text-gray-400 hover:text-white transition-colors text-sm"
									prefetch={false}
								>
									{t("services.seo.title")}
								</Link>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">
							{language === "ro" ? "Linkuri Rapide" : "Quick Links"}
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/about"
									className="text-gray-400 hover:text-white transition-colors text-sm"
									prefetch={false}
								>
									{t("nav.about")}
								</Link>
							</li>
							<li>
								<Link
									href="/privacy-policy"
									className="text-gray-400 hover:text-white transition-colors text-sm"
									prefetch={false}
								>
									{t("footer.privacy")}
								</Link>
							</li>
							<li>
								<Link
									href="/terms-of-service"
									className="text-gray-400 hover:text-white transition-colors text-sm"
									prefetch={false}
								>
									{t("footer.terms")}
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h3 className="text-lg font-semibold text-white">
							{t("footer.contact")}
						</h3>
						<ul className="space-y-3">
							<li className="flex items-start space-x-3">
								<MapPin size={18} className="text-gray-400 mt-0.5" />
								<a
									href="https://maps.app.goo.gl/F3zVycSctiBJaMdR9"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 text-sm hover:text-white transition-colors"
								>
									Strada Posada 46, Râmnicu Vâlcea, România
								</a>
							</li>
							<li className="flex items-center space-x-3">
								<Phone size={18} className="text-gray-400" />
								<span className="text-gray-400 text-sm">0758498244</span>
							</li>
							<li className="flex items-center space-x-3">
								<Mail size={18} className="text-gray-400" />
								<span className="text-gray-400 text-sm">
									nextsoftsrl@outlook.com
								</span>
							</li>
						</ul>
						<div className="space-y-2 mt-4">
							<h4 className="text-sm font-medium text-white">
								{language === "ro" ? "Program de Lucru:" : "Working Hours:"}
							</h4>
							<p className="text-gray-400 text-sm">
								{language === "ro"
									? "Luni - Vineri: 09:00 - 18:00"
									: "Monday - Friday: 09:00 AM - 06:00 PM"}
							</p>
							<p className="text-gray-400 text-sm">
								{language === "ro"
									? "Sâmbătă - Duminică: Închis"
									: "Saturday - Sunday: Closed"}
							</p>
						</div>
						<div className="flex space-x-4 mt-4">
							<a
								href="https://www.facebook.com/profile.php?id=61572972595275"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-blue-900/30 hover:bg-blue-800/50 p-2 rounded-lg transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="h-5 w-5 text-blue-400" />
							</a>
							<a
								href="https://www.instagram.com/next.soft/"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-purple-900/30 hover:bg-purple-800/50 p-2 rounded-lg transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="h-5 w-5 text-purple-400" />
							</a>
						</div>
						<Button
							asChild
							variant="outline"
							className="w-full border-gray-700 hover:bg-gray-800 hover:text-white"
						>
							<Link
								href="/contact"
								className="flex items-center justify-center space-x-2"
								prefetch={false}
							>
								<span>{t("footer.contact")}</span>
								<ArrowRight size={16} />
							</Link>
						</Button>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">
						&copy; {currentYear} NextSoft. {t("footer.rights")}
					</p>
					<div className="mt-4 md:mt-0 flex space-x-6">
						<Link
							href="/privacy-policy"
							className="text-gray-400 hover:text-white transition-colors text-sm"
							prefetch={false}
						>
							{t("footer.privacy")}
						</Link>
						<Link
							href="/terms-of-service"
							className="text-gray-400 hover:text-white transition-colors text-sm"
							prefetch={false}
						>
							{t("footer.terms")}
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
