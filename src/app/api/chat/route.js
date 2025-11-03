import OpenAI from "openai";
import path from "path";
import fs from "fs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const RATE_LIMIT_MS = 3000;
const lastCallPerIP = {};

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    
    const now = Date.now();
    if (lastCallPerIP[ip] && now - lastCallPerIP[ip] < RATE_LIMIT_MS) {
      const responses = [
        "⏱ Whoops! Tar en kort paus från GPT här – vänta lite så är jag tillbaka!",
        "😅 Easy there! Ge mig 3 sekunder att andas innan vi fortsätter.",
        "🚦 Stoppljus! Chatten behöver en liten paus. Testa igen om några sekunder.",
        "🐢 Slow down! Jag behöver ladda batterierna innan jag kan svara igen.",
        "🛑 Håll dig lugn! Jag jobbar på högvarv men behöver en snabb paus – försök igen snart!"
      ]
      return new Response(JSON.stringify({ error: "⏱ För många anrop, försök igen snart.", reply: responses[Math.floor(Math.random() * responses.length)] }), { status: 429 });
    }
    lastCallPerIP[ip] =  now;
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

            Svara alltid naturligt, trevligt och med en lätt personlig ton.
            Använd emojis sparsamt – max 1 per svar, och bara där det känns genuint.
            Om användaren frågar om tekniska saker, förklara kunnigt men lättsamt.
            Om det gäller portfolio eller personliga saker, tala i första person.
            Håll svaren korta och koncisa.
            Undvik onödigt långa förklaringar.
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
