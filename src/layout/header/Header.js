import PrimaryButton from "../../components/form/buttons/PrimaryButton"
import SecondaryButton from "../../components/form/buttons/Secondarybutton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UserContext } from "../../App";
import React, { useContext } from "react";
import { useNavigate , Link } from 'react-router-dom';
import { Badge, Button, Popover, Typography } from "@mui/material";
const Header = (props)=>{
    const { state, dispatch } = useContext(UserContext);
    let history = useNavigate();
    const logOut = ()=>{
        localStorage.clear();
        dispatch({ type: "CLEAR" });
        history("/signIn", { replace: true });
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const WhenLoggedIn = ()=>{
        return(
          
            <div className="header">
                <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"/>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Admin</li>
                </ul>
                <div className="btn-containers">
                <Badge  anchorEl={anchorEl} badgeContent={state.cart.length} color="primary">       
                    <AiOutlineShoppingCart onClick={handleClick} style={{cursor:"pointer"}}/> 
                </Badge>
                <Popover
                    anchorPosition={{ top: 0, left: 1155 }}
                    anchorReference="anchorPosition"
                    id={id}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                <div>
                    <p>fdsfsdfdsfdsfsdf</p>
                    <p>fdsfsdfdsfdsfsdf</p>
                    <p>fdsfsdfdsfdsfsdf</p>
                    <p>fdsfsdfdsfdsfsdf</p>
                    <p>fdsfsdfdsfdsfsdf</p>
                    <p>fdsfsdfdsfdsfsdf</p>
                    <p>fdsfsdfdsfdsfsdf</p>
                </div>
                </Popover>
                    <PrimaryButton title="Sign Out" methodCall={logOut}/>
                </div>
        </div>
            
            
            )}


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