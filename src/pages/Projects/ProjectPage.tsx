import Contact from "../../components/Contact"
import ProjectProp from "../../components/ProjectProp"

function ProjectPage() {
    return (
        <div className="mt-44">
            <h1 className="text-[6em]">Selected Projects</h1>
            <div>
                <ProjectProp />
            </div>
            <Contact />
        </div>
    )
}

export default ProjectPage
