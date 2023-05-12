
import { Link } from "react-router-dom"
import "./SignUp.scss"
const SignUp= ()=>{
    return(
        <div className="SignUp">
        <div className="Card">
            <div className="Left">
                <h1>Create Account</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="text" placeholder="Name"/>
                    <button>Sign Up</button>
                   
                </form>
            </div>
            <div className="Right">
                <h1>GetABS</h1>
                <p>Need motivation? Peer pressure the only way you get things done?
                    Well this is for you! By joining our community you can connect with friends, create workouts,
                    post about your fitness journey, and when you don't feel like working out don't worry- GetABS 
                    will send you notifications about all the workouts your friends are doing just to shame you 
                    into going back to the gym. After all this app was designed to hold you accountable, its even in 
                    our name! This is getABS, your <strong>A</strong>ccountability <strong>B</strong>uddy <strong>S</strong>ystem.
                    </p>
                <span>Do you have an account?</span>
                <Link to="/Login">
                    <button>Login</button>
                </Link>
                
            </div>
                
        </div>
    </div>
    )
    
}

export default SignUp