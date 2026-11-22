document.body.classList.add("js-ready");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReducedMotion) {
  document.querySelectorAll("video[autoplay]").forEach((video) => {
    video.pause();
    video.removeAttribute("autoplay");
  });
}
const heroVideo = document.querySelector("#hero-video");
const mediaToggle = document.querySelector("#media-toggle");
const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
const mediaLabels = isEnglish
  ? { pause: "Pause demo", play: "Play demo" }
  : { pause: "暂停演示", play: "播放演示" };

if (heroVideo && mediaToggle) {
  const syncMediaToggle = () => {
    const isPaused = heroVideo.paused;
    mediaToggle.textContent = isPaused ? mediaLabels.play : mediaLabels.pause;
    mediaToggle.setAttribute("aria-pressed", String(isPaused));
  };

  mediaToggle.addEventListener("click", () => {
    if (heroVideo.paused) heroVideo.play().catch(() => {});
    else heroVideo.pause();
  });
  heroVideo.addEventListener("play", syncMediaToggle);
  heroVideo.addEventListener("pause", syncMediaToggle);
  syncMediaToggle();
}

const avatarInput = document.querySelector("#avatar-input");
const avatarImage = document.querySelector("#avatar-image");
let avatarObjectUrl = "";

if (avatarInput && avatarImage) {
  avatarInput.addEventListener("change", () => {
    const [file] = avatarInput.files || [];
    if (!file || !file.type.startsWith("image/")) return;
    if (avatarObjectUrl) URL.revokeObjectURL(avatarObjectUrl);
    avatarObjectUrl = URL.createObjectURL(file);
    avatarImage.src = avatarObjectUrl;
  });
  window.addEventListener("beforeunload", () => {
    if (avatarObjectUrl) URL.revokeObjectURL(avatarObjectUrl);
  });
}

const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (!entry.isIntersecting) return; navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)); });
}, { rootMargin: "-38% 0px -54%" });
sections.forEach((section) => sectionObserver.observe(section));
const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
