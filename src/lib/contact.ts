export const CONTACT_PHONE_DISPLAY = "+91 92175 34128";
export const CONTACT_PHONE_E164 = "919217534128";
export const CONTACT_EMAIL = "support@kiduart.com";
export const CONTACT_LOCATION = "Noida, Uttar Pradesh, India";
/** India-only sales motion, so forms carry a fixed +91 instead of shipping a country list. */
export const DEFAULT_COUNTRY_CODE = "+91";

export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_E164}?text=${encodeURIComponent(
  `Hi KIDUART Team,

I'm interested in your School ERP solution.

Here are my details:
- Name:
- School/Organization:
- Number of Students:

Please share more details and schedule a demo.

Thanks!`
)}`;
