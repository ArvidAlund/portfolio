"use client"

import { SendHorizonal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", content: "" });
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    const isActive = formData.name && formData.email && formData.content;
    setButtonActive(!!isActive);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!buttonActive) return;
    console.log("Skickar meddelande:", formData);
    // Här kan du lägga till fetch till din API-route
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
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="border p-2 rounded-lg"
            />
            <textarea
              placeholder="Meddelande"
              value={formData.content}
              className="col-span-2 min-h-[120px] border p-2 rounded-lg"
              onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
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
        </form>
      </main>
    </div>
  );
}
