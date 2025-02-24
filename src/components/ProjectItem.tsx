
import styles from './ProjectItem.module.css';

interface ProjectItemProps {
    project: {
        id: number;
        title: string;
        description: string;
        technologies: string[];
        link: string;
        image: string;
    }
}

function ProjectItem({ project }: ProjectItemProps) {
    return (
        <div className={styles.project}>
            <img src={project.image} alt={project.title} loading='lazy' className={styles.image} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tecnologias: {project.technologies.join(', ')}</p>
            <a href={project.link} target='_blank' rel='noreferrer'>Ver projeto</a>
        </div>
    );
}

export default ProjectItem;