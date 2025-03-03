import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/language-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import InteractiveParticles from "@/components/interactive-particles";
import Script from "next/script";

// Optimize font loading
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title:
		"NextSoft - Premium Software Development & Digital Marketing in Ramnicu Valcea",
	description:
		"NextSoft oferă servicii premium de dezvoltare software și marketing digital în Ramnicu Valcea. Soluții personalizate pentru afaceri care doresc excelență digitală.",
	keywords:
		"software Valcea, dezvoltare software Ramnicu Valcea, site web Valcea, marketing digital Valcea, NextSoft, next soft, nextsoft, dezvoltare aplicații Valcea, IT Ramnicu Valcea, servicii web Valcea",
	authors: [{ name: "NextSoft" }],
	creator: "NextSoft",
	publisher: "NextSoft",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title:
			"NextSoft - Premium Software Development & Digital Marketing in Ramnicu Valcea",
		description:
			"NextSoft oferă servicii premium de dezvoltare software și marketing digital în Ramnicu Valcea. Soluții personalizate pentru afaceri care doresc excelență digitală.",
		url: "https://nextsoft.ro",
		siteName: "NextSoft",
		locale: "ro_RO",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ro" suppressHydrationWarning className={inter.className}>
			<head>
				<meta name="geo.region" content="RO-VL" />
				<meta name="geo.placename" content="Ramnicu Valcea" />
				<meta name="geo.position" content="45.099;24.369" />
				<meta name="ICBM" content="45.099, 24.369" />
				{/* Load particles.js with high priority but defer execution */}
				<Script
					id="particles-js-script"
					src="/js/particles.min.js"
					strategy="beforeInteractive"
				/>
				{/* Preconnect to external domains */}
				<link rel="preconnect" href="https://images.unsplash.com" />
				<link rel="dns-prefetch" href="https://images.unsplash.com" />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<LanguageProvider>
						<div id="particles-js" className="fixed inset-0 z-0"></div>
						<InteractiveParticles />
						<div className="relative min-h-screen z-10">
							<Header />
							<main>{children}</main>
							<Footer />
						</div>
						<Toaster />
					</LanguageProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
