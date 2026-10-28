# AquaLife — Water Refills & Bottled Water Website

A responsive, mobile-first presentation website for AquaLife, currently positioned around water refill and bottled-water enquiries in Westlands, Nairobi, Kenya.

## Live website
- Production deployment: https://aqualife-1w1h0o8v1-brians-projects-a132bca2.vercel.app
- Source repository: https://github.com/yobi369/AquaLife

## Customer-facing features
- Product groupings for 300ml, 500ml, 1L, 1.5L, 5L, 10L and 18.9–20L refill enquiries.
- Clearly labelled indicative prices in KES; all estimates must be replaced or confirmed by the business before a commercial launch.
- WhatsApp enquiry buttons on the contact section, product cards and a persistent floating contact shortcut.
- Prefilled enquiry messages ask customers to confirm stock, final price and delivery options.
- Service area messaging focused on Westlands, Nairobi; exact coverage, delivery timing and charges are confirmed directly.
- Responsive navigation, FAQ accordions, semantic page sections, reduced-motion support, descriptive image alt text and fallback styling for failed images.
- Basic search/social metadata (description, Open Graph and social-card fields).

## Technology
- Semantic HTML
- CSS, including responsive layouts and reduced-motion handling
- Vanilla JavaScript
- Static deployment on Vercel; no server-side order system is included.

## Important launch checklist
Before advertising the site as the official customer ordering channel, the business owner should confirm:
1. The WhatsApp number currently configured in `script.js` is the correct, business-controlled contact.
2. The official business name, logo, service address and service-area boundaries.
3. The actual products, sizes, prices, stock availability and bottle/deposit/refill terms.
4. Delivery charges, operating hours, estimated delivery windows and minimum order quantities.
5. Accepted payment methods and the official M-Pesa details, if applicable. The site does not process payments.
6. Any water-quality, hygiene or certification claims, supported by evidence before publishing them.
7. Replace illustrative Unsplash stock photos with real AquaLife product, premises and delivery photos when available.

## Current limitations
- Prices are prototype estimates, not a verified live price list.
- Stock, delivery eligibility, delivery timing, and payment methods are not connected to a backend and are not automatically confirmed.
- WhatsApp is a handoff to an external app/site; the website does not receive order status or confirm a successful message send.
- No checkout, M-Pesa STK Push, payment processing, inventory, customer accounts, order tracking, analytics or CRM is implemented.
- HTTP 200 from Vercel confirms the page is served; it does not prove that every device, image URL or WhatsApp flow has been tested end-to-end.

## Run locally
Open `index.html` directly in a browser or serve the repository with any static file server.

## Deployment
The Vercel project is linked to the `main` branch. The latest deployment observed during this update was marked `READY` and served the page with HTTP 200. Re-check the latest deployment after each source change.

## Presentation guidance
Present the site as a polished customer enquiry website/prototype. Explain that it helps customers compare sizes, see indicative price ranges and start a WhatsApp enquiry. Do not claim that it accepts payment, guarantees delivery, verifies water quality or manages stock until those capabilities are actually implemented and confirmed.
