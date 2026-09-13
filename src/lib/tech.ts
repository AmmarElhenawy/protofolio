// Single source of truth for technology names and their official casing.
// See specs/001-portfolio-audit-fixes/data-model.md § Tech.
// A typo like "kubarnetes" or "nodeJs" becomes a TypeScript error instead of
// a copy-paste mistake that survives review.

export const TECH = [
  "TypeScript",
  "JavaScript",
  "PHP",
  "Node.js",
  "NestJS",
  "Express.js",
  "Laravel",
  "Prisma",
  "MongoDB",
  "MySQL",
  "SQL Server",
  "Redis",
  "Kafka",
  "Docker",
  "Docker Compose",
  "Jenkins",
  "Portainer",
  "Nginx",
  "MariaDB",
  "Linux",
  "Socket.io",
  "Pusher",
  "JWT",
  "Sanctum",
  "Blade",
  "Power BI",
  "Excel",
  "Paymob",
  "Cloudinary",
] as const;

export type Tech = (typeof TECH)[number];
