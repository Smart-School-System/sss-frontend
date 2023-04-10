import React from 'react'
import './styles.css'

export const Preloader = () => {
    return (
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export const PreloaderButton = () => {
    return (
        <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primaryBlue"></div>
        </div>
    )
}