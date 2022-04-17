import useProjects from '../hooks/useProjects';
import ProjectListSkeleton from './skeletons/ProjectList.skeleton';
import Project from './_Project';

function RecProjects() {
    const { loading, projects } = useProjects();

    return (
        <>
            {loading && <ProjectListSkeleton />}
            <div className="projects__list">
                {projects.map((project) => (
                    <div className="projects__item" key={project.id}>
                        <Project
                            project={project}
                            classPrefix="projects__item-"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default RecProjects;
