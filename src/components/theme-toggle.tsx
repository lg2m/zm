"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Avoid hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = mounted && theme === "dark";

	return (
		<Button
			variant="ghost"
			size="icon"
			aria-label="Toggle theme"
			aria-pressed={isDark}
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={!mounted ? "pointer-events-none opacity-0" : "h-8 w-8"}
		>
			<Sun className="h-4 w-4 dark:rotate-0 dark:scale-100 transition-all -rotate-90 scale-0" />
			<Moon className="absolute h-4 w-4 dark:rotate-90 dark:scale-0 transition-all rotate-0 scale-100" />
		</Button>
	);
}
