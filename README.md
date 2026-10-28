# AquaLife — Kenyan Water Refill Website

A responsive static website concept for a water-refill business serving customers in Nairobi, Kenya.

## Current build
- Kenya-focused copy and layout; no unrelated lifestyle portraits
- Responsive mobile navigation and product enquiry cards
- Refill and delivery information that does not invent prices, certifications or service guarantees
- WhatsApp enquiry flow ready for the client's verified number
- FAQ section, accessibility basics, reduced-motion support and broken-image fallback styling
- Plain HTML, CSS and JavaScript; no build step or runtime dependencies

## Run locally
Open `index.html` in a browser or serve this folder with a static file server.

## Deploy
The repository is linked to Vercel and deploys from the `main` branch. Static site; no build command is required.

## Required before the client launch
1. Add the client's verified WhatsApp number to `WHATSAPP_NUMBER` in `script.js` (international digits only, e.g. `2547XXXXXXXX`; this is an example format, not a real contact).
2. Confirm the official business name, logo, phone, email and physical location.
3. Confirm the product list and current KES prices; do not publish demo pricing.
4. Confirm Nairobi neighbourhoods served, delivery charges, delivery hours and order cut-off times.
5. Replace illustrative third-party photos with client-owned or properly licensed images before the commercial launch. Current reference imagery is linked from:
   - Boreal Light / Kitengela WaterKiosk: a photo of a 20L bottle being filled in Kenya.
   - Norwa Waters: a photo of a water-refilling station.
   These images are illustrative references, not AquaLife's own premises or staff. Confirm permission/licensing before retaining them on a public commercial site.
6. Add water quality, hygiene, KEBS or other certification claims only when the client provides evidence.
7. Test image loading, navigation, WhatsApp links and the full page on Android/mobile data after deployment.

## Honest scope
This is a presentation website, not a connected order-management system. No payment gateway, M-Pesa STK Push, stock management, customer accounts or delivery tracking is implemented. WhatsApp ordering stays disabled until the actual number is configured. Prices, product availability, business hours and exact delivery coverage are intentionally not invented.

## Tech
Semantic HTML, CSS and vanilla JavaScript.
