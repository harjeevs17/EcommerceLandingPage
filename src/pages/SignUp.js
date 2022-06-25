import { useState } from "react";
import { signInCall, signUpCall } from "../api/api";
import SecondaryButton from "../components/form/buttons/Secondarybutton";
import Header from "../layout/header/Header";

const SignUp = ()=>{
    const signUp = (event)=>{
        if(!name || !email || !password || !phone){
            alert("Enter all fields")
        }else{
            const data = {
                name,email,password,phone
            }
            const fetchAPI = async () => {
                await signUpCall(data).then((res) => {
                    
                });
              };
            fetchAPI();
        }
    }
    const [name,setname] = useState(false);
    const [email,setEmail] = useState(false);
    const [password,setPassword] = useState(false);
    const [phone,setPhone] = useState(false);
    return(
        <>
        <Header/>
        <div className="onboardingBox">
            <form>
                <input type="text" name="name" placeholder="name" onChange={(e)=>setname(e.target.value)}/>
                <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <input type="text" name="phone" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
                <SecondaryButton title="Sign Up" methodCall={signUp}/>
            </form>
        </div>
        </>
    )   
}
export default SignUp;