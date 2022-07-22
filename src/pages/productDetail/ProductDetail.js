import { useNavigate,useParams,useLocation } from "react-router-dom";
import Header from "../../layout/header/Header";
const ProductDetail = (props)=>{
    let history = useNavigate();
    const location = useLocation()
    const { data } = location.state
    let {id} = useParams();
    return (
        <div>
            <Header/>
            <img src={data.image} style={{height:"600px"}}/>
            <p>{data.title}</p>
            <p>{data.price}</p>
            </div>
    )
        
        
}
export default ProductDetail;