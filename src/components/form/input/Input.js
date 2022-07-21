import { useEffect, useState } from "react"

const Input = (props)=>{
    return (
        <input type="text" name="text" placeholder={props.placeholder} onChange={(e)=>props.setData(e.target.value)}/>
    )
}
const Select = (props)=>{
    const [data,setdata] = useState(null);
    useEffect(()=>{
        if(props.data!=null && props.data.length>0){
            console.log(props.data[0].title)
            setdata(JSON.parse(JSON.stringify(props.data)))
        }
    },[props.data])
    const setResult = (event)=>{
        props.setData(event.target.value)
    }
    return(
        <select onChange={setResult}>
       {props.data!=null?props.data.map((item)=>{
         return <option key = {item._id} value={item._id}>{item.title}</option>
       }):""}
        </select>
      
    )
}
export {Input,Select};