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
            <div className={`content w-full ${isCollapsed ? 'md:ml-[80px]' : 'md:ml-[250px]'}`}>
				<Navbar left={isCollapsed ? 'md:ml-[80px]' : 'md:ml-[250px]'}/>
				<main className='w-full'>
					{children}
				</main>
			</div>
		</div>
	);
};

export default AdminLayout;