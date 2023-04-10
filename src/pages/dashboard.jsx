import React from 'react';
import PieChart from '../components/dashboard/piechart';
import BarChart from '../components/dashboard/barchart';
import AdminLayout from '../layout/admin-layout';
import { HiUserGroup } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import BestStudents from '../components/dashboard/best-student';


const DashboardPage = () => {
    return (
        <AdminLayout>
            <div className="w-full flex flex-col space-y-10 lg:flex-row lg:space-x-9 lg:space-y-0 h-screen" style={{ height: 'calc(100vh - 9rem)' }}>
                <div className="flex flex-col lg:flex-[0.7] space-y-8">
                    <div className="flex flex-col space-y-5 h-auto sm:flex-row sm:space-x-10 sm:space-y-0">
                        <div className="w-full h-fit rounded-lg flex justify-between items-center p-5" style={{ boxShadow: '0.4px 0.4px 10px #ddd' }}>
                            <div><p>Total Students</p><b>2901</b></div>
                            <HiUserGroup size={50} color={'aaa'} />
                        </div>
                        <div className="w-full h-fit rounded-lg flex justify-between items-center p-5" style={{ boxShadow: '0.4px 0.4px 10px #ddd' }}>
                            <div><p>Total Staff</p><b>72</b></div>
                            <MdGroup size={50} color={'aaa'} />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5 h-auto sm:flex-row sm:space-x-10 sm:space-y-0">
                        <div className="w-full flex justify-center items-center shadow-lg">
                            <PieChart
                                colors={['rgba(54, 162, 235, 0.2)', 'rgba(135, 255, 155, 0.2)']}
                                borderColors={['rgb(54, 162, 235)', 'rgb(135, 255, 155)']}
                                dataValues={[620, 409]}
                                labels={['Male', 'Female',]}
                            />
                        </div>
                        <div className="w-full flex justify-center items-center shadow-lg">
                            <PieChart
                                colors={['rgba(255, 99, 132, 0.2)', 'rgba(250, 255, 112, 0.2)']}
                                borderColors={['rgb(255, 99, 132)', 'rgb(250, 255, 112)']}
                                dataValues={[42, 6]}
                                labels={['Teacng', 'Non-',]}
                            />
                        </div>
                    </div>
                    <div className='w-full h-auto shadow-lg rounded-lg p-5'>
                        <BarChart />
                    </div>
                </div>
                <div className="flex lg:flex-[0.3] flex-col lg:overflow-y-auto p-7 space-y-4">
                    <h1 className="text-xl font-medium text-center">Best Performing Student</h1>
                    <div className="flex space-y-5 flex-col">
                        <BestStudents/>
                        <BestStudents/>
                        <BestStudents/>
                    </div>
                </div>
            </div>
        </AdminLayout>

    );
};

export default DashboardPage;