import SecondaryButton from "../components/form/buttons/Secondarybutton";

const SignUp = ()=>{
    return(
        <div className="onboardingBox">
            <form>
                <input type="text" name="username" placeholder="Username"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="username" placeholder="Password"/>
                <input type="text" name="username" placeholder="Phone"/>
                <SecondaryButton title="Sign Up"/>
            </form>
        </div>
    )
}
export default SignUp;