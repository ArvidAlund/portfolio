import ContactIcons from "./components/contact"
import Experience from "./components/experience/experience"
import TechStack from "./components/stack"

/**
 * Renders the home page layout: a two-column introduction with name, brief bio and contact icons on the left, a profile image on the right, followed by experience and tech stack sections.
 * @returns {JSX.Element} The Home page component markup.
 */
export default function Home() {
  return <div className="mx-auto max-w-3xl px-8 py-6 flex justify-between">
    <main className="w-full">
      <div className="grid grid-cols-[60%_40%]">
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
          <p className="mt-4 text-sm">Fullstack JS-utvecklare med fokus på React och API:er.</p>
          <ContactIcons />
        </div> 

        <div className="w-full flex justify-center">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHaUFzbY8CV2A/profile-displayphoto-scale_200_200/B4DZjqPx88GkAg-/0/1756276663263?e=1763596800&v=beta&t=8AuP6QKf7C8hYLrhmsePipL7ANJZvsDw4Ga8uDQBvBc" alt="Profile picture" className="rounded h-full object-cover"/>
        </div>
      </div>

    <Experience/>


    <TechStack/>
    </main>
  </div>
}