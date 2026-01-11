export type LandingConfig = Readonly<{
	heading: string;
	intro: string;
	bio: string;
	interests: readonly string[];
	interestsNote: string;
}>;

export const LANDING_CONFIG = {
	heading: "hello, my name is zachary meyer",
	intro:
		"I build tools that solve machine learning problems and spend my free time tinkering with systems to understand them.",
	bio: "When I'm not coding, I spend most of my free time playing video games or hanging with my wife and five animals.",
	interests: ["devops", "machine learning", "reverse engineering", "security"],
	interestsNote: "I enjoy the intersection of these fields.",
} as const satisfies LandingConfig;
