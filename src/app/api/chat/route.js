import OpenAI from "openai";
import aboutData from "@/app/lib/about.json" assert { type: "json" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    const aboutSummary = `
      Namn: ${aboutData.name || "Arvid Ålund"}
      Titel: ${aboutData.title || "Fullstackutvecklare"}
      Utbildning: ${aboutData.education || "Nackademin"}
      Fokus: ${aboutData.focus || "React, Node.js, Express, moderna webbtekniker"}
      Ton: naturlig, personlig, professionell.
    `;

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
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Något gick fel med GPT-anropet." }),
      { status: 500 }
    );
  }
}
