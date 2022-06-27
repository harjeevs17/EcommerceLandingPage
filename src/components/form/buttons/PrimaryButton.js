const PrimaryButton = (props)=>{
    return (
        <input className="btn primaryBtn" type="button" value={props.title} onClick={props.methodCall}/>
    )
}
export default PrimaryButton;