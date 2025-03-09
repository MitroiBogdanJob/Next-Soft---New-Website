import ParticlesBackground from "@/components/particles-background";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"NextSoft - Dezvoltare Software și Marketing Digital în Râmnicu Vâlcea",
	description:
		"NextSoft oferă servicii premium de dezvoltare software, aplicații web, aplicații mobile și marketing digital în Râmnicu Vâlcea. Soluții personalizate pentru afaceri care doresc excelență digitală.",
	keywords:
		"software Valcea, dezvoltare software Ramnicu Valcea, site web Valcea, marketing digital Valcea, NextSoft, next soft, nextsoft, dezvoltare aplicații Valcea, IT Ramnicu Valcea, servicii web Valcea",
};

export default function Home() {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<StatsSection />
			<TestimonialsSection />
			<CTASection />
		</>
	);
}
