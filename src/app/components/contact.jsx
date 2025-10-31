import { FileDown, Mail } from "lucide-react"
import "@/CSS/hoverEffectName.css"

export default function Contact(){
    return <div className="flex h-10 items-center gap-6 mt-8">
          <button className="flex border p-2 rounded-lg w-25 justify-between">
            <p className="font-bold">CV</p> 
            <FileDown/>
          </button>
          <a
            data-name="Github"
            href="https://github.com/ArvidAlund"
            target="_blank"
            rel="noopener noreferrer"
            className="h-5 aspect-square bg-white hover:bg-neutral-400 transition-colors hoverEffectName"
            style={{
              maskImage: "url('./svg/github.svg')",
              WebkitMaskImage: "url('./svg/github.svg')",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskSize: "contain",
              WebkitMaskSize: "contain",
            }}
          ></a>
          <a
          data-name="LinkedIn"
          href="https://www.linkedin.com/in/arvidalund/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-5 aspect-square bg-white hover:bg-neutral-400 transition-colors hoverEffectName"
          style={{
            maskImage: "url('./svg/linkedin.svg')",
            WebkitMaskImage: "url('./svg/linkedin.svg')",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskSize: "contain",
            WebkitMaskSize: "contain",
          }}></a>
          <a href="mailto:arvid.alund@gmail.com"><Mail data-name="Mail" className="h-5 aspect-square text-white hover:text-neutral-400 transition-text hoverEffectName"/></a>
        </div>
}