import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { TbTriangleInverted, TbTriangleSquareCircle } from 'react-icons/tb';
import { TiDivide } from 'react-icons/ti';
import { MdOutlineCropSquare } from 'react-icons/md';
import { CgShapeCircle } from 'react-icons/cg';

const SpreadIcons = () => {
	return (
		<div className='absolute h-[inherit] w-[100%] z-0'>
			<FaPlus className='text-green-700 absolute top-20 right-8  text-lg  opacity-[0.3]' />
			<TbTriangleInverted className='text-black-600 absolute top-60 left-24 text-lg font-black opacity-[0.3]' />
			<TbTriangleSquareCircle className='text-yellow-400 absolute top-32 left-10 text-xl opacity-[0.3]' />
			<TiDivide className='text-blue-700 absolute top-72 left-64 text-lg opacity-[0.3]' />
			<MdOutlineCropSquare className='text-orange-400 absolute top-[70%] left-[10%] text-lg opacity-[0.3]' />
			<CgShapeCircle className='text-green-400 absolute top-[90%] left-[40%] text-xl  opacity-[0.3]' />
			<TbTriangleInverted className='text-red-600 absolute top-[92%] left-[92%] text-lg font-black opacity-[0.3]' />

			<div className='w-20 h-20 rounded-lg bg-[red] opacity-[0.1] z-0 absolute top-52 -left-8'></div>
			<div className='w-12 h-12 rounded-full bg-primaryBlue opacity-[0.15] absolute top-28 -right-5'></div>
			<div className='w-6 h-6 rounded-full bg-primaryBlue opacity-[0.1] absolute top-[125px] right-[10px]'></div>
			<div className='w-72 h-72 rounded-full bg-green-500 opacity-[0.1] absolute top-[85%] -right-28'></div>
		</div>
	);
};

export default SpreadIcons;