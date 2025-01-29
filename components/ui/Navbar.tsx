import { Link } from 'react-router-dom'
// import {} from '@heroicons/react'
const Navbar = () => {
    return (
        <div className='fixed h-auto rounded-xl  flex items-center justify-evenly backdrop-blur-md bg-neutral-800 w-auto  left-[50%] -translate-x-[50%] top-[10px] z-10'>
            <Link className='px-3 text-sm font-semibold py-2' to={'/'}>
                home
            </Link>
            <Link className='px-3 text-sm font-semibold py-2' to={'/my-project'}>
                Projects
            </Link>
       
        </div>
    )
}

export default Navbar