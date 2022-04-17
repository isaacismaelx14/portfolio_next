import Skeleton from 'react-loading-skeleton';

function ProjectListSkeleton() {
    return (
        <Skeleton
            count={5}
            containerClassName="projects__list"
            height={300}
            inline
        />
    );
}

export default ProjectListSkeleton;
