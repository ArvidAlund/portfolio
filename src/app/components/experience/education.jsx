const educationData = [
    {
        title:"Nackademin", 
        undertitle:"Webbutveckling Fullstack open source", 
        startdate:"Aug 2025", 
        enddate:"Nuvarande", 
        logo:"https://media.licdn.com/dms/image/v2/D4D0BAQEqz4aqngVcTQ/company-logo_200_200/B4DZehuVOeHMAI-/0/1750764967247/nackademin_yrkeshogskola_logo?e=2147483647&v=beta&t=oy9fBBggHlVU19XHPI3d8pfIE94XCu2G0UIPxZYWB_s",
        websiteurl:"https://nackademin.se/",
        bulletpoints:[
        "Fördjupning i moderna JavaScript-ramverk som React och Next.js",
        "Bygger fullstack-appar med Node, Express och PostgreSQL",
        "Lär mig arbeta med autentisering, API:er och databasdesign",
        "Projekt i team med fokus på agila metoder och versionshantering (Git)",
        ]
    },{
        title:"Nyköpings Gymnasium Gripen", 
        undertitle:"Teknikprogrammet Info & mediateknik", 
        startdate:"Aug 2022", 
        enddate:"jun 2025", 
        logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFM_rjgMTaL44xi3RwAI8sMP9OnsRbuUizw&s",
        websiteurl:"https://www.nykoping.se/nykopings-gymnasium/",
        bulletpoints:[
        "Grunder i programmering, webb och teknik",
        "Arbete i projektform med fokus på design och digitala lösningar",
        "Utvecklade intresse för webbutveckling och mjukvarudesign",
        "Avslutade gymnasiearbete inom webbutveckling",
        ]
    }
]

function parseDate(dateStr) {
  if (dateStr.toLowerCase().includes("nuvarande")) {
    return new Date(3000, 0);
  }

  const [monthStr, year] = dateStr.split(" ");
  const months = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  const monthIndex = months.findIndex(m => monthStr.toLowerCase().startsWith(m));

  return new Date(Number(year), monthIndex >= 0 ? monthIndex : 0);
}

export default function Education(){
    const sortedData = [...educationData].sort((a, b) => parseDate(b.enddate) - parseDate(a.enddate));

    return <ul className="ml-10 border-l">
        {sortedData.map((edu, i) => (
        <li key={i} className="py-4 ml-10 relative pr-8">
        <p className="text-xs text-neutral-400">
            {edu.startdate} – {edu.enddate}
          </p>
          <a href={edu.websiteurl} target="_blank" className="h-10 rounded-full absolute -left-15 top-5.5 overflow-hidden"><img src={edu.logo} alt={edu.title} className="h-full object-cover" /></a>
          <h3 className="font-semibold">{edu.title}</h3>
          <p className="text-sm text-neutral-500">{edu.undertitle}</p>
          <ul className="list-disc text-neutral-300 list-outside ml-4">
            {edu.bulletpoints.map((point, index) => (
            <li key={index} className="text-sm">{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
}