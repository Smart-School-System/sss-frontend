import React, { useState } from 'react';
import Input from './form-input';
import SpreadIcons from './spread-icons';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import Logo from '../commons/logo';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../libs/axiosClient';

const LoginForm = () => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleLogin = () => {
        API.POST('/auth/login', { username, password })
            .then((res) => {
                localStorage.setItem('token', res.data.data.access_token)
                localStorage.getItem('token') && navigate('/student-profile')
            })
            .catch(err => {
                console.error(err.response.data.detail)
            })
    }

    return (
        <div className='w-[20%] h-full relative z-10 flex justify-center items-center'>
            <SpreadIcons />
            <div className="absolute top-5"><Logo /></div>
            <div className='flex flex-col space-y-4'>
                <h1 className='text-center'>Login</h1>
                <div className="relative flex flex-col">
                    <Input placeholder={'Username'} type={'text'} value={username} onChange={setUsername} />
                    <Input placeholder={'Password'} type={show ? 'text' : 'password'} value={password} show={show} setShow={setShow} onChange={setPassword} />
                    <span className="text-gray-500 absolute top-[70px] right-0 cursor-pointer" onClick={() => setShow(!show)}>{show ? <BsEyeSlash /> : <BsEye />}</span>
                </div>
                <Link to={'dashboard'} className='flex justify-center items-center font-[400] border-[1px] relative z-10 rounded-md border-gray-400 py-1 hover:border-primaryBlue hover:text-primaryBlue transition-all duration-300' onClick={handleLogin}>SignIn</Link>
            </div>
            <div className="absolute bottom-5"><p>Forgot Password ?</p></div>
        </div>
    );
};

export default LoginForm;