import { marked } from "marked";
import DOMPurify from "dompurify";
import Image from "next/image";

export default function BotMessage({message}){

    const rawHtml = marked.parse(message || "");

    const clean = DOMPurify.sanitize(rawHtml);

    return <div className="flex items-start">
        <img src="https://avatars.githubusercontent.com/u/64034931?v=4" alt="Profile picture" className="h-8 aspect-square rounded-full"/>
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