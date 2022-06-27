import PrimaryButton from "../../components/form/buttons/PrimaryButton"
import SecondaryButton from "../../components/form/buttons/Secondarybutton";
import { AiOutlineMenu } from "react-icons/ai";
import { UserContext } from "../../App";
import { useContext } from "react";
import { useNavigate , Link } from 'react-router-dom';
const Header = (props)=>{
    const { state, dispatch } = useContext(UserContext);
    let history = useNavigate();
    const logOut = ()=>{
        localStorage.clear();
        dispatch({ type: "CLEAR" });
        history("/signIn", { replace: true });
    }
    const WhenLoggedIn = ()=>{
        return(
            <div className="header">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"/>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
            </ul>
            <div className="btn-containers">
                <PrimaryButton title="Sign Out" methodCall={logOut}/>
            </div>
        </div>
        )
    }
    const WhenNotLoggedIn = (props)=>{
        return(
            <div className="header">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"/>
            <div className="btn-containers">
                <SecondaryButton title="Sign Up" methodCall={props.methodCall}/>
                <PrimaryButton title="Sign In" methodCall={props.methodCall}/>
            </div>
        </div>
        )
    }
    return(
        !state?<WhenNotLoggedIn methodCall={props.methodCall}/>:<WhenLoggedIn methodCall={props.methodCall}/>
    )
}
export default Header;