"use client"
import Link from "next/link"
import { Bot, BotOff } from "lucide-react"
import { useState, useEffect } from "react"
import { emitEvent } from "../utils/eventbus"

export default function Header(){
    const [botActive, setBotActive] = useState(true);

    useEffect(()=>{
        emitEvent("botActive", botActive)
    },[botActive])
    return <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-sm">
        <nav className="mx-auto max-w-3xl px-8 py-6 flex justify-between">
            <div className="flex gap-4 sm:gap-8 [&>a]:transition-all [&>a]:duration-200 text-[#86888e] [&>a]:hover:text-white">
                <Link href="/">Hem</Link>
                <Link href="/projects">Projekt</Link>
                <Link href="/contact">Kontakt</Link>
            </div>
            <div>
                <button onClick={() => setBotActive(!botActive)} className="cursor-pointer" aria-label="open/close chatwindow">
                    {botActive ? 
                    <Bot className="text-[#86888e] transition-all duration-200 hover:text-white"/> : 
                    <BotOff className="text-[#86888e] transition-all duration-200 hover:text-white"/>}
                </button>
            </div>
        </nav>
    </header>
}