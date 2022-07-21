import { useState } from "react";
import { addCategory } from "../../api/api";
import PrimaryButton from "../../components/form/buttons/PrimaryButton";
import {Input,Select} from "../../components/form/input/Input"


const AddCategory = ()=>{
    const [categoryName,setCategoryName] = useState("");
    const [description,setDescription] = useState("");
    const [sex,setSex] = useState();
    const submitCategory = ()=>{
        if(!categoryName || !description){
                alert("Enter all fields")
            }else{
                const data = {
                   title:categoryName,
                   description:description,
                }
                const fetchAPI = async () => {
                    await addCategory(data).then((res) => {
                        console.log(res)
                    });
                  };
                fetchAPI();
        }
    }
    return (
        <>
            <p>Add categories</p>
            <Input placeholder = "Enter category name" setData={setCategoryName}/>
            <Input placeholder = "Enter description" setData={setDescription}/>
            <PrimaryButton title="Enter category" methodCall={submitCategory}/>
        </>
    )
}
export default AddCategory;