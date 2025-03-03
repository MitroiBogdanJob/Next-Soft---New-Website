"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, ChevronRight } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMobileMenu } from "@/components/MobileMenuContext"; // Importăm useMobileMenu

export default function Header() {
	const { language, setLanguage, t } = useLanguage();
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
	const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu(); // Utilizăm contextul

	// Optimize scroll handler with throttling
	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					setIsScrolled(window.scrollY > 10);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleLanguage = useCallback(() => {
		setLanguage(language === "en" ? "ro" : "en");
	}, [language, setLanguage]);

	const navItems = [
		{ name: t("nav.home"), href: "/" },
		{
			name: t("nav.services"),
			href: "/services",
			dropdown: [
				{ name: t("services.website.title"), href: "/services/website" },
				{ name: t("services.ecommerce.title"), href: "/services/ecommerce" },
				{
					name: t("services.webapps.title"),
					href: "/services/web-applications",
				},
				{ name: t("services.apis.title"), href: "/services/apis" },
				{ name: t("services.seo.title"), href: "/services/seo" },
				{
					name: t("services.desktop.title"),
					href: "/services/desktop-applications",
				},
				{ name: t("services.database.title"), href: "/services/databases" },
				{ name: t("services.branding.title"), href: "/services/branding" },
				{
					name: t("services.graphics.title"),
					href: "/services/graphic-design",
				},
				{ name: t("services.video.title"), href: "/services/video-editing" },
			],
		},
		{ name: t("nav.about"), href: "/about" },
		{ name: t("nav.contact"), href: "/contact" },
	];

	return (
		<header
			className={cn(
				"fixed top-0 w-full z-50 transition-all duration-300",
				isScrolled
					? "bg-black/30 backdrop-blur-md shadow-lg"
					: "bg-transparent",
			)}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<div className="relative h-12 w-12">
							<Image
								src="/images/logo.png"
								alt="NextSoft Logo"
								width={58}
								height={58}
								priority
								className="object-contain"
							/>
						</div>
						<span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
							NextSoft
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item) =>
							item.dropdown ? (
								<DropdownMenu key={item.name}>
									<DropdownMenuTrigger asChild>
										<button className="flex items-center space-x-1 text-sm font-medium text-gray-200 hover:text-white transition-colors">
											<span>{item.name}</span>
											<ChevronDown size={16} />
										</button>
									</DropdownMenuTrigger>
									<DropdownMenuContent
										align="end"
										className="bg-black/40 backdrop-blur-md border-gray-800"
									>
										{item.dropdown.map((subItem) => (
											<DropdownMenuItem key={subItem.name} asChild>
												<Link
													href={subItem.href}
													className="cursor-pointer hover:bg-gray-800 focus:bg-gray-800"
													prefetch={false}
												>
													{subItem.name}
												</Link>
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							) : (
								<Link
									key={item.name}
									href={item.href}
									className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
									prefetch={false}
								>
									{item.name}
								</Link>
							),
						)}
					</nav>

					{/* Language and CTA */}
					<div className="hidden md:flex items-center space-x-4">
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleLanguage}
							className="flex items-center space-x-1 text-gray-200 hover:text-white"
						>
							<Globe size={16} />
							<span>{t("language.switch")}</span>
						</Button>

						<Button
							asChild
							className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
						>
							<Link href="/contact" prefetch={false}>
								{t("hero.cta")}
							</Link>
						</Button>
					</div>

					{/* Mobile menu button */}
					<button
						className="md:hidden text-gray-200 hover:text-white"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-black/60 backdrop-blur-md">
					<div className="container mx-auto px-4 py-4 space-y-4">
						{navItems.map((item) => (
							<div key={item.name}>
								{item.dropdown ? (
									<div className="space-y-2">
										<button
											className="flex items-center justify-between w-full font-medium text-gray-200 hover:text-white"
											onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
											aria-expanded={mobileServicesOpen}
										>
											<span>{item.name}</span>
											<ChevronRight
												size={16}
												className={`transition-transform duration-200 ${
													mobileServicesOpen ? "rotate-90" : ""
												}`}
											/>
										</button>

										{mobileServicesOpen && (
											<div className="pl-4 space-y-2 border-l border-gray-800 mt-2">
												{item.dropdown.map((subItem) => (
													<Link
														key={subItem.name}
														href={subItem.href}
														className="block text-sm text-gray-400 hover:text-white"
														onClick={() => setMobileMenuOpen(false)}
														prefetch={false}
													>
														{subItem.name}
													</Link>
												))}
											</div>
										)}
									</div>
								) : (
									<Link
										href={item.href}
										className="block font-medium text-gray-200 hover:text-white"
										onClick={() => setMobileMenuOpen(false)}
										prefetch={false}
									>
										{item.name}
									</Link>
								)}
							</div>
						))}

						<div className="pt-4 flex items-center justify-between border-t border-gray-800">
							<Button
								variant="ghost"
								size="sm"
								onClick={toggleLanguage}
								className="flex items-center space-x-1 text-gray-200 hover:text-white"
							>
								<Globe size={16} />
								<span>{t("language.switch")}</span>
							</Button>

							<Button
								asChild
								className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
								onClick={() => setMobileMenuOpen(false)}
							>
								<Link href="/contact" prefetch={false}>
									{t("hero.cta")}
								</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
