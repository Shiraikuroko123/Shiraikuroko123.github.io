const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const filterButtons = document.querySelectorAll(".filter-button");
const workItems = document.querySelectorAll(".work-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    workItems.forEach((item) => {
      const visible = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !visible);
    });
  });
});

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy;
    const status = button.closest(".about-copy, .citation-section")?.querySelector(".copy-status, .inverse-status");
    try {
      await navigator.clipboard.writeText(text);
      if (status) status.textContent = "Copied to clipboard.";
    } catch {
      if (status) status.textContent = "Copy unavailable here — select the text manually.";
    }
  });
});
