import RenderProjects from "../components/projects/renderProjects"

export default function Projects(){
    return <div className="mx-auto max-w-3xl px-8 py-6 flex justify-between">
        <main>
            <h1 className="text-5xl font-bold mb-10 font-caveat tracking-wider">Project</h1>
            <RenderProjects num="*"/>
        </main>
    </div>
}