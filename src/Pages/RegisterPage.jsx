import React from 'react'
import Navbar from '../Components/Navbar'
import Register from '../Components/Register/Register'

export default function RegisterPage() {
  return (
    <div>
        <Navbar children={<Register/>}></Navbar>
    </div>
  )
}
