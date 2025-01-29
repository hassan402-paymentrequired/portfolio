import React from 'react'
import imag from '../public/images/doctor.png'

const ProjectCard = () => {
    return (
       <div className="flex bg-neutral-800 flex-col max-w-[22rem] h-[25rem] p-1 overflow-hidden rounded-lg shadow-md">
            <div>
                <img src={imag} alt="" className="object-cover w-full h-full rounded-lg" />
               </div>
        </div>
    )
}

export default ProjectCard