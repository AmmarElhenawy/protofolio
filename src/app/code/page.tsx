import AppShell from "@/components/layout/AppShell";

const modules = [
  {
    name: "AUTH_MODULE",
    language: "TypeScript",
    project: "Social App",
    desc: "JWT-based authentication with bcrypt password hashing. Employee login stores token in array for multi-device support, logout pops token by index.",
    color: "border-[#ff8d8d]",
    langColor: "text-[#ff8d8d] bg-[#ff8d8d]/10",
    projectColor: "text-[#ff8d8d]",
    code: `// EmployeeController — login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const employee = await Employee
      .findOne({ email });
    if (!employee)
      return next("Employee not found");

    const validPass = await bcrypt.compare(
      password,
      employee.password
    );
    if (!validPass)
      return next("Incorrect password");

    const token = jwt.sign(
      JSON.stringify(employee),
      process.env.JWT_SECRET
    );

    employee.tokens.push({ token });
    await employee.save();

    res.json(successResponse({ token, employee }));
  } catch (err) { next(err); }
};

// logout — remove token by index
employee.tokens.pop(
  employee.tokens.indexOf(req.token)
);
await employee.save();`,
  },
  {
    name: "COMPOSE_STACK",
    language: "YAML",
    project: "DEPI — Docker Tasks",
    desc: "Multi-container Docker Compose stack: Flask app connected to Redis with a named volume for data persistence across container restarts.",
    color: "border-[#feca5d]",
    langColor: "text-[#feca5d] bg-[#feca5d]/10",
    projectColor: "text-[#feca5d]",
    code: `version: "3.9"

services:
  web:
    image: flask-app
    ports:
      - "5000:5000"
    volumes:
      - .:/app
    depends_on:
      - redis

  redis:
    image: redis
    volumes:
      - redis_data:/data

volumes:
  redis_data:`,
  },
  {
    name: "CICD_PIPELINE",
    language: "Groovy",
    project: "DEPI — Jenkins",
    desc: "End-to-end CI/CD pipeline: clones repo, builds Docker image from Dockerfile, pushes to DockerHub registry using stored credentials, then deploys container.",
    color: "border-[#a9ffdf]",
    langColor: "text-[#a9ffdf] bg-[#a9ffdf]/10",
    projectColor: "text-[#a9ffdf]",
    code: `pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git branch: 'main',
          url: 'https://github.com/repo'
      }
    }

    stage('Build Image') {
      steps {
        sh 'docker build -t myapp .'
      }
    }

    stage('Push to DockerHub') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'USER',
          passwordVariable: 'PASS'
        )]) {
          sh 'docker login -u $USER -p $PASS'
          sh 'docker push myapp:latest'
        }
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker run -d -p 80:80 myapp'
      }
    }
  }
}`,
  },
];

export default function CodePage() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-8 max-w-7xl w-full mx-auto flex-1">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 bg-[#ff8d8d] animate-pulse" />
            <span className="font-headline text-xs text-[#ff8d8d] uppercase tracking-[0.3em]">
              Source_Archive
            </span>
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-black text-on-surface tracking-tighter uppercase mb-2">
            Code_Modules
          </h2>
          <p className="font-body text-on-surface-variant max-w-2xl leading-relaxed">
            Real code snippets from personal and training projects.
          </p>
        </div>

        {/* Code Modules */}
        <div className="space-y-8">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className={`bg-surface-container-high border-l-2 ${mod.color} overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Meta */}
                <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-2 py-0.5 text-[10px] font-label uppercase tracking-widest border ${mod.langColor}`}
                    >
                      {mod.language}
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-1">
                    {mod.name}
                  </h3>
                  <p className={`text-[10px] font-label uppercase tracking-widest mb-4 ${mod.projectColor}`}>
                    {mod.project}
                  </p>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-auto">
                    {mod.desc}
                  </p>
                </div>

                {/* Code */}
                <div className="lg:col-span-8 bg-[#0c0e10] p-4 sm:p-8 border-l border-outline-variant/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-[10px] font-label text-slate-600 uppercase tracking-widest">
                      {mod.name.toLowerCase()}.module
                    </span>
                  </div>
                  <pre className="font-mono text-[12px] text-slate-300 leading-relaxed overflow-x-auto">
                    <code>{mod.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}