export type Tech = string;

export type WorkPosition = Readonly<{
	title: string;
	period: string;
	description: string;
	technologies: readonly Tech[];
}>;

export type WorkExperience = Readonly<{
	company: string;
	positions: readonly WorkPosition[];
}>;

export type Project = Readonly<{
	name: string;
	description: string;
	href: `https://${string}`;
	technologies: readonly Tech[];
}>;

export type WorkConfig = Readonly<{
	experience: readonly WorkExperience[];
	projects: readonly Project[];
}>;

export const WORK_CONFIG = {
	experience: [
		{
			company: "Syntiant",
			positions: [
				{
					title: "Member of Technical Staff",
					period: "Sep 2021 - Present",
					description:
						"Owned org-wide CI/CD pipelines supporting embedded, ML, and infra teams; built and operated a GPU training platform on AWS + Kubernetes with Argo-based orchestration; maintained ML data ingestion and annotation systems; delivered observability with Prometheus/Grafana; expanding the platform to unify audio, vision, and sensor datasets end-to-end.",
					technologies: [
						"AWS",
						"Kubernetes",
						"Terraform",
						"Helm",
						"Argo Workflows",
						"GitLab CI/CD",
						"Python",
						"CUDA",
						"TensorFlow",
						"Prometheus",
						"Grafana",
					],
				},
				{
					title: "Data Analyst",
					period: "Aug 2020 - Sep 2021",
					description:
						"Built internal tooling for audio dataset annotation and labeling workflows; partnered with ML to improve alignment, QA, and consistency; increased throughput and dataset readiness for training and evaluation.",
					technologies: ["Python", "FastAPI", "SQL", "TypeScript", "React"],
				},
				{
					title: "Software Engineering Intern",
					period: "Dec 2019 - Aug 2020",
					description:
						"Annotated and prepared audio datasets; assisted with labeling operations and data handoff; contributed features and automation to early internal audio processing tools.",
					technologies: ["Python", "Flask", "SQL", "JavaScript"],
				},
			],
		},
		{
			company: "PhiSight",
			positions: [
				{
					title: "Full-Stack Developer (contract)",
					period: "Feb 2024 - Mar 2024",
					description:
						"Designed and shipped a modern, responsive marketing landing page for an early-stage product, translating lightweight direction into a polished UI with reusable components and clean styling.",
					technologies: ["TypeScript", "React", "Tailwind CSS"],
				},
			],
		},
	],
	projects: [
		{
			name: "tools",
			description:
				"A collection of small, practical utilities I build and use daily. Focused on fast UX, clean interface, and client-side ops.",
			href: "https://tools.zmeyer.dev",
			technologies: ["TypeScript", "React", "Bun"],
		},
		{
			name: "athena",
			description:
				"A terminal-based text editor inspired by Vim and Helix, built around an LSP-first architecture with a focus on speed and minimalism.",
			href: "https://github.com/lg2m/athena",
			technologies: ["Go"],
		},
	],
} as const satisfies WorkConfig;
