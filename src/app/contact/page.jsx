"use client"

import { SendHorizonal } from "lucide-react";
import { useEffect, useState } from "react";
import ContactIcons from "../components/contact";
import useSendEmail from "@/lib/useSendEmail";

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
      const res = await useSendEmail(formData)

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
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 *:border-neutral-700">
            <input
              type="text"
              placeholder="Namn"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="border p-2 rounded-lg h-12"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="border p-2 rounded-lg h-12"
              required
            />
            <textarea
              placeholder="Meddelande"
              name="message"
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
        <ContactIcons/>
      </main>
    </div>
  );
}
