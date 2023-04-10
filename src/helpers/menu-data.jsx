import React from 'react';
import { BsGridFill } from 'react-icons/bs';
import { FaUserGraduate, FaUserFriends } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';

export const menuList = [
	{
		path: 'dashboard',
		name: 'Dashboard',
		icon: <BsGridFill size={25}/>
	},
	{
		path: 'student',
		name: 'Student',
		icon: <FaUserGraduate size={25}/>,
	},
	{
		path: 'staff',
		name: 'Staff',
		icon: <FaUserFriends size={25}/>
	},
	{
		path: 'settings',
		name: 'Settings',
		icon: <IoSettings size={25}/>
	}
];