import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: siteConfig.authors,
	creator: "Zachary Meyer",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: "@absencelul",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={cn("min-h-screen relative", inter.className)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="fixed inset-0 bg-[#f8f8f8] dark:bg-[#111111] z-0">
						<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100/40 to-transparent dark:from-purple-900/10 dark:to-transparent rounded-full blur-3xl" />
						<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/30 to-transparent dark:from-blue-900/10 dark:to-transparent rounded-full blur-3xl" />
					</div>
					<div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
						<Navbar navItems={siteConfig.nav} />
						<main>{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
