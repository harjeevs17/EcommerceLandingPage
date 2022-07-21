import Female from "../../assets/female.jpg"
import Male from "../../assets/male.jpg"
const Product = (props)=>{
    return(
        <div className="product-box">
            <img src={props.data.image}/>
            <p>{props.data.title}</p>
            <p>{props.data.price}</p>
        </div>
    )
}
export default Product; 