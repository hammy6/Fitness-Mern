import React from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login/Login'

export default function LoginPage() {
  return (
    <div>
        <Navbar children={<Login/>}></Navbar>
    </div>
  )
}
