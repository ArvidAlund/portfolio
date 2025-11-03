let cachedResponses = null; 

export default async function getChatResponse(question) {

    if (!question || typeof question !== "string") {
        console.warn("getChatResponse: question saknas eller är ogiltig:", question);
        return null;
    }
    
    if (!cachedResponses) {
        const data = await fetch("/responses.json").then(res => res.json());
        cachedResponses = data.responses;
    }

  const normalized = question.toLowerCase().trim();
  const match = cachedResponses.find(r =>
    r.inputs.some(i => normalized ===i || normalized.startsWith(i + "") || normalized.endsWith(" " + i) || normalized.includes(" " + i + " "))
  );

  if (match){
    if (Array.isArray(match.reply)) return match.reply[Math.floor(Math.random() * match.reply.length)];
    return match.reply;
  };

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message:question})
  });

  const data = await res.json();

  return data.reply
}
