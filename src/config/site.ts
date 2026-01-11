import type { NavItem } from "@/types";

export type Author = Readonly<{
	name: string;
	url?: `https://${string}`;
}>;

export type SiteConfig = Readonly<{
	name: string;
	description: string;
	url: `https://${string}`;
	handles?: Readonly<{
		x?: `@${string}`;
		github?: `@${string}`;
		linkedin?: string;
	}>;
	keywords: readonly string[];
	authors: readonly Author[];
	navigation: readonly NavItem[];
}>;

export const SITE_CONFIG = {
	name: "zmeyer.dev",
	description:
		"Software engineer - DevOps/infra, ML tooling, and product engineering.",
	keywords: [
		"Zachary Meyer",
		"Software Engineer",
		"DevOps",
		"Infrastructure",
		"Kubernetes",
		"AWS",
		"Terraform",
		"ML Platform",
		"Portfolio",
		"MLOps",
	],
	authors: [{ name: "Zachary Meyer", url: "https://zmeyer.dev" }],
	url: "https://zmeyer.dev",
	handles: {
		x: "@absencelul",
		github: "@lg2m",
		linkedin: "itiszac",
	},
	navigation: [
		{ href: "/work", label: "Work" },
		{ href: "/links", label: "Links" },
	],
} as const satisfies SiteConfig;
