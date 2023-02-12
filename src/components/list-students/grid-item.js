import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import user from '../../assets/images/cat.jpg';
import { Bin, Pencil } from '../commons/special-icons';

const GridItem = (props) => {
	const [isPopped, setIsPopped] = useState(false);
	return (
		<div className='flex w-full p-10 justify-start rounded-2xl items-center space-x-6 relative shadow-custom dark:shadow-none dark:border-[1px] dark:border-darkThemeTextLight/50'>
			{/* Hoverable dropdown */}
			<div className='flex-[1] absolute top-5 right-5 flex justify-end items-center cursor-pointer bg-gray-400/50 rounded-xl p-1' onMouseEnter={() => setIsPopped(true)} onMouseLeave={() => setIsPopped(false)}>
				<BsThreeDotsVertical />
				<div className={`${!isPopped && 'hidden'} flex-col space-y-3 bg-white dark:bg-darkTheme1 border-transparent dark:border-darkTheme3 absolute top-[24px] -right-[50px] drop-shadow-md w-fit h-auto p-2 rounded-lg`}>
					<span className='flex justify-start p-2 px-5 items-center space-x-3 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg text-sm' onClick={() => { }}>
						<Pencil className='text-primaryBlue' />
						<span>Edit</span>
					</span>
					<span className='flex justify-start p-2 px-5 items-center space-x-3 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg text-sm' onClick={() => { }}>
						<Bin /><span>Delete</span>
					</span>
				</div>
			</div>

			<div className='flex justify-center items-center flex-[0.3]'>
				<img src={user} alt="user profile pic" className='w-full h-auto rounded-full' />
			</div>
			<div className='flex flex-col flex-[0.7] space-y-3 justify-start items-start h-full dark:text-darkThemeTextLight font-light'>
				<h1 className='font-normal text-xl'>{props.name}</h1>
				<p className='text-base flex space-x-2'><span>{props.address}</span><span>|</span><span>{props.dob}</span></p>
				<p className='text-base flex space-x-2'><span>{props.gender}</span><span>|</span><span>{props.class}</span></p>
			</div>
		</div>
	);
};

export default GridItem;