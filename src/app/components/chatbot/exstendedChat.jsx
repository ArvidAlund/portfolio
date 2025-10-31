"use client"
import { Send } from "lucide-react"
import { useState } from "react";


export default function ExtendedChat(){
    const [inputValue, setInputValue] = useState();
    return <div>
        <section id="chatWindow" className="h-70">
            <div className={`grid items-center text-center p-4`}>
                <h6 className="font-bold">Skriv ett medelande för att starta samtalet</h6>
            </div>
        </section>
        <section id="input" className="h-15 flex justify-between border-t border-neutral-500 p-3 gap-2">
            <input type="text" name="input" placeholder="Fråga mig något..." value={inputValue} className="border rounded flex-1 h-full p-2" onChange={(e) => setInputValue(e.target.value)}/>
            <button className={`${inputValue ? "bg-white cursor-pointer" : "border-neutral-800"} p-2 rounded`}>
                <Send className="text-black h-5 w-5"/>
            </button>
        </section>
    </div>
}