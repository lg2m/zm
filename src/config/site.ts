import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	name: "zmeyer.dev",
	description: "My personal website",
	keywords: ["Portfolio", "Developer", "Software Engineer"],
	authors: [{ name: "Zachary Meyer", url: "https://zmeyer.dev" }],
	url: "https://zmeyer.dev",
	nav: [
		{
			title: "Work",
			href: "/work",
		},
		{
			title: "Links",
			href: "/links",
		},
	],
};
