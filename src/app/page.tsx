import { LANDING_CONFIG } from "@/config/landing";

export default function Home() {
	return (
		<div className="min-h-[calc(100vh-12rem)] flex flex-col justify-center">
			<div className="max-w-3xl space-y-8">
				<div className="space-y-4">
					<div className="space-y-2">
						<h1 className="text-3xl font-medium tracking-tight">
							{LANDING_CONFIG.heading}
						</h1>
					</div>
				</div>

				<div className="space-y-5 text-[15px] leading-relaxed">
					<p className="text-foreground">
						{LANDING_CONFIG.intro} {LANDING_CONFIG.bio}
					</p>

					<p className="text-muted-foreground">
						My interests span across{" "}
						{LANDING_CONFIG.interests.map((interest, i) => (
							<span key={interest}>
								<span className="text-foreground/80">{interest}</span>
								{i < LANDING_CONFIG.interests.length - 2 && ", "}
								{i === LANDING_CONFIG.interests.length - 2 && ", and "}
							</span>
						))}
						. {LANDING_CONFIG.interestsNote}
					</p>
				</div>
			</div>
		</div>
	);
}
