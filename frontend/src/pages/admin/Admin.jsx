import React, { useEffect, useState } from 'react'
import AdminHome from './AdminHome';
import { useDispatch, useSelector } from 'react-redux';
import AdminLogin from './AdminLogin';
import { logInAdmin } from '../../redux/slices/AdminSlice';
import axios from 'axios';
import LoadingScreen from '/public/animations/loading-screen.json';
import Lottie from 'lottie-react';

const Admin = () => {
    const isAdminLogged = useSelector((state) => {
        return state.admin.isLoggedIn;
    })
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const loginFunc = async () => {
        const localAuthData = JSON.parse(localStorage.getItem('authData'));
        const response = await axios.post(`${import.meta.env.VITE_API}/admin/login`, localAuthData);
        // console.log(response.data);
        if (response.data === 'Authorized') {
            dispatch(logInAdmin());
        }
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }
    useEffect(() => {
        // const localAuthData = JSON.parse(localStorage.getItem('authData'));
        loginFunc()
        // if (localAuthData?.username === `${import.meta.env.VITE_USERNAME}` && localAuthData?.password === `${import.meta.env.VITE_PASSWORD}`) {
        //     dispatch(logInAdmin());
        // }
    }, [isAdminLogged]);
    return (
        <div className='flex flex-col min-h-screen w-screen'>
            {
                loading ?
                    <Lottie animationData={LoadingScreen} className='h-screen' />
                    :
                    isAdminLogged ?
                        <AdminHome />
                        :
                        <AdminLogin />

            }
        </div>
    )
}

export default Admin