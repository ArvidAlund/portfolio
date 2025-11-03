"use client"

import { useEffect, useState } from "react";
import ProjectContainer from "./projectContainer";

export default function RenderProjects({ num }){
    if (!num) return
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
        .then(res => res.json())
        .then(data => setProjects(data.projects));
    }, []);

    if (num === "*" || typeof num === "string") {
        num = projects.length;
    }

    return (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2">
        {projects.map((p, i) => {
            if (i > num - 1) return
            return (
                <ProjectContainer {...p} key={i}/>
            )
        })}
        </section>
    )
}