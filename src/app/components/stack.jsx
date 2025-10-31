const stackList = {
  frontend: [
    { name: "HTML5", src: "./svg/frontend/html-5.svg" },
    { name: "CSS3", src: "./svg/frontend/css-3.svg" },
    { name: "SASS", src: "./svg/frontend/sass.svg" },
    { name: "JavaScript", src: "./svg/frontend/javascript.svg" },
    { name: "TypeScript", src: "./svg/frontend/typescript-icon.svg" },
    { name: "React", src: "./svg/frontend/react.svg" },
    { name: "Astro", src: "./svg/frontend/astro-icon.svg" },
  ],
  backend: [
    { name: "Node.js", src: "./svg/backend/nodejs-icon.svg" },
    { name: "Express.js", src: "./svg/backend/express.svg" },
    { name: "Python", src: "./svg/backend/python.svg" },
    { name: "Flask", src: "./svg/backend/flask.svg" },
    { name: "MongoDB", src: "./svg/backend/mongodb-icon.svg" },
    { name: "MySQL", src: "./svg/backend/mysql-icon.svg" },
    { name: "Supabase", src: "./svg/backend/supabase-icon.svg" },
  ],
  tools: [
    { name: "Git", src: "./svg/tools/git-icon.svg" },
    { name: "GitHub", src: "./svg/tools/github.svg" },
    { name: "Postman", src: "./svg/tools/postman-icon.svg" },
    { name: "NPM", src: "./svg/tools/npm-icon.svg" },
    { name: "Vercel", src: "./svg/tools/vercel-icon.svg" },
  ],
};

export default function TechStack(){
    return <section className="mt-20">
        <h3 className="text-4xl font-bold font-caveat tracking-wider mb-8">Tech Stack</h3>
        <div className="border border-neutral-800 min-h-20 rounded-lg mt-2 shadow-[0_0_5px_0_oklch(25%_0_0)]">
            <h5 className="mt-5 p-4 font-bold text-xl">Frontend</h5>
            <hr className="border-neutral-800"/>
            <div className="flex m-4 justify-between">
                {stackList.frontend.map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">
                        <img src={item.src} alt="Icon" className="h-8"/>
                        <p className="text-sm mt-0.5">{item.name}</p>
                    </div>
                ))}
            </div>

            <h5 className="mt-5 p-4 font-bold text-xl">Backend</h5>
            <hr className="border-neutral-800"/>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] m-4 gap-2">
                {stackList.backend.map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">
                        <img src={item.src} alt="Icon" className="h-8"/>
                        <p className="text-sm mt-0.5">{item.name}</p>
                    </div>
                ))}
            </div>

            <h5 className="mt-5 p-4 font-bold text-xl">Verktyg</h5>
            <hr className="border-neutral-800"/>
            <div className="flex m-4 justify-between">
                {stackList.tools.map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center">
                        <img src={item.src} alt="Icon" className="h-8"/>
                        <p className="text-sm mt-0.5">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
}