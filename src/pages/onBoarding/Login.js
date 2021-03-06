import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInCall } from "../../api/api";
import { UserContext } from "../../App";
import SecondaryButton from "../../components/form/buttons/Secondarybutton";

const Login = ()=>{
    const [email,setEmail] = useState(false);
    const [password,setPassword] = useState(false);
    const [userData,setUserData] = useState({});
    const { state, dispatch } = useContext(UserContext);
    const [name,setname] = useState(false);
    const [phone,setPhone] = useState(false);
   

    let history = useNavigate();
    useEffect(()=>{
        if(userData.user!=null){
            localStorage.setItem("jwt", userData.token);
            localStorage.setItem("user", JSON.stringify(userData.user));
            dispatch({ type: "USER", payload: userData.user });
            history("/", { replace: true });
        }
    },[userData,history,dispatch])
    const signIn = (event)=>{
        if(!email || !password){
            alert("Enter all fields")
        }else{
            const data = {
                email,password
            }
            const fetchAPI = async () => {
                await signInCall(data,setUserData).then((res) => {
                    //loading code
                });
              };
            fetchAPI();
        }
    }
    return(
        <div className="onboardingBox">
            <form>
                <input type="text" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" name="username" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <SecondaryButton title="Sign In" methodCall={signIn}/>
            </form>
        </div>
    )
}
export default Login;