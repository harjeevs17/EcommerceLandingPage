import PrimaryButton from "../../components/form/buttons/PrimaryButton"
import SecondaryButton from "../../components/form/buttons/Secondarybutton";
import { AiOutlineMenu } from "react-icons/ai";
import { UserContext } from "../../App";
import { useContext } from "react";
import { useNavigate , Link } from 'react-router-dom';
const Header = ()=>{
    const { state, dispatch } = useContext(UserContext);
    let history = useNavigate();
    const navigateToSignUpPage = ()=>{
        history("/signUp", { replace: true });
    }
    const navigateToSignInPage = ()=>{
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
                <PrimaryButton title="Sign Out"/>
            </div>
        </div>
        )
    }
    const WhenNotLoggedIn = ()=>{
        return(
            <div className="header">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"/>
            <div className="btn-containers">
                <SecondaryButton title="Sign Up" methodCall={navigateToSignUpPage}/>
                <PrimaryButton title="Sign In" methodCall={navigateToSignInPage}/>
            </div>
        </div>
        )
    }
    return(
        !state?<WhenNotLoggedIn/>:<WhenLoggedIn/>
    )
}
export default Header;