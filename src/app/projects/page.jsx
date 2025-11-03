import RenderProjects from "../components/projects/renderProjects"

/**
 * Render the Projects page with a heading and a project list.
 *
 * Displays a centered layout containing the page title and the RenderProjects component.
 * @returns {JSX.Element} The JSX element for the Projects page.
 */
export default function Projects(){
    return <div className="mx-auto max-w-3xl px-8 py-6 flex justify-between">
        <main>
            <h1 className="text-5xl font-bold mb-10 font-caveat tracking-wider">Project</h1>
            <RenderProjects num="*"/>
        </main>
    </div>
}