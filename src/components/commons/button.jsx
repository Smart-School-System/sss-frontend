import React from 'react';
import { PreloaderButton } from './preloader';

export const Button = (props) => {
    return (
        <button style={{ transition: 'all 0.8s' }} className={`flex justify-between items-center space-x-2 text-sm shadow-lg rounded-lg w-auto h-auto px-3 py-2 border-[1px] ${props.borderColor ? props.borderColor : 'border-primaryBlue'}  ${props.bgVariant ? props.bgVariant : 'bg-primaryBlue'} ${props.textVariant ? props.textVariant : 'text-white'}`}
            onClick={() => props.action(props.url && props.url)}>
            {props.children}
        </button>
    );
};


export const LoaderButton = (props) => {
    return (
        <>
            {
                props.loading ? <PreloaderButton /> :
                    <button style={{ transition: 'all 0.8s' }} className='flex justify-center items-center w-full border-[1px] relative z-10 rounded-md border-gray-400 py-1 hover:border-primaryBlue hover:text-primaryBlue transition-all duration-300'
                        onClick={(e) => props.onClick(e)} disabled={props.loading}>
                        {props.children}
                    </button>
            }
        </>
    );
};
