import React from 'react'

const BasicDetails = (props) => {
    return (
        <div className="flex flex-col w-full rounded-md shadow-md hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out h-fit">
            <div className="flex justify-center w-full">

                <div className="h-48 w-48 rounded-full overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src={props.profileImage}
                        alt="Profile"
                    />
                </div>
            </div>
            <div className="flex flex-col p-4">
                <h2 className="text-xl font-semibold">{`${props.first_name} ${props.last_name}`}</h2>
                <div className="py-3">
                <p className="text-gray-500">STU2023690</p>
                <p className="text-gray-500">Student of Class 3</p>
                </div>
                <p className="mt-4"></p>
            </div>
        </div>

    )
}

export default BasicDetails