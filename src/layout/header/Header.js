import PrimaryButton from "../../components/form/buttons/PrimaryButton"
import SecondaryButton from "../../components/form/buttons/Secondarybutton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UserContext } from "../../App";
import React, { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Badge, Button, Popover, Typography } from "@mui/material";
const Header = (props) => {
    const { state, dispatch } = useContext(UserContext);
    let history = useNavigate();
    const logOut = () => {
        localStorage.clear();
        dispatch({ type: "CLEAR" });
        history("/signIn", { replace: true });
    }
    const [anchorel, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorel);
    const id = open ? 'simple-popover' : undefined;
    const WhenLoggedIn = () => {
        return (

            <div className="header">
                <Link to={"/"}><img src="https://www.freepnglogos.com/uploads/pepsi-png-logo/pepsi-logo-pepsi-symbol-meaning-history-png-logo-3.png" /></Link>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Admin</li>
                </ul>
                <div className="btn-containers">
                    <Badge anchorel={anchorel} badgeContent={state.cart.length} color="primary">
                        <Link to={"/cart"}><AiOutlineShoppingCart style={{ cursor: "pointer" }} /></Link>
                    </Badge>
                    <PrimaryButton title="Sign Out" methodCall={logOut} />
                </div>
            </div>


        )
    }


    const WhenNotLoggedIn = (props) => {
        return (
            <div className="header">
                <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" />
                <div className="btn-containers">
                    <SecondaryButton title="Sign Up" methodCall={props.methodCall} />
                    <PrimaryButton title="Sign In" methodCall={props.methodCall} />
                </div>
            </div>
        )
    }
    return (
        !state ? <WhenNotLoggedIn methodCall={props.methodCall} /> : <WhenLoggedIn methodCall={props.methodCall} />
    )
}
export default Header;

/*
 {state.cart.length!=0 ? <div>
                        <p>{state.cart.map((item)=>{
                            return item.data.image == undefined || item.data.image == undefined ? <div style={{display:"flex",flexDirection:"row",margin:"10px",alignItems:"center"}}>
                            <img style={{height:"100px"}} src={item.data.image}/>
                            <p style={{textAlign:"center"}}>{item.data.title}</p>
                        </div>:""
                        })}</p>
                        <input type="button" value="cart" style={{width:"100%"}}/>
                    </div>:null}
*/