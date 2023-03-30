import React from 'react'

const BestStudents = () => {
  return (
      <div className="bg-white rounded-lg p-4 w-full max-w-2xl" style={{boxShadow: '0.4px 0.4px 10px rgba(0,0,0,0.1)'}}>
          <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://source.unsplash.com/100x100/?person" alt="Profile" />
              </div>
              <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
                  <p className="text-sm text-gray-500">Class 3</p>
                  <p className="text-sm text-gray-500">Overall best in mathematics</p>
              </div>
              <div className="flex-shrink-0">
                  <button className="hover:bg-primaryBlue/30 bg-transparent border-[1px] border-primaryBlue text-primaryBlue font-normal py-[2px] px-1 rounded">View</button>
              </div>
          </div>
      </div>

  )
}

export default BestStudents