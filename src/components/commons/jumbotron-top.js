import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
import { BsFileEarmarkArrowDownFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {Button} from './button';

const JumbotronHeader = () => {
	const navigate = useNavigate();
	return (
		<div className='w-full grid grid-cols-2'>
			<div className='text-darkThemeTextLight text-base flex items-center space-x-2 border-[1px] border-gray-300 dark:border-darkThemeTextLight p-2 rounded-lg w-fit'>
				<span className='flex items-center gap-1'><RiErrorWarningFill className='text-2xl text-darkFontColor dark:text-darkThemeTextLight'/> Setup a student page for your school.</span> 
				<span className='text-primaryBlue cursor-pointer hover:underline'>Learn more about adding a Student.</span>
			</div>
			<div className='flex items-center justify-end space-x-3'>
				<Button action={() => navigate('/new-student')} url={'/new-student'}><MdAdd/><span>Add Student</span></Button>
				<Button bgVariant={'bg-transparent'} textVariant={'text-primaryBlue'}><BsFileEarmarkArrowDownFill /><span>Download Report</span></Button>
			</div>
		</div>
	);
};

export default JumbotronHeader;