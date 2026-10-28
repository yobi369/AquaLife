/*
 * AquaLife interactions.
 * Before launch, set the client's verified WhatsApp number below.
 * Format: international digits only, e.g. 2547XXXXXXXX (example only).
 */
const WHATSAPP_NUMBER = "";
const toast = document.querySelector(".toast");
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3600);
}
function openWhatsApp(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!number) {
    showToast("AquaLife's WhatsApp number will be connected once the business confirms it.");
    return;
  }
  window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
}
document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    openWhatsApp("Hello AquaLife. I'd like to enquire about " + button.dataset.product + ". Please confirm the current price, availability and delivery options. My location is: ");
  });
});
document.querySelectorAll('[data-whatsapp="general"]').forEach((button) => {
  button.addEventListener("click", () => openWhatsApp("Hello AquaLife. Please share your available water refills, current prices and delivery options."));
});
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }));
}
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", () => {
    img.classList.add("image-failed");
    const holder = img.closest(".product-image, .hero-image-wrap, .local-photo");
    if (holder) {
      holder.classList.add("image-fallback");
      img.alt = "AquaLife water refill image";
    }
  }, { once: true });
  if (img.complete && img.naturalWidth === 0) {
    img.dispatchEvent(new Event("error"));
  }
});
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  });
});