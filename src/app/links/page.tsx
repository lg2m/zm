"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LinksPage() {
	const links = [
		{
			title: "GitHub",
			url: "https://github.com/lg2m",
			icon: <Github className="h-5 w-5" />,
			color: "bg-gray-800",
		},
		{
			title: "LinkedIn",
			url: "https://linkedin.com/in/itiszac",
			icon: <Linkedin className="h-5 w-5" />,
			color: "bg-blue-600",
		},
		{
			title: "Twitter",
			url: "https://x.com/absencelul",
			icon: <Twitter className="h-5 w-5" />,
			color: "bg-black",
		},
		{
			title: "Email me",
			url: "mailto:hi@zmeyer.me",
			icon: <Mail className="h-5 w-5" />,
			color: "bg-gray-600",
		},
	];

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.07,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 20 },
	};

	return (
		<div className="py-12 flex flex-col items-center">
			<motion.div
				initial="hidden"
				animate="show"
				variants={container}
				className="w-full max-w-md px-4 sm:px-0"
			>
				<motion.div variants={item} className="text-center mb-8">
					<Avatar className="mb-4 w-20 h-20 rounded-full mx-auto">
						<AvatarImage src="/test.png" alt="@lg2m" />
						<AvatarFallback>ZM</AvatarFallback>
					</Avatar>
					<h1 className="text-xl font-normal mb-1">Zachary Meyer</h1>
					<p className="text-sm text-gray-600 dark:text-gray-400">
						Software Engineer
					</p>
				</motion.div>

				<motion.div variants={container} className="space-y-3">
					{links.map((link) => (
						<motion.a
							key={link.title}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="flex items-center p-3 rounded-xl bg-white dark:bg-gray-800/80 shadow-sm hover:shadow-md transition-all group"
						>
							<div className={`${link.color} rounded-md p-2 text-white mr-3`}>
								{link.icon}
							</div>
							<span className="text-sm font-normal">{link.title}</span>
							<ChevronRight className="h-4 w-4 ml-auto text-gray-400 group-hover:translate-x-1 transition-transform" />
						</motion.a>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}
