"use client"
import { useState, useEffect } from "react"

export default function TechStack(){
    const [stackList, setStackList] = useState();

    useEffect(()=>{
        fetch("/about.json")
        .then((res) => res.json())
        .then((data) => setStackList(data.techStack))
        .catch((err) => console.log("error loading tech stack: ", err));
    },[])

    if (!stackList) {
        return <p className="mt-20 text-neutral-400">Laddar tech stack...</p>;
    }

    return <section className="mt-20">
        <h3 className="text-4xl font-bold font-caveat tracking-wider mb-8">Tech Stack</h3>
        <div className="border border-neutral-800 min-h-20 rounded-lg mt-2 shadow-[0_0_5px_0_oklch(25%_0_0)]">
            <h5 className="mt-5 p-4 font-bold text-xl">Frontend</h5>
            <hr className="border-neutral-800"/>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] m-4 gap-2">
                {stackList.frontend.map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">
                        <img src={item.src} alt="Icon" className="h-8"/>
                        <p className="text-sm mt-0.5">{item.name}</p>
                    </div>
                ))}
            </div>

            <h5 className="mt-5 p-4 font-bold text-xl">Backend</h5>
            <hr className="border-neutral-800"/>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] m-4 gap-2">
                {stackList.backend.map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">
                        <img
                        src={item.name === "Express.js" || item.name === "Flask" ? null : item.src}
                        alt=""
                        className="h-8 w-8 bg-white"
                        style={{
                            maskImage: `url(${item.src})`,
                            WebkitMaskImage: `url(${item.src})`,
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                        }}
                        />
                        <p className="text-sm mt-0.5">{item.name}</p>
                    </div>
                ))}
            </div>

            <h5 className="mt-5 p-4 font-bold text-xl">Verktyg</h5>
            <hr className="border-neutral-800"/>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] m-4 gap-2">
                {stackList.tools.map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">
                        <img
                        src={item.name === "GitHub" || item.name === "Vercel" ? null : item.src}
                        alt=""
                        className="h-8 w-8 bg-white"
                        style={{
                            maskImage: `url(${item.src})`,
                            WebkitMaskImage: `url(${item.src})`,
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                        }}
                        />
                        <p className="text-sm mt-0.5">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
}