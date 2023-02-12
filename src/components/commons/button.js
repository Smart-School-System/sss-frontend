import React from 'react';

const Button = (props) => {
	return (
		<button style={{transition: 'all 0.8s'}} className={`flex justify-between items-center space-x-2 text-sm shadow-lg rounded-lg w-auto h-auto px-3 py-2 border-[1px] ${props.borderColor ? props.borderColor : 'border-primaryBlue'}  ${props.bgVariant ? props.bgVariant : 'bg-primaryBlue'} ${props.textVariant ? props.textVariant : 'text-white'}`}
			onClick={() => props.action(props.url && props.url)}>
			{props.children}
		</button>
	);
};

export default Button;