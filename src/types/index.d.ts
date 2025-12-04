import { Icons } from "@/components/icons";

export interface LinkItem {
	title: string;
	href: string;
	icon: keyof typeof Icons;
	color: string;
}

interface AvatarItem {
	href: string;
	fallback: string;
	alt: string;
}

export interface SocialConfig {
	title: string;
	subtitle: string;
	avatar: AvatarItem;
	links: LinkItem[];
}

export interface NavItem {
	title: string;
	href: string;
	disabled?: boolean;
}

export interface Author {
	name: string;
	url: string;
}

export interface SiteConfig {
	name: string;
	description: string;
	keywords: string[];
	authors: Author[];
	url: string;
	nav: NavItem[];
}
