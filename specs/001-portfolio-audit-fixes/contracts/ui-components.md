# Contract: Shared UI components

## `PageHeading` — `src/components/ui/page-heading.tsx`

```ts
type PageHeadingProps = {
  title: string;        // plain English → rendered as the page's ONLY <h1>
  tag?: string;         // stylised terminal string → small mono sub-label (aria-hidden)
  eyebrow?: string;     // short badge above the title, e.g. "Career", "Laravel API"
  accent?: "primary" | "secondary" | "tertiary" | "info"; // colour of tag/eyebrow
  intro?: string;       // lead paragraph under the heading
  actions?: React.ReactNode; // right-aligned buttons (repo / docs links)
};
```

Guarantees: exactly one `<h1>`; `tag` is decorative (`aria-hidden="true"`); text colour of `tag`/`eyebrow` meets 4.5:1 on `#0c0e10`.

## `Icon` — `src/components/ui/icon.tsx`

```ts
type IconProps = React.SVGProps<SVGSVGElement> & {
  name: IconName;       // see data-model.md
  size?: number;        // default 16
  label?: string;       // when set: renders <span className="sr-only">{label}</span> sibling and drops aria-hidden
};
```

Guarantees: `aria-hidden="true" focusable="false"` unless `label` given; no wrapper `<span className="material-symbols-outlined">`; `currentColor` fill.

## `Sidebar` — `src/components/layout/Sidebar.tsx`

```ts
type SidebarProps = { open: boolean; onClose: () => void };
```

Guarantees: `<aside id="site-nav" aria-label="Main navigation" inert={!open}>` on viewports below `lg` (never inert on `lg` and up); a close button (`aria-label="Close menu"`, `Icon name="x"`) visible only below `lg`; brand rendered as `<p>` (not `<h1>`) and positioned below the 64 px fixed header on mobile; no version/status widget.

## `TopNav` — `src/components/layout/TopNav.tsx`

```ts
type TopNavProps = { open: boolean; onToggle: () => void };
```

Guarantees: hamburger has `aria-label`, `aria-expanded={open}`, `aria-controls="site-nav"`; page label comes from the Routes contract; no "Active" badge; no `any` in props.

## `AppShell` — `src/components/layout/AppShell.tsx`

Guarantees: first focusable element is a skip link `href="#main"` (visually hidden until focused); `<main id="main">`; `Escape` closes the drawer; overlay click closes the drawer; `Footer` external links are `<a target="_blank" rel="noopener noreferrer">`; year is `new Date().getFullYear()`.

## Image slots (all pages)

Any image in a framed slot MUST be:

```tsx
<div className="relative {aspect-or-height}">
  <Image
    src={img}
    alt="describes the picture"
    fill
    sizes="{matching sizes}"
    className="object-cover"
    {...(aboveFold ? { loading: "eager", fetchPriority: "high" } : {})}
  />
</div>
```

No `unoptimized`, no `priority` (deprecated in Next 16), no inline `background-image: url(img.src)`.
