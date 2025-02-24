
import styles from "./Projects.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectItem from "../components/ProjectItem";
import { projects } from "../data/projects";

function Projects() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Meus Projetos</h1>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Projects;