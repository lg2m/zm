"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Avoid hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<motion.button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="p-1 rounded-full focus:outline-none"
			aria-label="Toggle theme"
			whileTap={{ scale: 0.9 }}
			whileHover={{ scale: 1.1 }}
		>
			{theme === "dark" ? (
				<Sun className="h-4 w-4" />
			) : (
				<Moon className="h-4 w-4" />
			)}
		</motion.button>
	);
}
