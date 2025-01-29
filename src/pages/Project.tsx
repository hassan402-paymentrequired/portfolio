import { Cover } from '../../components/ui/Cover'
import { FollowerPointerCard } from '../../components/Pointer'
import ProjectCard from '../../components/ProjectCard'
const Project = () => {
    return (
        <div className="w-full">

            <div className="container flex-col m-auto h-96 flex items-center justify-center">
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    You can call me an Entertainer <br /> at the same time i be <Cover> {'<Coder />'}</Cover>

                </h1>
                <p>Why don't you just take a look at some of my cookings and see what you think?</p>
            </div>

            <div className="flex w-full flex-wrap p-10 max-w-7xl m-auto">

                <FollowerPointerCard
                    title="hassan"
                >
                    <ProjectCard />
                </FollowerPointerCard>


                <h2 className='text-3xl px-10'>Still Under Contruction </h2>
            </div>


        </div>
    )
}

export default Project