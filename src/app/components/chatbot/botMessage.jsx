import { marked } from "marked";
import DOMPurify from "dompurify";

export default function BotMessage({message}){

    const rawHtml = marked.parse(message || "");

    const clean = DOMPurify.sanitize(rawHtml);

    return <div className="flex items-start">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQHaUFzbY8CV2A/profile-displayphoto-scale_200_200/B4DZjqPx88GkAg-/0/1756276663263?e=1763596800&v=beta&t=8AuP6QKf7C8hYLrhmsePipL7ANJZvsDw4Ga8uDQBvBc" alt="Profile picture" className="h-8 rounded-full"/>
        {message.replaceAll(".","") === "" ? (
            <div className="flex items-center m-2 gap-1 mb-10">
                <span className="animate-bounce h-2 aspect-square rounded-full bg-white"></span>
                <span className="animate-bounce h-2 aspect-square rounded-full bg-white" style={{ animationDelay: "0.33s" }}></span>
                <span className="animate-bounce h-2 aspect-square rounded-full bg-white" style={{ animationDelay: "0.66s" }}></span>
            </div>
        ) : (
            <div className="m-2 p-2 border rounded max-w-[80%] whitespace-pre-wrap flex items-center [&>p]:m-0 [&>p]:leading-none" dangerouslySetInnerHTML={{ __html: clean }} />
        )}
    </div>
}