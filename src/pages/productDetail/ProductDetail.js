import { Button, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate,useParams,useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Header from "../../layout/header/Header";
const ProductDetail = (props)=>{
    let history = useNavigate();
    const location = useLocation()
    const { data } = location.state
    let {id} = useParams();
    const { state, dispatch } = useContext(UserContext);
    const addToCart = ()=>{
       dispatch({ type: "ADD_TO_CART",payload:data })
       let temp = {...state,cart:[...state.cart,{data}]};
       localStorage.setItem("user", JSON.stringify(temp));
    }
    return (
        <div>
            <Header/>
            <Grid container spacing={1} maxwidth="lg" justify = "center" sx={{ mt: 2 }}>
                <Grid item xs={5} style={{textAlign:"center"}}>
                    <img src={data.image} style={{height:"600px"}}/>
                </Grid>
                <Grid item xs={7}>
                    <p>{data.title}</p>
                    <p>{data.price}</p>
                    <Button variant="outlined" onClick = {addToCart}>Add to Cart</Button>
                    <Button variant="outlined" color="error">Buy</Button>
                </Grid>
              </Grid>  
        </div>
    )
        
        
}
export default ProductDetail;