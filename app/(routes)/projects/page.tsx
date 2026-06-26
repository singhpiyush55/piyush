export default function Projects() {

  const projects = [
    {
      title: "Applyn",
      duration: "Ongoing",
      description: "You paste a job description and the recruiter's email → the app generates a tailored application email using an LLM → sends it via Gmail API using the logged-in user's Google account.",
      tech: ["Copilot", "Next.js", "PostgreSQL"],
      live: null,
      github: "https://github.com/singhpiyush55/applyn",
    },    
    {
      title: "Tracker",
      duration: "May 2026",
      description: "All in one prductivity app for tracking your selected/traded stocks, manage SL and tragets, lets you journal about specific trade, track capital and pnl.",
      tech: ["Next.js", "PostgreSQL", "Claude", ],
      live: "https://pswingtt.vercel.app/login",
      github: "https://github.com/singhpiyush55/tracker",
    },
    {
      title: "QuantFlow",
      duration: "Feb 2026",
      description: "Engineered a full-stack AI stock recommendation platform that generates weekly swing-trade recommendations with using quantitative scoring, Python quant engine computing 15+ indicators and AI-driven analysis.",
      tech: ["Copilot", "Turborepo", "Next.js", "PostgreSQL"],
      live: null,
      github: "https://github.com/singhpiyush55/st-recomm",
    },
    {
      title: "Second-Brain",
      duration: "Feb 2026",
      description: "A personal knowledge management system, built to organize and retrieve information (any random chunk like, YT video, X post, reddit post, some article, etc.) efficiently.",
      tech: ["React", "Node", "Express", "MongoDB", "JWT"],
      live: "https://second-brain-knowledge-store.vercel.app/",
      github: "https://github.com/singhpiyush55/second-brain",
    },
    {
      title: "TRC-Wallet",
      duration: "Ongoing",
      description: "A wallet application to manage and track your \"Trade Coins\". A currency to trade on trading simulator.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "JWT+Cookies"],
      live: null,
      github: "https://github.com/singhpiyush55/trc-wallet",
    },
    {
      title: "Discuss",
      duration: "Jan 2026",
      description: "A web chat-room.",
      tech: ["React", "WebSockets"],
      live: null,
      github: "https://github.com/singhpiyush55/discuss",
    },
    {
      title: "TapIn",
      duration: "Dec 2025 – Jan 2026",
      description:
        "A full-stack web application integrated with a sophisticated IoT system, that records user attendance using RFID/NFC and stores it securely in a database with real-time API integration.",
      tech: ["React", "Node", "Express", "MongoDB", "JWT", "IoT"],
      live: "https://tap-in-nu.vercel.app/",
      github: "https://github.com/singhpiyush55/TapIn",
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Projects
      </h2>

      {projects.map((project) => (
        <details key={project.title} className="mb-4 group">
          <summary className="cursor-pointer text-white font-medium">
            {project.title} ({project.duration})
          </summary>

          <div className="mt-3 pl-4 border-l border-white/10 text-white/80 leading-relaxed space-y-3">
            
            <p>{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-xs
                    px-2
                    py-1
                    rounded-md
                    bg-white/5
                    text-white/60
                    border border-white/10
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="space-x-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="underline underline-offset-4 decoration-[rgb(255,230,3)] decoration-wavy"
                >
                  Live
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="underline underline-offset-4 decoration-[rgb(255,230,3)] decoration-wavy"
                >
                  GitHub
                </a>
              )}
            </div>

          </div>
        </details>
      ))}

    </div>
  );
}
