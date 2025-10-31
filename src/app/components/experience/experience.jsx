"use client"
import { useState } from "react"
import Education from "./education";

export default function Experience(){
    const [showEducation, setShowEducation] = useState(true);
    return <section className="mt-20">
        <nav className="grid grid-cols-2 text-center bg-[#1f2937] p-1 rounded-md">
            <button className={`cursor-pointer rounded p-1 ${showEducation ? "" : "bg-[#030712]"}`} onClick={() => setShowEducation(false)}>
                Arbete
            </button>

            <button className={`cursor-pointer rounded p-1 ${showEducation ? "bg-[#030712]" : ""}`} onClick={() => setShowEducation(true)}>
                Utbildning
            </button>
        </nav>

        <div className="border border-neutral-800 min-h-20 rounded-lg mt-2 shadow-[0_0_5px_0_oklch(25%_0_0)]">
            {showEducation && (
                <Education/>
            )}
        </div>
    </section>
}