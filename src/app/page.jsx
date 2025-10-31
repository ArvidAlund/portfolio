import Contact from "./components/contact"

export default function Home() {
  return <div className="mx-auto max-w-3xl px-8 py-6 flex justify-between">
    <main>
      <div>
        <h1 className="text-5xl font-bold mb-2 font-caveat tracking-wider">Tja Arvid här. 👋</h1>
        <h4 className="flex items-center gap-2 text-lg font-medium">
          19 år • Fullstackutvecklare från Nyköping
          <img
            src="https://icons.iconarchive.com/icons/custom-icon-design/flat-europe-flag/512/Sweden-icon.png"
            alt="Swedish flag"
            className="h-5 w-auto object-cover"
          />
        </h4>
        <Contact/>
      </div> 
    </main>
  </div>
}
