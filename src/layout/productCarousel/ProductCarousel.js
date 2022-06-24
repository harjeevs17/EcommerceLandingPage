import Product from "../../components/productBox/Product"

const ProductCarousel = (props)=>{
    return (
        <div className="productCarousel">
            <Product sex={props.sex}/>
            <Product sex={props.sex}/>
            <Product sex={props.sex}/>
            <Product sex={props.sex}/>
        </div>
    )
}
export default ProductCarousel;