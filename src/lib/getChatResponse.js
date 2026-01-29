/**
 * Selects a matching canned response for the given question or falls back to querying the remote chat API.
 *
 * If cached responses contain a match (inputs compared against a trimmed, lowercased question), returns the match's reply; if the reply is an array, a random element is chosen. If no match is found, sends the question to "/api/chat" and returns the API reply.
 *
 * @param {string} question - The user question to match or send to the API.
 * @returns {string|null} The selected reply string, or `null` if `question` is missing or not a string.
 */
export default async function getChatResponse(question) {

  const res = await fetch("https://query-me-pied.vercel.app/question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "key": process.env.NEXT_PUBLIC_API_KEY
    },
    body: JSON.stringify({
      data: {
        question: question
      }
    })
  });

  if (!res.ok) {
    console.error("Network response was not ok");
    return "Något gick fel. Försök igen senare.";
  }

  const data = await res.json();

  if (data.success) return data.reply

  console.error("Error: ", data.error)
}