import Hero from '../../components/Hero'
import Project from '../../components/ui/Project'
import { Timeline } from './Timeline';
import doctor from '../../public/images/doctor.png';

const Home = () => {
    const data = [
        {
            title: "Mid 2024",
            content: (
                <div>
                    <p className="text-neutral-300 text-xs md:text-[1.3rem] leading-7 font-normal mb-8">
                        Secured an internship with the company that hosted my training, which provided an invaluable opportunity to apply my skills in a real-world environment. This experience allowed me to collaborate with a talented team, contribute to live projects, and deepen my understanding of industry best practices. It was a pivotal moment in my career, reinforcing my passion for technology and solidifying my path forward in the field.
                    </p>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-300 text-sm md:text-[1.3rem] leading-7 font-normal mb-8">
                        I started my career as a backend engineer, focusing on developing robust systems and optimizing server-side functionality . This role allowed me to work with a variety of technologies, including Node.js, Express, and
                        MongoDB before moving to laravel in mid 2024.

                    </p>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="text-neutral-300 text-xs md:text-[1.3rem] leading-7 font-normal mb-4">
                        Over time, I have gained valuable experience in building scalable applications, optimizing performance, and addressing complex technical challenges.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-base">
                            ✅ Developed and managed server-side logic, ensuring the stability and scalability of applications under heavy load.
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-base">
                            ✅ Implemented a real-time chat system, enabling seamless communication and collaboration between users and vendors.
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-base">
                            ✅ Enhanced the admin panel, providing advanced tools for efficient user and transaction management, simplifying administrative workflows.
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-base">
                            ✅ Integrated a secure and seamless payment gateway, offering smooth transaction experiences for both users and vendors.
                        </div>
                    </div>
                </div>
            ),
        },
    ];



    return (
        <div className='w-full'>
            <Hero />
            <Project />
            <Timeline data={data} />
        </div>
    )
}

export default Home

