import React from 'react';

const ListHeader = () => {
	return (
		<div className='w-full flex items-center justify-between py-4 px-3 bg-[#E7F4FE] dark:bg-darkTheme1 rounded-lg'>
			<div className="flex items-center justify-start  text-primaryBlue font-bold flex-[1.43]">
				<span>ID</span>
			</div>
			<div className="flex items-center justify-start  text-primaryBlue font-bold flex-[1.43]">
				<span>Name</span>
			</div>
			<div className="flex items-center justify-start text-primaryBlue font-bold flex-[1.43]">
				<span>Gender</span>
			</div>
			<div className="flex items-center justify-start text-primaryBlue font-bold flex-[1.43]">Class</div>
			<div className="flex items-center justify-start text-primaryBlue font-bold flex-[1.43]">Date of Birth</div>
			<div className="flex items-center justify-start text-primaryBlue font-bold flex-[1.43]">Address</div>
			<div className="flex items-center justify-center text-primaryBlue font-bold flex-[1.43]">
                Actions
			</div>
		</div>
	);
};

export default ListHeader;