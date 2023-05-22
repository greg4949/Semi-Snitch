import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        switch (e.target.id) {
            case "email":
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
            default:
                break;
        }
    }

    const [login, { error }] = useMutation(LOGIN_USER);
    const formSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await login({ variables: { email, password }});
            if(data) {
                localStorage.setItem('id_token', data.login.token); 
                window.location.assign('/'); 
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='m-auto pt-20 container w-1/2 '>
            <form className='flex flex-col gap-5 ' onSubmit={formSubmit}>
                <label>Email</label>
                <input className='outline-1 outline outline-black w-1/3 ' id='email' type='input' onChange={handleChange} value={email}></input>
                <label>Password</label>
                <input className='outline-1 outline outline-black w-1/3 ' id='password' type='password' onChange={handleChange} value={password}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}