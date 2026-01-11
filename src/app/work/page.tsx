import { ExternalLink } from "lucide-react";
import { WORK_CONFIG } from "@/config/work";

export default function Page() {
	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-2xl font-normal mb-1">work</h1>
				<p className="text-[15px] text-muted-foreground">
					professional experience and projects
				</p>
			</div>

			<div className="space-y-10">
				{WORK_CONFIG.experience.map((job) => (
					<div key={job.company} className="space-y-4">
						<h2 className="text-[15px] font-medium">{job.company}</h2>

						<div className="space-y-6">
							{job.positions.map((position) => (
								<div
									key={`${job.company}-${position.title}`}
									className="space-y-3"
								>
									<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
										<span className="text-[14px] text-muted-foreground">
											{position.title}
										</span>
										<span className="text-[13px] text-muted-foreground/70 tabular-nums">
											{position.period}
										</span>
									</div>

									<p className="text-[14px] text-muted-foreground/80 leading-relaxed">
										{position.description}
									</p>

									{position.technologies && (
										<div className="flex flex-wrap gap-2 pt-1">
											{position.technologies.map((tech) => (
												<span
													key={tech}
													className="text-[13px] text-muted-foreground"
												>
													{tech}
												</span>
											))}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			<div className="space-y-6 pt-4 border-t border-border/40">
				<h2 className="text-[15px] font-medium">projects</h2>

				<div className="space-y-6">
					{WORK_CONFIG.projects.map((project) => (
						<div key={project.name} className="space-y-2">
							<a
								href={project.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-[14px] text-foreground hover:text-foreground/70 transition-colors inline-flex items-center gap-1.5"
							>
								{project.name}
								<ExternalLink className="w-3 h-3" />
							</a>

							<p className="text-[14px] text-muted-foreground/80 leading-relaxed">
								{project.description}
							</p>

							{project.technologies && (
								<div className="flex flex-wrap gap-2 pt-1">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="text-[13px] text-muted-foreground"
										>
											{tech}
										</span>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
