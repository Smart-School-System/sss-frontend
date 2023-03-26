import React, {  useState } from 'react';
import Input from './form-input';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import Logo from '../commons/logo';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../libs/axiosClient';
import { LoaderButton } from '../commons/button';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(!loading)
        API.POST('/auth/login', { username, password })
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.data.access_token)
                    toast.success(`Login ${res.data.message}`)
                    navigate('/dashboard')
                }
                setLoading(false)
            })
            .catch(err => {
                if (err?.response.data.detail) {
                    toast.error(err.response.data.detail)
                    setLoading(false)
                    return;
                }
            })
    }

    return (
        <div className='w-full h-full space-y-5 md:w-fit md:h-auto relative flex flex-col justify-center shadow hover:shadow-xl rounded-xl items-center md:space-y-12 py-12 px-24 dark:bg-darkTheme4' style={{ transition: 'all 1s ease' }}>
            {/*<SpreadIcons />*/}
            <div className='flex justify-center items-center space-x-2'>
                <Logo />
                <h1 className='font-black text-xl text-darkFontColor dark:text-darkThemeTextLight'>Login</h1>
            </div>
            <form className="relative flex flex-col justify-center items-center space-y-8">
                <Input placeholder={'Username'} type={'text'} value={username} onChange={setUsername} />
                <div className='relative'>
                    <Input placeholder={'Password'} type={show ? 'text' : 'password'} value={password} show={show} setShow={setShow} onChange={setPassword} />
                    <span className="text-gray-500 absolute top-[20px] right-1 cursor-pointer" onClick={() => setShow(!show)}>{show ? <BsEyeSlash /> : <BsEye />}</span>
                    <Link className='text-xs text-primaryBlue'>Forgot Password?</Link>
                </div>
                <LoaderButton type={'submit'} onClick={handleLogin} loading={loading}>SignIn</LoaderButton>
            </form>
        </div>
    );
};

export default LoginForm;