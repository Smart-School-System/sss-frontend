import React, {useState} from 'react';
//import user from '../../assets/im/ages/user.png';
import { FaUserAlt } from 'react-icons/fa';

const TopHeader = () => {
	const [imgUrl, setImgUrl] = useState('');
    
	const handleFileInput = () => {
		const reader = new FileReader();
		reader.onload = () => {
			setImgUrl(reader.result);
		};
		reader.readAsDataURL(document.getElementById('file_input').files[0]);
	};
	return (
		<div className='w-full bg-lightBlue dark:bg-transparent dark:border-[1px] dark:border-darkThemeTextLight/50 rounded-xl h-[180px] flex items-center space-x-6 px-5 py-4'>
			{
				imgUrl !== '' ? <img src={imgUrl} alt="" className='w-[150px] h-[150px] rounded-full'/> : <FaUserAlt className='w-20 h-20 text-greyFontColor'/>
			}
			<div className="flex flex-col space-y-1">
				<input id="file_input" type="file" accept='image.*' hidden onChange={handleFileInput}/>
				<label className="text-sm font-medium cursor-pointer text-gray-900 bg-darkThemeTextLight px-3 py-2 rounded-lg" htmlFor="file_input">Choose File</label>
				<label className="text-sm font-medium text-darkThemeTextLight" htmlFor="file_input">No file chosen</label>
			</div>
		</div>
	);
};

export default TopHeader;