import React, { useState } from 'react';
//import user from '../../assets/im/ages/user.png';
import { FaUserAlt, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const TopHeader = () => {
	const [imgUrl, setImgUrl] = useState('');

	const handleFileInput = () => {
		const reader = new FileReader();
		reader.onload = () => {
			setImgUrl(reader.result);
		};
		reader.readAsDataURL(document.getElementById('file_input').files[0]);
	};

	const HoverShowIcon = ({ children, action, borders }) => {
		return (
			<div className={`${borders} w-full h-full bg-transparent hover:bg-gray-800/50 text-2xl flex justify-center items-center text-transparent hover:text-white cursor-pointer`} onClick={() => action()}>
				{children}
			</div>
		);
	};
	return (
		<div className='w-full bg-lightBlue/75 dark:bg-transparent dark:border-[1px] dark:border-darkThemeTextLight/50 rounded-xl h-[180px] flex items-center space-x-6 px-5 py-4'>
			<input id="file_input" type="file" accept='image.*' hidden onChange={handleFileInput} />
			<div className='w-[120px] h-[120px] bg-gray-200 dark:bg-darkTheme2 rounded-full flex justify-center items-center relative z-10'>
				<div className='absolute h-[inherit] w-[inherit] rounded-full flex justify-center items-center z-0'>
					<HoverShowIcon borders={'rounded-bl-[400px] rounded-tl-[400px]'} action={() => document.getElementById('file_input').click()}>
						<FaEdit />
					</HoverShowIcon>
					<HoverShowIcon borders={'rounded-br-[400px] rounded-tr-[400px]'}>
						<MdDelete />
					</HoverShowIcon>
				</div>
				{
					imgUrl !== '' ? <img src={imgUrl} alt="" className='w-full h-auto rounded-full' /> : <FaUserAlt className='w-20 h-20 text-greyFontColor' />
				}
			</div>
			<div className="h-full py-3 flex flex-col space-y-3">
				<h1 className="text-black dark:text-darkThemeTextLight font-extrabold text-2xl">Daniel Grant</h1>
				<p className="flex space-x-3 dark:text-darkThemeTextLight text-base"><span>UEB3504918</span><span>|</span><span>Class 3</span></p>
				<p className="flex space-x-3 dark:text-darkThemeTextLight text-base"><span>Male</span></p>
			</div>
		</div >
	);
};

export default TopHeader;