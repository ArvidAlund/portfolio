import Link from "next/link"
import { Bot } from "lucide-react"

export default function Header(){
    return <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-sm">
        <nav className="mx-auto max-w-3xl px-8 py-6 flex justify-between">
            <div className="flex gap-4 sm:gap-8 [&>a]:transition-all [&>a]:duration-200 text-[#86888e] [&>a]:hover:text-white">
                <Link href="/">Hem</Link>
                <Link href="/projects">Project</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Kontakt</Link>
            </div>
            <div>
                <Bot className="text-[#86888e] transition-all duration-200 hover:text-white"/>
            </div>
        </nav>
    </header>
}