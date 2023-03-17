import React from 'react'
import empty from '../assets/images/page-not-found.svg'

const PageNotFound = () => {
    return (
        <div className='w-100 h-100 flex justify-center items-center'>
            <img src={empty} alt="Page not found" className='w-52' />
            <div className="flex justify-center items-center">
                <h1 className='text-primaryBlue text-8xl font-thin'>Sorry, this page could not be found</h1>
            </div>
        </div>
    )
}

export default PageNotFound