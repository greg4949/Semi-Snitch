import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value)
        break;
      case 'password':
        setPassword(e.target.value)
        break;
      default:
        break;
    }
  }
  const [login, { error }] = useMutation(LOGIN_USER);
  const formSubmit = async (e) => {
    e.preventDefault()
    try {
        const { data } = await login({ variables: { email, password }});
        if(data) {
            localStorage.setItem('id_token', data.login.token); 
            window.location.replace('/')
        }
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-800'>
      <form className='w-full max-w-md bg-gray-900 rounded px-8 pt-6 pb-8 mb-4 text-white' onSubmit={formSubmit}>
        <div className='mb-4'>
          <label className='block text-white text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white' id='email' type='input' onChange={handleChange} value={email} />
        </div>
        <div className='mb-6'>
          <label className='block text-white text-sm font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white' id='password' type='password' onChange={handleChange} value={password} />
        </div>
        <div className='flex items-center justify-between'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}
