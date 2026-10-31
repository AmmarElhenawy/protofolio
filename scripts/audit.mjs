// Verification sweep for specs/001-portfolio-audit-fixes.
// Contract: specs/001-portfolio-audit-fixes/contracts/audit-script.md
// Run with: npm run audit:ui   (dev server must already be running on :3000,
// and a playwright-cli browser session must already be open — `playwright-cli open <url>`)
//
// playwright-cli run-code requires the file's entire content to be a single
// function expression (no import/export/require). Everything is therefore
// declared inside this one async arrow function.

async (page) => {
  const BASE = "http://localhost:3000";

  const ROUTES = [
    { path: "/", title: "Ammar Elhenawy — Backend & DevOps Engineer", h1: "Hello, I'm Ammar", suffixed: false },
    { path: "/projects", title: "Projects", h1: "Projects", suffixed: true },
    { path: "/experience", title: "Experience & Training", h1: "Experience & Training", suffixed: true },
    { path: "/code", title: "Code Samples", h1: "Code Samples", suffixed: true },
    { path: "/projects/abg", title: "ABG Social App", h1: "ABG Social App", suffixed: true },
    { path: "/projects/clinic", title: "Clinic & Patient System", h1: "Clinic & Patient System", suffixed: true },
    { path: "/projects/dana", title: "DANA — Pediatric Health Platform", h1: "Project: DANA", suffixed: true },
    { path: "/projects/devops", title: "DevOps Task Suite", h1: "DevOps Task Suite", suffixed: true },
    { path: "/projects/e-commerce", title: "E-Commerce API", h1: "E-Commerce API Platform", suffixed: true },
    { path: "/projects/invoices", title: "Invoice ERP System", h1: "Invoice ERP System", suffixed: true },
    { path: "/projects/kafka", title: "Kafka Microservices", h1: "Kafka Microservices", suffixed: true },
  ];

  const REDIRECT_CHECKS = [{ from: "/projects/clinc", to: "/projects/clinic" }];
  const NOT_FOUND_CHECKS = ["/about", "/definitely-missing"];

  const VIEWPORTS = [
    { name: "mobile", width: 390, height: 844 },
    { name: "desktop", width: 1440, height: 900 },
  ];
  const HERO_VIEWPORTS = [
    { name: "hero-1280", width: 1280, height: 800 },
    { name: "hero-1440", width: 1440, height: 900 },
    { name: "hero-1920", width: 1920, height: 1080 },
  ];

  const BANNED_STRINGS = [
    "kubarnetes", "nodeJs", "mongoDB", "paymob", "Analytic Service",
    " . ", "  b+", "Legacy_Support", "Priority_A1",
    "Uptime", "Active Sessions", "v2.4.0", "System Online", "Status: Online",
    "42ms", "sub-100ms", "Released: 2026", "Career Timeline",
  ];

  const IGNORED_CONSOLE_PATTERNS = [/React DevTools/i, /\[HMR\]/, /Fast Refresh/];

  const results = [];

  function fail(msg) {
    throw new Error("AUDIT FAIL: " + msg);
  }

  page.on("console", (msg) => {
    const text = msg.text();
    if (IGNORED_CONSOLE_PATTERNS.some((re) => re.test(text))) return;
    results.push({ route: "(console)", viewport: "n/a", status: "WARN: " + msg.type() + " " + text.slice(0, 120) });
  });

  async function checkRouteBasics(route, viewport) {
    const resp = await page.goto(BASE + route.path, { waitUntil: "networkidle" });
    const status = resp ? resp.status() : 0;
    if (status !== 200) fail(`${route.path} @ ${viewport.name}: expected 200, got ${status}`);

    const title = await page.title();
    const expectedTitle = route.suffixed ? `${route.title} · Ammar Elhenawy` : route.title;
    if (title !== expectedTitle) {
      fail(`${route.path} @ ${viewport.name}: title "${title}" !== expected "${expectedTitle}"`);
    }

    const h1s = await page.locator("h1").allTextContents();
    if (h1s.length !== 1) fail(`${route.path} @ ${viewport.name}: expected exactly 1 <h1>, found ${h1s.length} (${JSON.stringify(h1s)})`);
    const h1Text = h1s[0].trim();
    if (h1Text !== route.h1) fail(`${route.path} @ ${viewport.name}: <h1> is "${h1Text}" !== expected "${route.h1}"`);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    if (overflow) fail(`${route.path} @ ${viewport.name}: horizontal overflow detected`);

    const bodyText = await page.evaluate(() => document.body.innerText);
    for (const s of BANNED_STRINGS) {
      if (bodyText.includes(s)) fail(`${route.path} @ ${viewport.name}: banned string found: "${s}"`);
    }

    if (route.path === "/") {
      const skillsPct = await page.evaluate(() => {
        const section = document.querySelector("[data-section='skills']");
        return section ? section.innerText.includes("%") : false;
      });
      if (skillsPct) fail(`${route.path} @ ${viewport.name}: '%' found inside skills section`);
    }

    const min = viewport.width <= 480 ? 11 : 10;
    const tooSmall = await page.evaluate((minPx) => {
      const offenders = [];
      for (const el of document.querySelectorAll("body *")) {
        if (el.children.length > 0) continue;
        if (!el.textContent || !el.textContent.trim()) continue;
        const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs < minPx) offenders.push({ tag: el.tagName, text: el.textContent.trim().slice(0, 40), fs });
      }
      return offenders.slice(0, 5);
    }, min);
    if (tooSmall.length) fail(`${route.path} @ ${viewport.name}: text below ${min}px: ${JSON.stringify(tooSmall)}`);

    const truncated = await page.evaluate(() => {
      const offenders = [];
      for (const el of document.querySelectorAll("body *")) {
        const cs = getComputedStyle(el);
        if (cs.textOverflow === "ellipsis" && el.scrollWidth > el.clientWidth) {
          offenders.push(el.textContent.trim().slice(0, 40));
        }
      }
      return offenders;
    });
    if (truncated.length) fail(`${route.path} @ ${viewport.name}: truncated text found: ${JSON.stringify(truncated)}`);

    const imgHandles = await page.locator("img").all();
    for (const img of imgHandles) {
      await img.scrollIntoViewIfNeeded().catch(() => {});
    }
    await page.waitForTimeout(400);
    const brokenImgs = await page.evaluate(() =>
      [...document.images].filter((i) => !(i.complete && i.naturalWidth > 0)).map((i) => i.currentSrc || i.src)
    );
    if (brokenImgs.length) fail(`${route.path} @ ${viewport.name}: images failed to load: ${JSON.stringify(brokenImgs)}`);

    results.push({ route: route.path, viewport: viewport.name, status: "OK" });
  }

  async function checkHomeHero(viewport) {
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(300);

    const heroBoxes = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const rail = document.querySelector("a[aria-label*='GitHub' i], a[aria-label*='LinkedIn' i]");
      const a = h1 ? h1.getBoundingClientRect() : null;
      const b = rail ? rail.getBoundingClientRect() : null;
      return {
        a: a && { top: a.top, left: a.left, right: a.right, bottom: a.bottom },
        b: b && { top: b.top, left: b.left, right: b.right, bottom: b.bottom },
      };
    });
    if (heroBoxes.a && heroBoxes.b) {
      const disjoint =
        heroBoxes.a.right < heroBoxes.b.left ||
        heroBoxes.b.right < heroBoxes.a.left ||
        heroBoxes.a.bottom < heroBoxes.b.top ||
        heroBoxes.b.bottom < heroBoxes.a.top;
      if (!disjoint) fail(`hero @ ${viewport.name}: social rail overlaps <h1> bounding box`);
    }

    results.push({ route: "/ (hero)", viewport: viewport.name, status: "OK" });
  }

  async function checkHeadlineStable() {
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(8000);
    const { opacity, iteration } = await page.evaluate(() => {
      const el = [...document.querySelectorAll("h2,p")].find((e) => /BACKEND|DEVOPS/i.test(e.textContent || ""));
      if (!el) return { opacity: null, iteration: null };
      const cs = getComputedStyle(el);
      return { opacity: parseFloat(cs.opacity), iteration: cs.animationIterationCount };
    });
    if (opacity !== null && opacity < 0.99) fail(`headline opacity after 8s is ${opacity}, expected 1`);
    if (iteration === "infinite") fail("headline animation-iteration-count is still 'infinite'");
    results.push({ route: "/ (headline stability)", viewport: "n/a", status: "OK" });
  }

  async function checkReducedMotion() {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(200);
    const stillHidden = await page.evaluate(() => {
      const offenders = [];
      for (const el of document.querySelectorAll("[class*='opacity-0'][class*='animate-']")) {
        if (parseFloat(getComputedStyle(el).opacity) < 0.99) offenders.push(el.className);
      }
      return offenders;
    });
    if (stillHidden.length) fail(`prefers-reduced-motion: elements still hidden: ${JSON.stringify(stillHidden.slice(0, 5))}`);
    await page.emulateMedia({ reducedMotion: "no-preference" });
    results.push({ route: "/ (reduced motion)", viewport: "n/a", status: "OK" });
  }

  async function checkRedirectsAndNotFound() {
    for (const r of REDIRECT_CHECKS) {
      const resp = await page.goto(BASE + r.from, { waitUntil: "networkidle" });
      const finalUrl = page.url();
      if (!finalUrl.endsWith(r.to)) fail(`redirect ${r.from} -> expected to end with ${r.to}, got ${finalUrl}`);
      if (!resp || resp.status() !== 200) fail(`redirect ${r.from}: final status not 200`);
      results.push({ route: `${r.from} -> ${r.to}`, viewport: "n/a", status: "OK" });
    }
    for (const p of NOT_FOUND_CHECKS) {
      const resp = await page.goto(BASE + p, { waitUntil: "networkidle" });
      const status = resp ? resp.status() : 0;
      if (status !== 404) fail(`${p}: expected 404, got ${status}`);
      const h1 = await page.locator("h1").first().textContent().catch(() => null);
      if (!h1 || !/not found/i.test(h1)) fail(`${p}: 404 page missing branded <h1> (got "${h1}")`);
      const hasNav = await page.locator("aside, nav").count();
      if (hasNav === 0) fail(`${p}: 404 page has no navigation`);
      results.push({ route: p, viewport: "n/a", status: "OK (404 branded)" });
    }
  }

  async function checkMobileDrawer() {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE + "/projects", { waitUntil: "networkidle" });

    const closedState = await page.evaluate(() => {
      const aside = document.querySelector("#site-nav");
      const btn = document.querySelector("button[aria-controls='site-nav']");
      return { inert: aside ? aside.inert : null, ariaExpanded: btn ? btn.getAttribute("aria-expanded") : null };
    });
    if (closedState.inert !== true) fail(`mobile drawer: expected inert=true when closed, got ${closedState.inert}`);
    if (closedState.ariaExpanded !== "false") fail(`mobile drawer: expected aria-expanded=false when closed, got ${closedState.ariaExpanded}`);

    await page.locator("button[aria-controls='site-nav']").focus();
    await page.keyboard.press("Tab");
    const focusInsideAside = await page.evaluate(() => {
      const aside = document.querySelector("#site-nav");
      return aside ? aside.contains(document.activeElement) : false;
    });
    if (focusInsideAside) fail("mobile drawer: Tab from hamburger focused an element inside the closed drawer");

    await page.locator("button[aria-controls='site-nav']").click();
    await page.waitForTimeout(300);
    const openState = await page.evaluate(() => {
      const btn = document.querySelector("button[aria-controls='site-nav']");
      const brand = document.querySelector("#site-nav p");
      const rect = brand ? brand.getBoundingClientRect() : null;
      return {
        ariaExpanded: btn ? btn.getAttribute("aria-expanded") : null,
        brandVisible: rect ? rect.top >= 0 && rect.left >= 0 : false,
        brandText: brand ? brand.textContent.trim() : null,
      };
    });
    if (openState.ariaExpanded !== "true") fail(`mobile drawer: expected aria-expanded=true when open, got ${openState.ariaExpanded}`);
    if (!openState.brandVisible) fail("mobile drawer: brand not fully visible when open");
    if (!openState.brandText || !openState.brandText.includes("Ammar")) fail(`mobile drawer: brand text unexpected: "${openState.brandText}"`);

    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
    let stillOpen = await page.evaluate(() => document.querySelector("button[aria-controls='site-nav']").getAttribute("aria-expanded") === "true");
    if (stillOpen) fail("mobile drawer: Escape did not close the menu");

    await page.locator("button[aria-controls='site-nav']").click();
    await page.waitForTimeout(300);
    await page.mouse.click(370, 700);
    await page.waitForTimeout(300);
    stillOpen = await page.evaluate(() => document.querySelector("button[aria-controls='site-nav']").getAttribute("aria-expanded") === "true");
    if (stillOpen) fail("mobile drawer: overlay click did not close the menu");

    await page.locator("button[aria-controls='site-nav']").click();
    await page.waitForTimeout(300);
    const closeBtn = page.locator("#site-nav button[aria-label='Close menu']");
    if (await closeBtn.count()) {
      await closeBtn.click();
      await page.waitForTimeout(300);
      stillOpen = await page.evaluate(() => document.querySelector("button[aria-controls='site-nav']").getAttribute("aria-expanded") === "true");
      if (stillOpen) fail("mobile drawer: close button did not close the menu");
    } else {
      fail("mobile drawer: no close button found inside #site-nav");
    }

    results.push({ route: "/ (mobile drawer)", viewport: "mobile", status: "OK" });
  }

  async function checkSkipLink() {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.keyboard.press("Tab");
    const focused = await page.evaluate(() => {
      const el = document.activeElement;
      return { tag: el.tagName, text: el.textContent?.trim(), href: el.getAttribute("href") };
    });
    if (!(focused.href === "#main" || /skip/i.test(focused.text || ""))) {
      fail(`skip link: first Tab stop is not the skip link (got ${JSON.stringify(focused)})`);
    }
    results.push({ route: "/ (skip link)", viewport: "desktop", status: "OK" });
  }

  for (const viewport of VIEWPORTS) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    for (const route of ROUTES) {
      await checkRouteBasics(route, viewport);
    }
  }

  for (const viewport of HERO_VIEWPORTS) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await checkHomeHero(viewport);
  }

  await page.setViewportSize({ width: 1440, height: 900 });
  await checkHeadlineStable();
  await checkReducedMotion();
  await checkRedirectsAndNotFound();
  await checkMobileDrawer();
  await checkSkipLink();

  const lines = results.map((r) => `${r.status.padEnd(24)} ${r.route.padEnd(30)} ${r.viewport}`);
  return "AUDIT PASSED\n" + lines.join("\n");
}
