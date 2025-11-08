"use client"
import { Send } from "lucide-react"
import { useState, useEffect, useRef } from "react";
import BotMessage from "./botMessage";
import UserMessage from "./userMessage";
import getChatResponse from "@/lib/getChatResponse";
let conversationCache = [];

export default function ExtendedChat(){
    const [inputValue, setInputValue] = useState("");
    const [convStarted, setConvStarted] = useState(false);
    const [conversation, setConversation] = useState(conversationCache);
    const [botCallStarted, setBotCallStarted] = useState(false);
    const bottomRef = useRef(null);

    useEffect(()=>{
        if (conversation.length !== 0) setConvStarted(true);
        conversationCache = conversation;
    },[conversation])

    useEffect(()=>{
        if (!botCallStarted) return

        const botRes = async () => {
            const res = await getChatResponse(conversation[conversation.length - 1].content)
            setConversation((prev) => [...prev, {role: "bot", content: res}])
            setBotCallStarted(false);
        }

        botRes();

    },[botCallStarted])

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    },[conversation, botCallStarted])

    const handleKeyUp = (e) => {
        if (e.key === "Enter"){
            if (botCallStarted) return
            setConversation((prev) => [...prev, {role: "user", content: inputValue}]);
            setInputValue("");
            setBotCallStarted(true);
        }
    }

    return <div>
        <section id="chatWindow" className={`h-70 overflow-y-auto`}>
            {convStarted ? (
                <>
                    {conversation.map((message, index) => {
                        if (message.role === "user") return <UserMessage message={message.content} key={index}/>
                        if (message.role === "bot") return <BotMessage message={message.content} key={index}/>
                    })}
                    {botCallStarted && (
                        <BotMessage message="..."/>
                    )}
                    {/* <UserMessage message="Hur mycket lön förväntar du dig?"/>
                    <BotMessage message="30k - 40k kr dasjkndasj asd asd sdasd asd asdd asd as das asd as das ds dsdasndjkasnd ns djk asj j asd jkasdjk "/>
                    <UserMessage message="Hur mycket lön förväntar du dig?  jk njk  hjnka hjkx ashjk cashjik cjk nk j vsdfjk dfjo  j bjkl  jkml sjkl vdfjkl fjkl vfjkl f jl f jkl fjkl fdjkl fg dfjkl dfjkl "/> */}
                    <div ref={bottomRef}></div>
                </>
            ) : (
                <div className={`grid items-center text-center p-4 grid-rows-[70%_30%] h-full`}>
                    <h6 className="font-bold">Skriv ett medelande för att starta samtalet</h6>
                    <div className="text-neutral-500">
                        <p className="text-sm">Drivs av</p>
                        <a href="https://github.com/ArvidAlund/QueryMe" target="_blank" className="underline">QueryMe</a>
                    </div>
                </div>
            )}
        </section>
        <section id="input" className="h-15 flex justify-between border-t border-neutral-500 p-3 gap-2">
            <input type="text" 
            name="input" 
            placeholder="Fråga mig något..." 
            value={inputValue} 
            className="border rounded flex-1 h-full p-2" 
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={handleKeyUp}
            />

            <button className={`${inputValue ? "bg-white cursor-pointer" : "border-neutral-800"} p-2 rounded`} 
            onClick={() => {
                if (botCallStarted) return
                setConversation((prev) => [...prev, {role: "user", content: inputValue}]);
                setInputValue("");
                setBotCallStarted(true);
                }} >
                <Send className="text-black h-5 w-5"/>
            </button>
        </section>
    </div>
}