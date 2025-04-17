"use client";

import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="flex items-center justify-center min-h-[80vh]">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-xl"
			>
				<h1 className="text-3xl font-light mb-6 tracking-tight">
					Hello, my name is Zachary Meyer.
				</h1>
				<p className="text-sm leading-relaxed mb-6 text-gray-600 dark:text-gray-300 font-light">
					Tool builder, Tinkerer, and Video Game enjoyer. I am interested in
					many different things mostly related to DevOps, Data, and Reverse
					Engineering.
				</p>
			</motion.div>
		</div>
	);
}
