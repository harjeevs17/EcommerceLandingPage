import { useEffect, useState } from "react";
import { addCategory, addProduct, getAllCategories } from "../../api/api";
import PrimaryButton from "../../components/form/buttons/PrimaryButton";
import {Input,Select} from "../../components/form/input/Input"


const AddProduct = ()=>{
    const [productName,setProductName] = useState("");
    const [productDescription,setproductDescription] = useState("");
    const [productImage,setproductImage] = useState("");
    const [productPrice,setproductPrice] = useState(0);
    const [productCategory,setProductCategory] = useState("");
    const [category,setCategory] = useState([]);
    const [sex,setSex] = useState("");
    const data = [
        {
          "_id":"Male",
          "title":"Male"
        },
        {
          "_id":"Female",
          "title":"Female"
        }
      ]
    useEffect(() => {
        async function fetchData() {
          await getAllCategories(setCategory);
        }
        fetchData();
      }, [setCategory]);
    const submitProduct = ()=>{
        if(productName === "" || productDescription === "" || productCategory === "" || productPrice === 0 || productImage === ""||sex === ""){
                alert("Enter all fields")
                
            }else{
                const data = {
                    title: productName,
                    description: productDescription,
                    price: productPrice,
                    category: productCategory,
                    image:productImage,
                    sex:sex
                }
                const fetchAPI = async () => {
                    await addProduct(data).then((res) => {
                        console.log(res)
                    });
                  };
                fetchAPI();
        }
    }
    return (
        <>
            <p>Add Product</p>
            {category!=null?
            <>
                <Input placeholder = "Enter product name" setData={setProductName}/>
                <Input placeholder = "Enter description" setData={setproductDescription}/>
                <Input placeholder = "Enter product price" setData={setproductPrice}/>
                <Input placeholder = "Enter image" setData={setproductImage}/>
                <Select data={data} setData = {setSex}/>
                <Select data={category} setData = {setProductCategory}/>
                <PrimaryButton title="Enter category" methodCall={submitProduct}/>
            </>:""}
            
        </>
    )
}
export default AddProduct;