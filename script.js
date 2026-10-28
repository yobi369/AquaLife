/*
 * AquaLife website interactions.
 * Before launch: set the real WhatsApp number in WHATSAPP_NUMBER below.
 * Use international format without +, spaces, or punctuation (Kenya: 2547XXXXXXXX).
 */
const WHATSAPP_NUMBER = ""; // TODO: replace with the client's verified WhatsApp number.
const toast = document.querySelector(".toast");
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}
function openWhatsApp(message) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!cleanNumber) {
    showToast("WhatsApp number needs to be configured before orders can be sent.");
    return;
  }
  const url = "https://wa.me/" + cleanNumber + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    openWhatsApp("Hello AquaLife! I'd like to enquire about: " + product + ". Please share the current price, availability and delivery options. My location is: ");
  });
});
document.querySelectorAll('[data-whatsapp="general"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp("Hello AquaLife! I'd like to ask about your water refills. Please share your available products, current prices and delivery options.");
  });
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
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  });
});