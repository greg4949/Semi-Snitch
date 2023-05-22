import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleChange = (e) => {
        switch (e.target.id) {
            case "email":
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'confirmPassword':
                setConfirmPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    const [addUser, { error }] = useMutation(ADD_USER);
    const formSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        try {
            const { data } = await addUser({ variables: { email, password }});
            if(data) {
                localStorage.setItem('id_token', data.addUser.token);  // save token
                window.location.assign('/');  // refresh the page
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='m-auto pt-20 container w-1/2 '>
            <form className='flex flex-col gap-5 ' onSubmit={formSubmit}>
                <label>Email</label>
                <input className='outline-1 outline outline-black w-1/3 'id='email' type='input' onChange={handleChange} value={email}></input>
                <label>Password</label>
                <input className='outline-1 outline outline-black w-1/3 'id='password' type='password' onChange={handleChange} value={password}></input>
                <label>Confirm Password</label>
                <input className='outline-1 outline outline-black w-1/3 'id='confirmPassword' type='password' onChange={handleChange} value={confirmPassword}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}