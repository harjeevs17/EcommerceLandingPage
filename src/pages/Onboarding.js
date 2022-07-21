import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInCall, signUpCall } from "../api/api";
import SecondaryButton from "../components/form/buttons/Secondarybutton";
import { UserContext } from "../App";
import Header from "../layout/header/Header";
import Login from "./onBoarding/Login";
import SignUp from "./onBoarding/SignUp";

const SignIn = ()=>{
    let history = useNavigate();
    const { state, dispatch } = useContext(UserContext);
    const [screenCheck,setScreenCheck] = useState(true); // true = sign Up screen && false == signIn screen
    const setScreenState = ()=>{
        if(!screenCheck){
            setScreenCheck(true)
        }else{
            setScreenCheck(false)
        }
    }
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch({ type: "USER", payload: user });
            history("/", { replace: true });
        } else {
          history("/signIn", { replace: true });
        }
    }, [dispatch, history]);    
    return(
        <>
        <Header methodCall = {setScreenState}/>
        {!screenCheck ? <Login/>:<SignUp/>}
        </>
    )
}
export default SignIn;