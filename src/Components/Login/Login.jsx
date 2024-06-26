import React, { useState } from 'react'
import { ApiHost } from '../../Data/Endpoints';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../../Data/AuthToken';


export default function Login() {


  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios.post('http://localhost:4000/user/login', { email, password })
        .then(response => {
          console.log('Login successful');
          //console.log(response.data["token"]);
          saveToken(response.data["token"]); // Save Token in Local Storage
          nav('/login/page')
        })  
        .catch(error => {
          console.error('Login error:', error.message);
        });
    } catch (error) {
      console.error('Login error:', error.message);
    }
  }

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="w-auto h-10 mx-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-2 font-bold leading-9 tracking-tight text-center text-gray-900 tex1t-2xl">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>

      

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e)=>{ setEmail(e.target.value) }}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
           
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(e)=>{ setPassword(e.target.value) }}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

       

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-3 text-sm text-center text-gray-500">
        Not a Member?{' '}
        <a href="/register/page" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Please Register Your Account
          
        </a>
      </p>
      <p className="mt-3 text-sm text-center text-gray-500">
        Forget Password?{' '}
        <a href="/forgot/page" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Reset Password
          
        </a>
      </p>
    </div>
  </div>
  )
}
