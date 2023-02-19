import React from 'react';
import LoginForm from '../../components/auths/login-form';
import ImageCarousel from '../../components/auths/image-carousel';

const LoginPage = () => {
	return (
		<div className='w-full h-screen overflow-hidden flex'>
			<ImageCarousel/>
			<LoginForm/>
		</div>
	);
};

export default LoginPage;