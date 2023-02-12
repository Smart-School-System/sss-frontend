import React from 'react';
import { Bin, Pencil } from '../commons/special-icons';

const ListItem = (props) => {
	return (
		<div className='w-full bg-white dark:bg-transparent rounded-md flex items-center justify-center py-4 px-3 cursor-pointer dark:text-gray-400 font-light hover:bg-[#E7F4FE]/75 dark:hover:bg-darkTheme1' style={{transition: 'all 0.5s ease'}}>
			<div className="flex items-center justify-start space-x-10 flex-[1.43]">
				<span>{props.id}</span>
			</div>
			<div className="flex items-center justify-start flex-[1.43]">
				<span>{props.name}</span>
			</div>
			<div className="flex items-center justify-start flex-[1.43]">
				<span>{props.gender}</span>
			</div>
			<div className="flex items-center justify-start flex-[1.43]">{props.class}</div>
			<div className="flex items-center justify-start flex-[1.43]">{props.dob}</div>
			<div className="flex items-center justify-start flex-[1.43]">{props.address}</div>
			<div className="flex items-center justify-center space-x-7 flex-[1.43] text-primaryBlue">
				<Bin onClick={()=> props.delete()}/>
				<Pencil className='text-primaryBlue' onClick={()=>props.edit()}/>
			</div>
		</div>
	);
};

export default ListItem; 