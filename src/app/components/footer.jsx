import ContactIcons from "./contact"
export default function Footer(){
    return <footer className="mx-auto max-w-3xl px-8 py-6 flex justify-center sm:justify-between items-center">
        <div className="flex items-center text-sm">
            <div className="flex gap-2 text-neutral-400 p-1 border-r items-center justify-center">
                <p>© 2025</p>
                <a href="https://arvidalund.com" className="hover:underline">arvidalund.com</a>
            </div>
            <a href="/privacy" className="pl-1 hover:underline">sekretesspolicy</a>
        </div>
        <div className="hidden sm:block">
            <ContactIcons/>
        </div>
    </footer>
}