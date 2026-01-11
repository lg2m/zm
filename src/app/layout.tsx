import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/navbar";
import { SITE_CONFIG } from "@/config/site";

import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

void geist;
void geistMono;

export const metadata: Metadata = {
	metadataBase: new URL(SITE_CONFIG.url),
	title: {
		default: SITE_CONFIG.name,
		template: `%s | ${SITE_CONFIG.name}`,
	},
	description: SITE_CONFIG.description,
	keywords: [...SITE_CONFIG.keywords],
	authors: [...SITE_CONFIG.authors],
	creator: SITE_CONFIG.authors[0]?.name,
	alternates: {
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_CONFIG.url,
		title: SITE_CONFIG.name,
		description: SITE_CONFIG.description,
		siteName: SITE_CONFIG.name,
		// images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE_CONFIG.name }],
	},
	twitter: {
		card: "summary",
		title: SITE_CONFIG.name,
		description: SITE_CONFIG.description,
		creator: "@absencelul",
		// images: ["/og.png"]
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
			<body className="font-sans antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="min-h-screen">
						<Navbar items={SITE_CONFIG.navigation} />
						<main className="max-w-3xl mx-auto px-6 py-12">{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
