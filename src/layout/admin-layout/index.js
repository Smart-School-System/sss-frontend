import React, {useState} from 'react';
import Navbar from '../navbar';
import SideNav from '../side-nav';
import './styles.css';

const AdminLayout = ({ children }) => {
	const [isCollapsed, setCollapsed] = useState(false);
	const toggle = () => {
		setCollapsed(!isCollapsed);
		return !isCollapsed;
	};
	return (
		<div className='layout dark:bg-darkTheme4'>
			<SideNav toggler={toggle}/>
			<div className='content w-full' style={{marginLeft: isCollapsed ? '90px' : '290px'}}>
				<Navbar leftValue={isCollapsed ? '80px' : '280px'}/>
				<main className='w-full'>
					{children}
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;