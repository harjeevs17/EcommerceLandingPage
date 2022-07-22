import Female from "../../assets/female.jpg"
import Male from "../../assets/male.jpg"
import { Link } from "react-router-dom";
const Product = (props)=>{
    return(
        <Link to={'productDetail/'+props.data._id} state={{ data: props.data }} >
            <div className="product-box">
                <img src={props.data.image}/>
                <div>
                    <p>{props.data.title}</p>
                    <span>Rs: {props.data.price}</span>
                </div>    
            </div>
        </Link>
    )
}
export default Product; 