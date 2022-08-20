import { useContext, useEffect } from "react";
import { UserContext } from "../../App";
import Header from "../../layout/header/Header";

const Cart = () =>{
    const user = JSON.parse(localStorage.getItem("user"));
    return(
        <div className="container">
            <div className="cartBox">
                {user.cart.length > 0 ? 
                    <div>
                        {user.cart.map((item)=>{
                            return (
                                <div>
                                    <img src={item.data.image} style={{height:"100px"}}/>
                                    {item.data.title}
                                </div>
                            )
                        })}
                    </div>
                    : ""
                }
            </div>            
        </div>
    )
}
export default Cart;