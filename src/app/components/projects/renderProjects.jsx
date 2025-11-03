"use client"

import { useEffect, useState } from "react";
import ProjectContainer from "./projectContainer";

/**
 * Render a responsive grid of project cards fetched from "/projects.json", limited to the first `num` items.
 *
 * @param {number|string} num - The maximum number of projects to display. If `num` is `"*"` or any string, the component renders all fetched projects. If `num` is falsy, the component renders nothing.
 * @returns {JSX.Element|undefined} A section element containing the project grid when `num` is truthy; `undefined` otherwise.
 */
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