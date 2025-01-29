import React from 'react'
import LogoWall from '../span';
import git from '../../public/images/git.png'
import js from '../../public/images/js.png'
import php from '../../public/images/php.png'
import java from '../../public/images/java.png'
import react from '../../public/images/react.png'
import node from '../../public/images/node-js.png'
import vs from '../../public/images/vsc.png'

const Project = () => {
  const logoImgs = [
    { imgUrl: git, altText: "React  Logo" },
    { imgUrl: js, altText: "React  Logo" },
    { imgUrl: php, altText: "React  Logo" },
    { imgUrl: vs, altText: "React  Logo" },
    { imgUrl: java, altText: "React  Logo" },
    { imgUrl: react, altText: "React  Logo" },
    { imgUrl: node, altText: "React  Logo" }
  ];
  return (

    <div className='h-auto w-full relative mt-10'>
      <h1 className='px-10 max-sm:px-5 text-4xl'>My Tools 💻</h1>
      <LogoWall
        items={logoImgs}
        direction='horizontal'
        pauseOnHover={true}
        size='clamp(8rem, 1rem + 20vmin, 25rem)'
        duration='60s'
        // bgColor='#060606'
        bgAccentColor='#111111'
      />
    </div>
  )
}

export default Project