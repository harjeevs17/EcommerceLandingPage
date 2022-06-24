import SecondaryButton from "../components/form/buttons/Secondarybutton";

const SignIn = ()=>{
    return(
        <div className="onboardingBox">
            <form>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="username" placeholder="Password"/>
                <SecondaryButton title="Sign In"/>
            </form>
        </div>
    )
}
export default SignIn;