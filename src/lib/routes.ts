// Single source of truth for the site's public routes.
// See specs/001-portfolio-audit-fixes/data-model.md § Route and
// specs/001-portfolio-audit-fixes/contracts/routes.md.
//
// Referencing a route that isn't in this list (e.g. the old "/about" header
// mapping) is now a TypeScript error instead of a silent dead link.

export const ROUTES = [
  "/",
  "/projects",
  "/experience",
  "/code",
  "/projects/abg",
  "/projects/clinic",
  "/projects/dana",
  "/projects/devops",
  "/projects/e-commerce",
  "/projects/invoices",
  "/projects/kafka",
] as const;

export type Route = (typeof ROUTES)[number];

export type ProjectSlug =
  | "abg"
  | "clinic"
  | "dana"
  | "devops"
  | "e-commerce"
  | "invoices"
  | "kafka";

export function projectHref(slug: ProjectSlug): Route {
  return `/projects/${slug}` as Route;
}

// Route -> { title, h1 } per contracts/routes.md. Used by layout metadata,
// the header nav-title map, and scripts/audit.mjs so all three stay in sync.
export const ROUTE_META: Record<Route, { title: string; h1: string; navLabel: string }> = {
  "/": { title: "Ammar Elhenawy — Backend & DevOps Engineer", h1: "Hello, I'm Ammar", navLabel: "Home" },
  "/projects": { title: "Projects", h1: "Projects", navLabel: "Projects" },
  "/experience": { title: "Experience & Training", h1: "Experience & Training", navLabel: "Experience" },
  "/code": { title: "Code Samples", h1: "Code Samples", navLabel: "Code" },
  "/projects/abg": { title: "ABG Social App", h1: "ABG Social App", navLabel: "Project" },
  "/projects/clinic": { title: "Clinic & Patient System", h1: "Clinic & Patient System", navLabel: "Project" },
  "/projects/dana": { title: "DANA — Pediatric Health Platform", h1: "Project: DANA", navLabel: "Project" },
  "/projects/devops": { title: "DevOps Task Suite", h1: "DevOps Task Suite", navLabel: "Project" },
  "/projects/e-commerce": { title: "E-Commerce API", h1: "E-Commerce API Platform", navLabel: "Project" },
  "/projects/invoices": { title: "Invoice ERP System", h1: "Invoice ERP System", navLabel: "Project" },
  "/projects/kafka": { title: "Kafka Microservices", h1: "Kafka Microservices", navLabel: "Project" },
};
