import React, { useEffect, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logInAdmin } from '../../redux/slices/AdminSlice';

const AdminLogin = () => {
    const [showPass, setShowPass] = useState(false);
    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const [emptyField, setEmptyField] = useState(false);
    const [wrongAuth, setWrongAuth] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const dispatch = useDispatch();
    const logIN = () => {
        if ((data.username && data.password) !== '') {
            if (data.username === `${import.meta.env.VITE_USERNAME}` && data.password === `${import.meta.env.VITE_PASSWORD}`) {
                localStorage.setItem('authData', JSON.stringify(data));
                setWrongAuth(false);
                setEmptyField(false);
                dispatch(logInAdmin());
            } else {
                setWrongAuth(true);
                setEmptyField(false);
            }
        } else {
            setEmptyField(true);
            setWrongAuth(false);
        }
    }
    return (
        <div className='p-4 bg-brandColor py-4 text-primaryBg flex justify-center items-center min-h-screen'>
            <div className='w-[30%] flex flex-col gap-4'>
                <h5 className='text-2xl font-semibold text-center font-MontserratAlternate underline'>Admin Log In</h5>
                <form className='flex flex-col gap-4'>
                    {
                        emptyField &&
                        <span className='text-red-600'>*Enter the username and password</span>
                    }
                    {
                        wrongAuth &&
                        <span className='text-red-600'>Wrong username or password</span>
                    }
                    <div>
                        <label htmlFor='username' className='px-2'>Username</label>
                        <input className='border-2 border-borderColor text-primaryText rounded-lg p-2 w-full focus:outline-none' type="text" placeholder='Enter your username' name='username' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='password' className='px-2'>Password</label>
                        <div className='flex gap-1 items-center relative w-full overflow-hidden'>
                            <input className='border-2 border-borderColor text-primaryText rounded-lg p-2 w-[100%] focus:outline-none' type={`${showPass ? 'text' : 'password'}`} placeholder='Enter your password' name='password' onChange={handleChange} />
                            <span className='text-primaryText text-xl w-[10%] p-2 absolute h-full flex justify-center items-center right-0 cursor-pointer hover:bg-borderColor rounded-xl' onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ? <FaRegEye /> : <FaRegEyeSlash />
                                }
                            </span>
                        </div>
                    </div>
                </form>
                <button className='w-full bg-buttonColor p-2 rounded-lg flex justify-center items-center gap-1 text-lg hover:brightness-75' onClick={logIN}>
                    Log In
                </button>
            </div>
        </div>
    )
}

export default AdminLogin