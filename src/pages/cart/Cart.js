import styled from "@emotion/styled";
import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useContext, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { UserContext } from "../../App";
import Header from "../../layout/header/Header";

const Cart = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { state, dispatch } = useContext(UserContext);
    const Item = styled(Paper)(({ theme }) => ({
        textAlign: 'center',
        height: "170px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0)",
        margin: "10px"
    }));
    const removeCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id })
        localStorage.setItem("user", JSON.stringify(user));
    }
    return (
        <>
            <Header />
            <Container sx={{ mt: 10 }} container spacing={5} className="cartBox">
                {user.cart.length > 0 ? user.cart.map((item, key) => {
                    return (
                        <Grid container id={key}>
                            <Grid sm={4} lg={4}>
                                <Item><img src={item.data.image} style={{ maxHeight: "100%" }} /></Item>
                            </Grid>
                            <Grid sm={4} lg={6}>
                                <Item style={{ textAlign: "left" }}>{item.data.title}</Item>
                            </Grid>
                            <Grid sm={4} lg={2}>
                                <Item><AiFillDelete onClick={removeCart(item.data._id)} /></Item>
                            </Grid>
                        </Grid>
                    )
                }) : ""}
            </Container>
        </>
    )
}
export default Cart;