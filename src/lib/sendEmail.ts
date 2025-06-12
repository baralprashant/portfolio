// src/lib/sendEmail.ts
import emailjs from "@emailjs/browser";

export const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const serviceID = "service_qmkjl42";
  const templateID = "template_mvrkt78";
  const publicKey = "-GIxs3C0OZrk9K4sF"; // make sure this matches your dashboard

  const templateParams = {
    name,
    email,
    subject,
    message,
    // reply_to: email,
  };

  try {
    const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
    return { success: true, response: result };
  } catch (error) {
    console.error("EmailJS error:", error);
    return { success: false, error };
  }
};
