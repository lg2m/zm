import { Icons } from "@/components/icons";
import type { SocialConfig } from "@/types";
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

export const socialConfig: SocialConfig = {
	title: "Zachary Meyer",
	subtitle: "Software Engineer",
	avatar: {
		href: "https://rb254cnj15.ufs.sh/f/U46ULnfiD4EYm2r9K4XsvV2OKjMZ9Rayd63khpz7P4CWrcDI",
		fallback: "ZM",
		alt: "@lg2m",
	},
	links: [
		{
			title: "@lg2m",
			href: "https://github.com/lg2m",
			icon: "github",
			color: "bg-gray-800",
		},
		{
			title: "@itiszac",
			href: "https://linkedin.com/in/itiszac",
			icon: "linkedin",
			color: "bg-blue-600",
		},
		{
			title: "@absencelul",
			href: "https://x.com/absencelul",
			icon: "x",
			color: "bg-black",
		},
		{
			title: "Email me",
			href: "mailto:hi@zmeyer.me",
			icon: "mail",
			color: "bg-gray-600",
		},
		{
			title: "@absencelul",
			href: "https://twitch.tv/absencelul",
			icon: "twitch",
			color: "bg-purple-600",
		},
	],
};
