import React, { useEffect } from 'react'
import AdminHome from './AdminHome';
import { useDispatch, useSelector } from 'react-redux';
import AdminLogin from './AdminLogin';
import { logInAdmin } from '../../redux/slices/AdminSlice';

const Admin = () => {
    const isAdminLogged = useSelector((state) => {
        return state.admin.isLoggedIn;
    })
    const dispatch = useDispatch();
    useEffect(() => {
        const localAuthData = JSON.parse(localStorage.getItem('authData'));
        if (localAuthData?.username === `${import.meta.env.VITE_USERNAME}` && localAuthData?.password === `${import.meta.env.VITE_PASSWORD}`) {
            dispatch(logInAdmin());
        }
    }, [isAdminLogged]);
    return (
        <div className='flex flex-col min-h-screen'>
            {
                isAdminLogged ?
                    <AdminHome />
                    :
                    <AdminLogin />
            }
        </div>
    )
}

export default Admin