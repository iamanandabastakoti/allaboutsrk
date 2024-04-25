import React, { useEffect, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Admin = () => {
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
    const [adminLogged, setAdminLogged] = useState(false);
    const logIN = () => {
        if ((data.username && data.password) !== '') {
            if (data.username === `${import.meta.env.VITE_USERNAME}` && data.password === `${import.meta.env.VITE_PASSWORD}`) {
                localStorage.setItem('username', data.username);
                localStorage.setItem('password', data.password);
                setAdminLogged(true);
                setWrongAuth(false);
                setEmptyField(false);
            } else {
                setWrongAuth(true);
                setEmptyField(false);
            }
        } else {
            setEmptyField(true);
            setWrongAuth(false);
        }
    }

    useEffect(() => {
        const localUsername = localStorage.getItem('username');
        const localPassword = localStorage.getItem('password');
        if (localUsername === `${import.meta.env.VITE_USERNAME}` && localPassword === `${import.meta.env.VITE_PASSWORD}`) {
            setAdminLogged(true);
        }
    }, []);
    return (
        <div className='flex flex-col min-h-[80vh]'>
            {
                !adminLogged ?
                    <div className='p-4 bg-brandColor py-4 rounded-lg text-primaryBg flex flex-col justify-center min-h-[80vh] gap-4'>
                        <h5 className='text-xl font-semibold text-center'>Log In</h5>
                        <form className='flex flex-col gap-3'>
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
                                <div className='flex gap-1 items-center relative w-full'>
                                    <input className='border-2 border-borderColor text-primaryText rounded-lg p-2 w-[100%] focus:outline-none' type={`${showPass ? 'text' : 'password'}`} placeholder='Enter your password' name='password' onChange={handleChange} />
                                    <span className='text-primaryText text-xl w-[10%] p-2 absolute h-full flex justify-center items-center right-0' onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <FaRegEye /> : <FaRegEyeSlash />
                                        }
                                    </span>
                                </div>
                            </div>
                            {/* <span className='flex gap-1 justify-center'>
                        <input type="checkbox" onChange={() => setShowPass(!showPass)} />
                        <label>Show Password</label>
                    </span> */}
                        </form>
                        <button className='w-full bg-buttonColor p-2 rounded-lg flex justify-center items-center gap-1 text-lg' onClick={logIN}>
                            Log In
                        </button>
                    </div>
                    :
                    <div>Welcome Admin</div>
            }
        </div>
    )
}

export default Admin