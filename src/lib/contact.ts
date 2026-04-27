export const CONTACT_PHONE_DISPLAY = "+91 92175 34128";
export const CONTACT_PHONE_E164 = "919217534128";
export const CONTACT_EMAIL = "support@kiduart.com";
export const CONTACT_LOCATION = "Noida, Uttar Pradesh, India";
export const DEFAULT_COUNTRY_CODE = "+91";

export const COUNTRY_CODES = [
  { value: "+91", label: "India (+91)" },
  { value: "+1", label: "USA (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+971", label: "UAE (+971)" },
];

export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_E164}?text=${encodeURIComponent(
  "Hi KIDUART team, I would like to know more about your ERP."
)}`;
