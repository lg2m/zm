"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
	{ href: "/work", label: "Work" },
	{ href: "/links", label: "Links" },
];

export function Navbar() {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname === path;
	};

	return (
		<nav className="flex items-center justify-between py-8">
			<Link href="/" className="text-base tracking-tight">
				zmeyer.dev
			</Link>

			<div className="flex items-center gap-8">
				{NAV_ITEMS.map(({ href, label }) => (
					<NavLink key={href} href={href} active={isActive(href)}>
						{label}
					</NavLink>
				))}
				<ThemeToggle />
			</div>
		</nav>
	);
}

function NavLink({
	href,
	active,
	children,
}: { href: string; active: boolean; children: React.ReactNode }) {
	return (
		<Link href={href} className="relative text-sm group">
			<span
				className={cn(
					"group-hover:text-black dark:group-hover:text-white transition-colors",
					active
						? "text-black dark:text-white"
						: "text-gray-500 dark:text-gray-400",
				)}
			>
				{children}
			</span>
			{active && (
				<motion.span
					layoutId="underline"
					className="absolute left-0 top-full block h-[2px] w-full bg-black dark:bg-white"
				/>
			)}
		</Link>
	);
}
