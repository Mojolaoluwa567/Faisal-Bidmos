/* Scroll animations: slide-up reveals, staggered grids, image wipes, progress bar. Off for reduced-motion users. */
(() => {
  try { sessionStorage.setItem("fb-visited", "1"); } catch (e) {}
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const root = document.documentElement, $$ = (s, r = document) => [...r.querySelectorAll(s)];
  root.classList.add("motion");
  setTimeout(() => root.classList.remove("has-loader"), 3600);

  const staggered = [".three > .col", ".cards > *", ".logo-grid > div", ".about-pair > *", ".values li",
    ".team-grid > *", ".gallery img", "#blog-posts > *", ".service-cards", ".client", ".footer-content > div", ".pub-card"];
  const singles = [".media > *", ".video-row > *", ".split > *", ".about-intro .wrap > *", ".about-banner", ".about-cta .wrap > *",
    ".headingss > *", ".heading > *", ".services-title", ".services-subtext", ".contact-form", ".contact-info",
    "section.section > .wrap > h2", "section.section > .wrap > p", ".core-values-section h2", "#blog-header", ".svc-article > *", ".side-card", ".pub-head > *", ".pub-feature", ".center-title"];
  const wipes = [".media img", ".about-banner", ".card-link img", ".image-wrapper img", ".service-cards img"];

  const targets = [];
  const add = (el, i = 0) => {
    if (!el || el.closest(".hero, header") || el.dataset.rv || el.parentElement.closest("[data-rv]")) return;
    el.dataset.rv = "1";
    el.style.setProperty("--d", (Math.min(i % 4, 3) * 0.09).toFixed(2) + "s");
    el.classList.add(wipes.some(s => el.matches(s)) ? "rv-img" : "rv");
    targets.push(el);
  };
  staggered.forEach(sel => $$(sel).forEach(add));          // staggered groups first
  singles.forEach(sel => $$(sel).forEach(add));
  wipes.forEach(sel => $$(sel).forEach(el => { if (!el.dataset.rv) { el.dataset.rv = "1"; el.classList.add("rv-img"); targets.push(el); } }));

  // One position check for everything (reliable with fast scrolling, and with clipped images)
  let pending = targets.slice(), tick = false;
  const check = () => {
    tick = false;
    pending = pending.filter(el => {
      if (el.getBoundingClientRect().top - 30 > innerHeight * 0.9) return true;
      el.classList.add("in");
      setTimeout(() => el.classList.remove("rv", "rv-img", "in"), 2200); // hand hover styles back
      return false;
    });
    if (!pending.length) { removeEventListener("scroll", queue); removeEventListener("resize", queue); }
  };
  const queue = () => { if (!tick) { tick = true; requestAnimationFrame(check); } };
  addEventListener("scroll", queue, { passive: true }); addEventListener("resize", queue);
  requestAnimationFrame(check);

  // Header: thin reading-progress line + shadow once scrolled
  const header = document.querySelector("header");
  if (header) {
    const bar = document.createElement("div"); bar.className = "progress"; header.appendChild(bar);
    let tick = false;
    const update = () => {
      const max = root.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
      header.classList.toggle("scrolled", scrollY > 8); tick = false;
    };
    addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }
})();
