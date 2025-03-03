"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ro";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>("ro");
	const [translations, setTranslations] = useState<
		Record<string, Record<string, string>>
	>({});

	useEffect(() => {
		// Load translations
		const loadTranslations = async () => {
			try {
				const translationsModule = await import("@/lib/translations");
				setTranslations(translationsModule.default);
			} catch (error) {
				console.error("Failed to load translations:", error);
			}
		};

		loadTranslations();

		// Check for stored language preference
		const storedLanguage = localStorage.getItem("language") as Language;
		if (
			storedLanguage &&
			(storedLanguage === "en" || storedLanguage === "ro")
		) {
			setLanguage(storedLanguage);
		} else {
			// Default to Romanian
			setLanguage("ro");
		}
	}, []);

	const changeLanguage = (lang: Language) => {
		setLanguage(lang);
		localStorage.setItem("language", lang);
	};

	const t = (key: string): string => {
		if (!translations[key]) {
			console.warn(`Translation key not found: ${key}`);
			return key;
		}
		return translations[key][language] || key;
	};

	return (
		<LanguageContext.Provider
			value={{ language, setLanguage: changeLanguage, t }}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
