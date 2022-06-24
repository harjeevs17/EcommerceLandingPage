import Female from "../../assets/female.jpg"
import Male from "../../assets/male.jpg"
const Product = (props)=>{
    return(
        <div className="product-box">
            {props.sex=="male"?<img src={Male}/>:<img src={Female}/>}
        </div>
    )
}
export default Product; 