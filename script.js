// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Footer year update
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const revealTargets = document.querySelectorAll(
  "section:not(.hero) .section-title, .about, .skill-group, .exp-card, .card, .contact-links"
);
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target); // 한 번 나타나면 끝
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

// Active menu link
const menuLinks = document.querySelectorAll("#navLinks a");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    menuLinks.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
    );
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("section[id]").forEach((s) => sectionObserver.observe(s));