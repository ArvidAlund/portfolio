import { Flag, Globe } from "lucide-react"
import { useState } from "react"

/**
 * Render a card that displays a project's image, title, summary, technology stack, and optional website and repository links.
 *
 * @param {string} title - Project title displayed prominently.
 * @param {string} summary - Short project description shown under the title.
 * @param {string} img - Image URL used for the project thumbnail (renders with alt "Project Image").
 * @param {string[]} stack - Array of technology names rendered as small chips.
 * @param {string} gitrepo - URL of the project's Git repository; when falsy or an empty string the repo link is omitted.
 * @param {string} [website=""] - URL of the live project; when falsy or an empty string the website link is omitted.
 * @returns {JSX.Element} The rendered project card element.
 */
export default function ProjectContainer({title, summary, img, stack, gitrepo, website=""}){
    const [imgExtended, setImgExtended] = useState(false)
    return <div className="border border-neutral-700 p-2 w-full shadow-[0_0_5px_0_oklch(25%_0_0)] rounded-lg flex flex-col">
        <div className="w-fit flex m-[0_auto] h-40">
            <img src={img} alt="Project Image" className={`h-full object-contain ${imgExtended ? "absolute top-1/2 left-1/2 w-full sm:w-3/4 -translate-1/2 z-100" : "scale-100"}`} onClick={() => setImgExtended(!imgExtended)}/>
        </div>
        <div className="mt-2 mb-8 h-25">
            <h5 className="font-bold text-lg">{title}</h5>
            <p className="text-xs text-neutral-300">{summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-8 flex-1">
            {stack.map((item, i) => (
                <p key={i} className="text-[0.75rem] bg-neutral-700 p-1 rounded h-fit">{item}</p>
            ))}
        </div>
        <div className="flex gap-2">
            {website && website !== "" && (
            <a href={website} target="_blank" className="flex bg-white w-fit text-black p-1 text-[0.75rem] justify-center items-center rounded gap-1">
                <Globe className="h-3"/>
                <p>Webbplats</p>
            </a>
            )}
            {gitrepo && gitrepo !== "" && (
                <a href={gitrepo} target="_blank" className="flex bg-white w-fit text-black p-1 text-[0.75rem] justify-center items-center rounded gap-1">
                    <div
                        className="h-3 w-3 bg-black"
                        style={{
                            maskImage: `url(./svg/tools/github.svg)`,
                            WebkitMaskImage: `url(./svg/tools/github.svg)`,
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            maskSize: "contain",
                            WebkitMaskSize: "contain",
                        }}
                        />
                    <p>Repo</p>
                </a>
            )}
        </div>
    </div>
}