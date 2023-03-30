import React from 'react'

const ProfileDetails = (props) => {
    return (
        <div className='grid grid-cols-2 gap-10'>
            <div className='flex flex-col justify-start w-full mb-5  shadow-lg bg-slate-50 p-5 rounded-xl'>
                <h1 className='text-lg font-medium mb-2'>Personal Information</h1>
                <div className='flex justify-start space-x-16 flex-wrap'>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Firstname</span>
                        <span>Francis</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Lastname</span>
                        <span>Owusu</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Othername</span>
                        <span>N/A</span>
                    </p>
                </div>
                <div className='flex justify-start space-x-16 flex-wrap'>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Date of Birth</span>
                        <span>1996-09-21</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Gender</span>
                        <span>Male</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Height</span>
                        <span>100cm</span>
                    </p>
                </div>
                <div className='flex justify-start space-x-16 flex-wrap'>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Blood Group</span>
                        <span>A</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Blood Genotype</span>
                        <span>B</span>
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-start w-full mb-5  shadow-lg bg-pink-50 p-5 rounded-xl'>
                <h1 className='text-lg font-medium mb-2'>Enrollment</h1>
                <div className='flex justify-start space-x-16 flex-wrap'>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Date of Admission</span>
                        <span>2016-06-12</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Class</span>
                        <span>6</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Term/Semester</span>
                        <span>Second (2)</span>
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-start w-full mb-5  shadow-lg bg-green-50/50 p-5 rounded-xl'>
                <h1 className='text-lg font-medium mb-2'>Address Information</h1>
                <div className='flex justify-start space-x-16 flex-wrap'>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Residential Address</span>
                        <span>Takoradi, Anaji</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Postal Address</span>
                        <span>P.O Box MC 3484</span>
                    </p>
                </div>
                <div className='flex justify-start space-x-16 flex-wrap'>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Email Address</span>
                        <span>N/A</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Telephone</span>
                        <span>+233202070075</span>
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-start w-full mb-5'>
                <h1 className='text-lg font-medium mb-2'>Other</h1>
                <div className='flex justify-start space-x-16 flex-wrap'>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Nationality</span>
                        <span>Ghanaian</span>
                    </p>
                    <p className='flex flex-col mb-4'>
                        <span className='text-gray-500'>Religion</span>
                        <span>Christian</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ProfileDetails