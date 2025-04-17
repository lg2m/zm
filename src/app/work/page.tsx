"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
	const workHistory = [
		{
			name: "Syntiant Corp.",
			positions: [
				{
					role: "Member of Technical Staff",
					dates: "Sep 2021 - Present",
					description:
						"Built and maintained infrastructure for ML teams, including Kubernetes clusters, GitLab CI pipelines, and internal tools to accelerate model training.",
				},
				{
					role: "Data Analyst",
					dates: "Aug 2020 - Sep 2021",
					description:
						"Developed internal tools and systems for managing and preparing raw data for machine learning training, with a focus on improving quality and usability.",
				},
				{
					role: "Software Engineering Intern",
					dates: "Dec 2019 - Aug 2020",
					description:
						"Contributed to the development of a fullstack application for labeling audio data used in ML models.",
				},
			],
		},
		{
			name: "PhiSight Corp.",
			positions: [
				{
					role: "Fullstack Developer (freelance)",
					dates: "Feb 2024 - Mar 2024",
					description:
						"Developed a responsive frontend in React for marketing site as part of a short-term contract.",
				},
			],
		},
	];
	const projects = [
		{
			title: "athena",
			href: "https://github.com/lg2m/athena",
			description: "A terminal based text-editor similar to Vim and Helix.",
			tech: ["Go"],
		},
		{
			title: "tools",
			href: "https://tools.zmeyer.dev",
			description: "Various open-source tools I build and use daily.",
			tech: ["React", "Next.js", "Bun"],
		},
	];

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<div className="py-12">
			<motion.section
				className="mb-16"
				initial="hidden"
				animate="show"
				variants={container}
			>
				<motion.h1
					variants={item}
					className="text-2xl font-light mb-10 tracking-tight"
				>
					Work History
				</motion.h1>

				{workHistory.map((work) => (
					<motion.div variants={item} key={work.name} className="mb-12">
						<h2 className="text-base font-normal mb-6">{work.name}</h2>
						<div className="space-y-8 ml-0 sm:ml-4">
							{work.positions.map((position) => (
								<div key={position.role} className="group">
									<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
										<h3 className="text-base font-normal">{position.role}</h3>
										<span className="text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
											{position.dates}
										</span>
									</div>
									<p className="text-sm text-gray-600 dark:text-gray-300 font-light">
										{position.description}
									</p>
								</div>
							))}
						</div>
					</motion.div>
				))}
			</motion.section>

			<motion.section initial="hidden" animate="show" variants={container}>
				<motion.h1
					variants={item}
					className="text-2xl font-light mb-10 tracking-tight"
				>
					Projects
				</motion.h1>
				<motion.div variants={container} className="space-y-12">
					{projects.map((project) => (
						<motion.div key={project.title} variants={item} className="group">
							<h2 className="text-base font-normal mb-1">
								{project.href ? (
									<Link href={project.href}>{project.title}</Link>
								) : (
									<>{project.title}</>
								)}
							</h2>
							<p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-light">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="px-2 py-0.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-800/50 rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.section>
		</div>
	);
}
