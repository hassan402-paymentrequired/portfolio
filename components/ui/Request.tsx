import React from 'react'
import Button from '../Button'

const Request = () => {
    return (
        <div className='w-full h-[400px] mt-10 max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10'>
            <h2 className='text-neutral-500 text-5xl font-bold'>What can we do Together?</h2>
            <div className="gap-x-20 flex items-center justify-center mt-10 w-full h-full">
                {/* <span>men</span> */}
                <Button title='Need Help' position='-top-10' />
                <Button title='Contact' position='top-20' />
                <Button title='Hire Me' />
                <Button title='Connect With Me' position='-top-20' />
            </div>
        </div>
    )
}

export default Request