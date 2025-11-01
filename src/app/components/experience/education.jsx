import { useState, useEffect } from "react";

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
    const [educationData, setEducationData] = useState();
    const [sortedData, setSortedData] = useState();

    useEffect(()=>{
      fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setEducationData(data.education))
    },[])

    useEffect(()=>{
      if (!educationData) return

      setSortedData([...educationData].sort((a, b) => parseDate(b.enddate) - parseDate(a.enddate)));
    },[educationData])

    if (!sortedData){
      return <p className="mt-20 text-neutral-400">Laddar utbildningar...</p>;
    }
    return <ul className="ml-10 border-l">
        {sortedData.map((edu, i) => (
        <li key={i} className="py-4 ml-10 relative pr-8">
        <p className="text-xs text-neutral-400">
            {edu.startdate} – {edu.enddate}
          </p>
          <a href={edu.websiteurl} target="_blank" className="h-10 rounded-full absolute -left-15 top-5.5 overflow-hidden"><img src={edu.logo} alt={edu.title} className="h-full object-cover" /></a>
          <h3 className="font-semibold">{edu.title}</h3>
          <p className="text-sm text-neutral-500">{edu.undertitle}</p>
          <ul className="list-disc text-neutral-300 list-outside ml-4 mt-2">
            {edu.bulletpoints.map((point, index) => (
            <li key={index} className="text-sm">{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
}