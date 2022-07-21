import Product from "../../components/productBox/Product"

const ProductCarousel = (props)=>{
    return (
        <div className="productCarousel">
            {props.data!=null && props.data.length>0?
                props.data.map((item)=>{
                   return <Product key = {item._id} data={item}/>
                }):""
            }
        </div>
    )
}
export default ProductCarousel;