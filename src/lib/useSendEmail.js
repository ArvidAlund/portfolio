import emailjs from '@emailjs/browser';

export default async function useSendEmail(params) {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      params,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    console.log("Email skickat!", response.status, response.text);
    return true;
  } catch (error) {
    console.error("Fel vid emailjs:", error);
    return false;
  }
}
