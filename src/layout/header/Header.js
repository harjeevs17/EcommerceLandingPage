import PrimaryButton from "../../components/form/buttons/PrimaryButton"

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
                <PrimaryButton/>
                <PrimaryButton/>
            </div>
        </div>
    )
}
export default Header;