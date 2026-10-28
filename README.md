# AquaLife — Water Refill Website

A premium, mobile-first website concept for a Kenyan water refill and delivery business. Built as a lightweight static site to make it fast to deploy and easy to maintain.

## Included
- Responsive homepage with premium water imagery and brand styling
- Product enquiry cards for refill sizes and delivery
- WhatsApp enquiry flow prepared for a verified business number
- Mobile navigation, accessible FAQ accordions, reduced-motion support
- SEO description, semantic HTML, responsive CSS and no build step

## Run locally
Open `index.html` in a browser, or serve the folder with any static file server.

## Deploy
This repository can be imported as a static site into Vercel. No build command is required; use the repository root as the output directory if prompted.

## Launch checklist — complete with the client
1. Set the real WhatsApp number in `script.js` in `WHATSAPP_NUMBER` using international digits only (Kenya format, e.g. `2547XXXXXXXX`; do not use this example as the actual number).
2. Confirm the business name, logo, phone number, email and physical address.
3. Replace enquiry-only product details with the client's verified product range and KES prices.
4. Confirm actual Nairobi delivery zones, fees, business hours and order cut-off times.
5. Confirm permission to use the product and brand photographs; replace demo imagery with client-owned photos where possible.
6. Add only verified water-quality, hygiene, licensing and certification claims.
7. Test the WhatsApp links on Android and iOS, verify all images on mobile data, and check the live deployed domain.

## Important
The current website is a presentation-ready starter, not a connected order-management system. Orders are sent to WhatsApp only after the client's real number is configured. No online payments, live stock, customer accounts, or delivery tracking are implemented. Prices, product availability and delivery coverage are intentionally not invented.

## Technology
Plain HTML, CSS and JavaScript. No runtime dependencies or build tooling required.
