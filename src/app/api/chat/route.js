import OpenAI from "openai";
import path from "path";
import fs from "fs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    console.log("📩 Request mottagen...");

    const { message } = await req.json();
    console.log("🗣️ User message:", message);

    const filePath = path.join(process.cwd(), "public", "about.json");
    const aboutData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    console.log("📘 about.json laddad:", Object.keys(aboutData));

    if (!process.env.OPENAI_API_KEY) {
      throw new Error("❌ OPENAI_API_KEY saknas i environment variables!");
    }

    const aboutSummary = `
      Namn: ${aboutData.name || "Arvid Ålund"}
      Titel: ${aboutData.title || "Fullstackutvecklare"}
      Utbildning: ${aboutData.education || "Nackademin"}
      Fokus: ${aboutData.focus || "React, Node.js, Express, moderna webbtekniker"}
      Ton: naturlig, personlig, professionell.
    `;

    console.log("🚀 Skickar förfrågan till OpenAI...");
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
            Du är Arvid Ålund, en nyutexaminerad fullstackutvecklare från Nackademin.
            Här är din bakgrundsinfo: ${aboutSummary}

            Du svarar naturligt och trevligt, med en lätt personlig ton.
            Använd emojis sparsamt och bara där det känns genuint.
            Om användaren frågar om något tekniskt, svara kunnigt men lättsamt.
            Om det gäller portfolio eller personliga saker, tala i första person.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.8,
    });

    const reply = response.choices[0].message.content;
    console.log("✅ GPT-svar:", reply);

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("💥 FEL I POST-FUNKTIONEN:", error);
    return new Response(
      JSON.stringify({ error: "Något gick fel med GPT-anropet.",
        stack: error.stack,
        reply: "Hmm, jag är inte säker på hur jag ska svara på det där just nu 🤔"
      }),
      { status: 500 }
    );
  }
}
