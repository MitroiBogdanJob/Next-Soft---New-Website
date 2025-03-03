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
import { MobileMenuProvider } from "@/components/MobileMenuContext"; // Importăm MobileMenuProvider

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    preload: true,
    variable: "--font-inter",
});

export const metadata: Metadata = {
    // ... metadata ...
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ro" suppressHydrationWarning className={inter.className}>
            <head>
                {/* ... head ... */}
            </head>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    <MobileMenuProvider> {/* Învelim cu MobileMenuProvider */}
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
                    </MobileMenuProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}