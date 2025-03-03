"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface MobileMenuContextProps {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (open: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextProps | undefined>(
	undefined,
);

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<MobileMenuContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
			{children}
		</MobileMenuContext.Provider>
	);
};

export const useMobileMenu = () => {
	const context = useContext(MobileMenuContext);
	if (!context) {
		throw new Error("useMobileMenu must be used within a MobileMenuProvider");
	}
	return context;
};
