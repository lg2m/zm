import { ArrowUpRight } from "lucide-react";

import { Icons } from "@/components/icons";
import { LINKS_CONFIG } from "@/config/links";

export default function LinksPage() {
	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-2xl font-normal mb-1">links</h1>
				<p className="text-[15px] text-muted-foreground">
					find me around the internet
				</p>
			</div>

			<div className="space-y-1">
				{LINKS_CONFIG.map((link) => {
					const Icon = Icons[link.icon];
					return (
						<a
							key={link.href}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-between py-3 px-2 -mx-2 rounded hover:bg-accent/50 transition-colors group"
						>
							<div className="flex items-center">
								<Icon className="h-5 w-5 mr-2 text-muted-foreground group-hover:text-foreground transition-colors" />
								<span className="text-[15px] font-normal">{link.name}</span>
								<span className="text-[15px] text-muted-foreground ml-2">
									- {link.description}
								</span>
							</div>
							<ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
						</a>
					);
				})}
			</div>
		</div>
	);
}
