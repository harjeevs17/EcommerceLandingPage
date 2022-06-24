import PrimaryButton from "../../components/form/buttons/PrimaryButton"
import SecondaryButton from "../../components/form/buttons/Secondarybutton";

const Header = ()=>{
    return(
        <div className="header">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"/>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
            <div className="btn-containers">
                <SecondaryButton title="Sign Up"/>
                <PrimaryButton title="Sign In"/>
            </div>
        </div>
    )
}
export default Header;