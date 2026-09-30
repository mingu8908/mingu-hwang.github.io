// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Footer year update
document.getElementById("year").textContent = new Date().getFullYear();

// Typing effects
const words = ["Software Developer", "AI Engineer"];
const typing = document.getElementById("typing");
let w = 0, c = 0, deleting = false;

function type() {
  const word = words[w];
  c += deleting ? -1 : 1;
  typing.textContent = word.slice(0, c);

  let delay = deleting ? 50 : 100;
  if (!deleting && c === word.length) { deleting = true; delay = 1500; }
  else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 300; }
  setTimeout(type, delay);
}
type();