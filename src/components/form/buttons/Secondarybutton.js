const SecondaryButton = (props)=>{
    return (
        <input className = "btn secondaryBtn" type="button" value={props.title} onClick={props.methodCall}/>
    )
}
export default SecondaryButton;