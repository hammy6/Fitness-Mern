import React from "react"
import Navbar from "../../Components/Navbar"
import ResetPas from "../../Components/Resetpass/ResetPas"



export default function ResetPasswordPage(){

    return(
        <div>
        <Navbar children={<ResetPas/>}></Navbar>
        </div>
    )
}