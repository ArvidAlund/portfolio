import { Globe } from "lucide-react"

export default function ProjectContainer({title, summary, img, stack, gitrepo, website=""}){
    return <div className="border border-neutral-700 p-2 w-full shadow-[0_0_5px_0_oklch(25%_0_0)] rounded-lg overflow-hidden">
        <div className="w-3/4 flex m-auto">
            <img src={img} alt="Project Image" className="h-full object-contain"/>
        </div>
        <div className="mt-2 mb-8">
            <h5 className="font-bold text-lg">{title}</h5>
            <p className="text-xs text-neutral-300">{summary}</p>
        </div>
        <div className="flex gap-2 mb-8">
            {stack.map((item, i) => (
                <p key={i} className="text-[0.75rem] bg-neutral-700 p-1 rounded">{item}</p>
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