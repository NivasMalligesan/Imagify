import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { FaLock, FaMailBulk, FaUser } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';  // ✅ Only import AppContext
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Login');
    
    const {setShowLogin, setToken, setUser, backendUrl } = useContext(AppContext);
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (state === 'Login') {
                const { data } = await axios.post(backendUrl+"/api/user/login", { email, password });

                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                } else {
                    toast.error(data.message)
                }
            }else{
                const { data } = await axios.post(backendUrl+"/api/user/register", {name, email, password });

                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    setShowLogin(false);
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            console.error("Login Error:", error);
        }
    };

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0
            z-10 backdrop-blur-sm bg-black/30 flex justify-center 
            items-center '>
            <motion.form 
                onSubmit={onSubmitHandler}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='relative bg-white p-10 rounded-xl text-slate-500'
            >
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                <p className='text-sm mt-2'>Welcome Back !! Please Sign In To Continue</p>

                {state !== 'Login' && (
                    <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                        <FaUser />
                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Full Name" className='outline-none text-sm' required />
                    </div>
                )}

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <FaMailBulk />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email Id" className='outline-none text-sm' required />
                </div>

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <FaLock />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" className='outline-none text-sm' required />
                </div>

                <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password ?</p>
                <button className='bg-blue-600 w-full text-white py-2 rounded-full cursor-pointer'>{state === 'Login' ? 'Login' : 'Create Account'}</button>

                {state === 'Login' ? (
                    <p className='mt-5 text-center'>Don't Have An Account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
                ) : (
                    <p className='mt-5 text-center'>Already Have An Account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span></p>
                )}

                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />
            </motion.form>
        </div>
    );
};

export default Login;
