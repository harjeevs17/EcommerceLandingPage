import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInCall, signUpCall } from "../api/api";
import SecondaryButton from "../components/form/buttons/Secondarybutton";
import { UserContext } from "../App";
import Header from "../layout/header/Header";
import Login from "./onBoarding/Login";
import SignUp from "./onBoarding/SignUp";

const SignIn = ()=>{
    const [screenCheck,setScreenCheck] = useState(true); // true = sign Up screen && false == signIn screen
    const setScreenState = ()=>{
        if(!screenCheck){
            setScreenCheck(true)
        }else{
            setScreenCheck(false)
        }
    }
    return(
        <>
        <Header methodCall = {setScreenState}/>
        {!screenCheck ? <Login/>:<SignUp/>}
        </>
    )
}
export default SignIn;