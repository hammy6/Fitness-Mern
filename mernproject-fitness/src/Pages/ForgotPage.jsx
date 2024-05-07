import React from "react"
import Navbar from "../Components/Navbar"
import Forgot from "../Components/Forgot/Forgot"

export default function ForgotPage(){

    return(
        <div>
        <Navbar children={<Forgot/>}></Navbar>
        </div>
    )
}
