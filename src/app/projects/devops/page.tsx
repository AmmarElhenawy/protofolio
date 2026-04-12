import AppShell from "@/components/layout/AppShell";
import devops_IMG from "../../../components/depi.jpg";

const dockerTasks = [
  {
    id: "OPS-001",
    title: "Flask App + Docker Compose + Portainer",
    desc: "Full containerized Flask application managed visually via Portainer.",
    steps: [
      "Create Flask application",
      "Build Docker image via Dockerfile",
      "Multi-container Docker Compose with Redis + Named Volume",
      "Manage containers, images, volumes, networks via Portainer",
    ],
    tags: ["Flask", "Docker", "Redis", "Portainer"],
  },
  {
    id: "OPS-002",
    title: "Multi-Network Docker Architecture",
    desc: "Isolated networks with Redis as a bridge between frontend and database layers.",
    code: `front_back:
  - nginx_container
  - redis_container

back_database:
  - redis_container
  - mariadb_container

nginx ✗ mariadb (isolated)
redis ✓ bridge between layers`,
    tags: ["Docker", "Nginx", "Redis", "MariaDB"],
  },
  {
    id: "OPS-003",
    title: "Basic Container Management",
    desc: "Hands-on container lifecycle management including interactive Ubuntu containers.",
    steps: [
      "Run Ubuntu container in interactive mode",
      "Install curl inside the container",
      "Exit, restart, and inspect logs",
      "Remove container and image cleanly",
    ],
    tags: ["Docker", "Ubuntu", "CLI"],
  },
  {
    id: "OPS-004",
    title: "Web Server in Container",
    desc: "Nginx containerized with host volume for persistent log storage.",
    steps: [
      "Run container with Nginx",
      "Verify Nginx with curl",
      "Persist container logs to a host volume",
    ],
    tags: ["Nginx", "Docker", "Volumes"],
  },
  {
    id: "OPS-005",
    title: "Docker Networking",
    desc: "Custom bridge network connecting MySQL and phpMyAdmin containers.",
    steps: [
      "Create custom bridge network",
      "Run MySQL container on the network",
      "Run phpMyAdmin linked to MySQL on same network",
      "Access phpMyAdmin via browser",
    ],
    tags: ["MySQL", "phpMyAdmin", "Bridge"],
  },
  {
    id: "OPS-006",
    title: "Docker Volume Persistence",
    desc: "Demonstrating data persistence across container restarts using named volumes with MariaDB.",
    steps: [
      "Pull MariaDB from DockerHub",
      "Create container without volume (ephemeral)",
      "Create container with named volume",
      "Stop, remove, re-run — data persists",
    ],
    tags: ["MariaDB", "Volumes", "Persistence"],
  },
];

const jenkinsTasks = [
  {
    id: "JNK-001",
    borderColor: "border-[#a9ffdf]",
    title: "Basic Jenkins Pipeline",
    desc: "CI pipeline for a Java/Maven project with three stages.",
    code: `Fetch Code → Build → Test

repo: hkhcoder/vprofile-project
build: Apache Maven
test:  Unit Tests (Maven)`,
    steps: [
      "Clones Git repository into Jenkins workspace",
      "Builds project with Apache Maven",
      "Runs unit tests on any available agent",
    ],
    tags: ["Jenkins", "Maven", "Java", "Git"],
  },
  {
    id: "JNK-002",
    borderColor: "border-[#feca5d]",
    title: "Full CI/CD Pipeline → DockerHub",
    desc: "End-to-end pipeline from source to deployed container.",
    code: `Clone → Test → Build →
Docker Image → Push DockerHub →
Deploy Container`,
    steps: [
      "Build Docker image from Dockerfile in repo",
      "Store DockerHub credentials in Jenkins (Global)",
      "Push image to DockerHub registry",
      "Deploy container on target environment",
    ],
    tags: ["Jenkins", "Docker", "DockerHub", "CI/CD"],
  },
];

export default function DevOpsPage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto w-full flex-1">
        {/* Hero Header */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#feca5d]/20 text-[#feca5d] text-[10px] font-bold tracking-widest uppercase border border-[#feca5d]/20">
                  DevOps
                </span>
                <span className="text-slate-600 font-label text-xs tracking-tighter">
                  DOMAIN: OPS-TASKS
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tighter text-on-surface mb-4">
                DevOps{" "}
                <span className="text-[#feca5d]">Task Suite</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-body">
                A collection of Docker, Docker Compose, Portainer, and Jenkins
                pipeline tasks demonstrating containerization, orchestration,
                and CI/CD expertise.
              </p>
            </div>
          </div>

          {/* Hero banner */}
          <div className="relative h-64 w-full overflow-hidden bg-surface-container-low flex items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10" />

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${devops_IMG.src})`,
              }}
            />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex flex-wrap gap-6 sm:gap-12">
              {[
                { label: "Containers", value: "Docker / Compose", color: "text-[#feca5d]" },
                { label: "Orchestration", value: "Portainer", color: "text-[#7dc8ff]" },
                { label: "CI/CD", value: "Jenkins Pipelines", color: "text-[#a9ffdf]" },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <p className={`text-[10px] font-label ${color} uppercase tracking-widest mb-1`}>
                    {label}
                  </p>
                  <p className="text-xl font-headline font-bold text-on-surface tracking-tight">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Docker Tasks Grid */}
        <section className="mb-16">
          <h3 className="text-xs font-label text-slate-500 uppercase tracking-[0.3em] mb-8">
            Docker Tasks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dockerTasks.map((task) => (
              <div
                key={task.id}
                className="bg-surface-container-high p-6 hover:bg-[#1d2023] transition-all group"
              >
                <div className="font-mono text-[8px] uppercase tracking-[3px] text-on-surface-variant/50 mb-3">
                  Task {task.id}
                </div>
                <h4 className="font-headline font-bold text-base tracking-tight text-on-surface mb-2">
                  {task.title}
                </h4>
                <p className="text-xs text-slate-400 mb-4">{task.desc}</p>

                {task.code && (
                  <pre className="bg-surface-container-low p-3 text-[10px] font-mono text-slate-400 mb-4 leading-relaxed overflow-x-auto">
                    {task.code}
                  </pre>
                )}

                {task.steps && (
                  <div className="space-y-2 mb-4">
                    {task.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-[#feca5d] font-mono text-[10px] font-bold flex-shrink-0 mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[11px] text-slate-400">{step}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {task.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-low px-2 py-0.5 text-[10px] font-label text-slate-400 border border-outline-variant/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jenkins Section */}
        <section className="mb-16">
          <h3 className="text-xs font-label text-slate-500 uppercase tracking-[0.3em] mb-8">
            Jenkins Pipelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jenkinsTasks.map((task) => (
              <div
                key={task.id}
                className={`bg-surface-container-high p-6 hover:bg-[#1d2023] transition-all border-t-2 ${task.borderColor}`}
              >
                <div className="font-mono text-[8px] uppercase tracking-[3px] text-on-surface-variant/50 mb-3">
                  Task {task.id}
                </div>
                <h4 className="font-headline font-bold text-base tracking-tight text-on-surface mb-2">
                  {task.title}
                </h4>
                <p className="text-xs text-slate-400 mb-4">{task.desc}</p>

                <pre className="bg-surface-container-low p-3 text-[10px] font-mono text-slate-400 mb-4 leading-relaxed">
                  {task.code}
                </pre>

                <div className="space-y-2 mb-4">
                  {task.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#feca5d] font-mono text-[10px] font-bold flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] text-slate-400">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {task.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-low px-2 py-0.5 text-[10px] font-label text-slate-400 border border-outline-variant/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech overview footer */}
        <section className="bg-surface-container-low p-12 text-center border border-outline-variant/5 mb-12">
          <h3 className="text-2xl font-headline font-bold mb-8 tracking-tighter">
            Technologies Covered
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Docker", color: "text-[#7dc8ff]" },
              { label: "Docker Compose", color: "text-[#7dc8ff]" },
              { label: "Portainer", color: "text-[#feca5d]" },
              { label: "Jenkins", color: "text-[#a9ffdf]" },
              { label: "Nginx", color: "text-[#feca5d]" },
              { label: "MariaDB", color: "text-[#ff8d8d]" },
              { label: "Redis", color: "text-[#a9ffdf]" },
              { label: "CI/CD", color: "text-[#feca5d]" },
            ].map(({ label, color }) => (
              <span
                key={label}
                className={`px-4 py-2 bg-surface-container-high text-[11px] font-label font-bold uppercase tracking-widest border border-outline-variant/10 ${color}`}
              >
                {label}
              </span>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}