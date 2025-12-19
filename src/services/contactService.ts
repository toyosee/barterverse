import type { ContactFormData } from "../../types";

export const submitContactForm = async (formData: ContactFormData) => {
  const response = await fetch("/.netlify/functions/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return response.json();
};