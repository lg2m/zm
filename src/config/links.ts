export const LINK_ICONS = [
	"github",
	"gitlab",
	"linkedin",
	"x",
	"mail",
	"twitch",
] as const;
export type LinkIcon = (typeof LINK_ICONS)[number];

export type LinkItem = Readonly<{
	name: string;
	href:
		| `https://${string}`
		| `http://${string}`
		| `mailto:${string}`
		| `/${string}`;
	description: string;
	icon: LinkIcon;
}>;

export const LINKS_CONFIG = [
	{
		name: "@lg2m",
		href: "https://github.com/lg2m",
		description: "code or w.e",
		icon: "github",
	},
	{
		name: "@zmeyer",
		href: "https://gitlab.com/zmeyer",
		description: "more code things",
		icon: "gitlab",
	},
	{
		name: "@itiszac",
		href: "https://linkedin.com/in/itiszac",
		description: "professional wow",
		icon: "linkedin",
	},
	{
		name: "@absencelul",
		href: "https://x.com/absencelul",
		description: "very cool",
		icon: "x",
	},
	{
		name: "Email me",
		href: "mailto:hi@zmeyer.me",
		description: "get in touch",
		icon: "mail",
	},
	{
		name: "@absencelul",
		href: "https://twitch.tv/absencelul",
		description: "occassional streams (not really)",
		icon: "twitch",
	},
] as const satisfies readonly LinkItem[];
