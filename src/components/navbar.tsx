"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

import { ThemeToggle } from "./theme-toggle";

export function Navbar({ items }: { items: readonly NavItem[] }) {
	const pathname = usePathname();

	return (
		<header className="py-6">
			<nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
				<Link href="/" className="text-base tracking-tight">
					zmeyer.dev
				</Link>
				<div className="flex items-center gap-6">
					{items.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"text-sm transition-colors hover:text-foreground",
								pathname === item.href
									? "text-foreground"
									: "text-muted-foreground",
							)}
						>
							{item.label}
						</Link>
					))}
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
