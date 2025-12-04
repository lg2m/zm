"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { socialConfig } from "@/config/socials";
import { Icons } from "@/components/icons";

export default function LinksPage() {
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
						<AvatarImage
							src={socialConfig.avatar.href}
							alt={socialConfig.avatar.alt}
						/>
						<AvatarFallback>{socialConfig.avatar.fallback}</AvatarFallback>
					</Avatar>
					<h1 className="text-xl font-normal mb-1">{socialConfig.title}</h1>
					<p className="text-sm text-gray-600 dark:text-gray-400">
						{socialConfig.subtitle}
					</p>
				</motion.div>

				<motion.div variants={container} className="space-y-3">
					{socialConfig.links.map((link) => {
						const Icon = Icons[link.icon];

						return (
							<motion.a
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="flex items-center p-3 rounded-xl bg-white dark:bg-gray-800/80 shadow-sm hover:shadow-md transition-all group"
							>
								<div className={`${link.color} rounded-md p-2 text-white mr-3`}>
									<Icon className="h-5 w-5" />
								</div>
								<span className="text-sm font-normal">{link.title}</span>
								<ChevronRight className="h-4 w-4 ml-auto text-gray-400 group-hover:translate-x-1 transition-transform" />
							</motion.a>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
}
