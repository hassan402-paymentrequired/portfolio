
import React from 'react'

const AboutCode = () => {
    const aboutMe = {
  name: "Hassan",
  profession: "Web Developer",
  location: "Lagos, Nigeria",
  specializations: ["Front-End Development", "Full-Stack Development", "UI/UX Design"],
  background: "Computer Science",
  hobbies: ["Hiking", "Reading", "Experimenting with New Technologies"],
  message: "I’m always open to new opportunities and collaborations, so feel free to reach out!"
};

    return (
        <div className="px-6 pt-6 pb-14">
            <h2 className="text-2xl font-semibold text-white">About Me</h2>
            <p className="mt-4 text-gray-300">
                Hello! I'm <span className="font-bold">{aboutMe.name}</span>, a passionate{" "}
                <span className="font-bold">{aboutMe.profession}</span> based in{" "}
                <span className="font-bold">{aboutMe.location}</span>. I specialize in{" "}
                {aboutMe.specializations.map((skill, index) => (
                    <span key={index} className="text-blue-400">
                        {skill}
                        {index < aboutMe.specializations.length - 1 && ", "}
                    </span>
                ))}
                .
            </p>
            <p className="mt-2 text-gray-300">
                With a background in{" "}
                <span className="font-bold">{aboutMe.background}</span>, I'm driven to
                continuously learn and grow.
            </p>
            <p className="mt-2 text-gray-300">
                When I'm not coding, you can find me{" "}
                {aboutMe.hobbies.map((hobby, index) => (
                    <span key={index} className="italic">
                        {hobby}
                        {index < aboutMe.hobbies.length - 1 && ", "}
                    </span>
                ))}
                .
            </p>
            <p className="mt-2 text-gray-300">{aboutMe.message}</p>
        </div>

    )
}

export default AboutCode