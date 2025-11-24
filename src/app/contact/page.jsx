"use client"

import { SendHorizonal } from "lucide-react";
import { useEffect, useState } from "react";
import SendEmail from "@/lib/useSendEmail";

/**
 * Renders the contact page with name, email, and message fields and UI for sending a message.
 *
 * The submit button becomes enabled when all fields have values. Submitting the form sends the current form data via the `useSendEmail` hook, resets the inputs, and displays a success or error message.
 *
 * @returns {JSX.Element} The contact form UI.
 */
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [buttonActive, setButtonActive] = useState(false);
  const [sendSuccess, setSendSuccess] = useState();

  useEffect(() => {
    const isActive = formData.name && formData.email && formData.message;
    setButtonActive(!!isActive);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!buttonActive) return;

    const sendEmail = async () => {
      const res = await SendEmail(formData)

      setSendSuccess(res);

      setFormData({ name: "", email: "", message: "" })
    }
    
    sendEmail();
  };

  return (
    <div className="mx-auto max-w-3xl px-8 py-6 flex justify-between">
      <main className="grow">
        <h1 className="text-5xl font-bold font-caveat tracking-wider mb-10">Kontakta mig</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 *:border-neutral-700">
            <input
              type="text"
              placeholder="Namn"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="border p-2 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="border p-2 rounded-lg"
              required
            />
            <textarea
              placeholder="Meddelande"
              value={formData.message}
              className="col-span-2 min-h-[120px] border p-2 rounded-lg"
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              required
            />
          </div>
          <button
            type="submit"
            className={`mt-8 p-2 rounded-lg w-full text-center border border-neutral-700 ${
              buttonActive ? "bg-white cursor-pointer" : ""
            }`}
          >
            <div className="flex justify-center gap-2">
              <p className={`${buttonActive ? "text-black" : "text-white"} transition-all duration-200`}>
                Skicka meddelande
              </p>
              <SendHorizonal className={`${buttonActive ? "text-black" : "text-white"} transition-all duration-200`} />
            </div>
          </button>
          {sendSuccess !== undefined && !sendSuccess && (
            <p className="text-red-500 text-center mt-2">Något gick fel när medelandet skulle skickas. försök igen senare eller skriv på linkedin</p>
          )}
          {sendSuccess !== undefined && sendSuccess && (
            <p className="text-green-500 text-center mt-2">Ditt medelande har skickats!</p>
          )}
        </form>
      </main>
    </div>
  );
}