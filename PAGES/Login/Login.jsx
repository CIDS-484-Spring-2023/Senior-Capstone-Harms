import { Link } from "react-router-dom";
import "./Login.scss";
import { useContext } from "react";
import { Authentication } from "../../Context/Authentication";


const Login= ()=>{
    const {Login} = useContext(Authentication);
    const handleLogin = () =>{
        Login();
    };
    return(
        <div className="Login">
            <div className="Card">
                <div className="Left">
                  <h1>GetABS</h1>
                  <p>Need motivation? Peer pressure the only way you get things done? 
                    Well this is for you! By joining our community you can connect 
                    with friends, create workouts, post about your fitness journey, 
                    and when you don't feel like working out don't worry- GetABS 
                    will send you notifications about all the workouts your friends are 
                    doing just to shame you into going back to the gym. After all 
                    this app was designed to hold you accountable, its even in our name!
                     This is getABS, your <strong>A</strong>ccountability 
                     <strong>B</strong>uddy <strong>S</strong>ystem.
                    </p>
                    <span>Don't have an account?</span>
                    <Link to="/SignUp">
                        <button>Sign Up</button>
                    </Link>
                    
                    
                </div>
                <div className="Right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button onClick={handleLogin}>Login</button>
        
                    </form>
                </div>
                    
            </div>
        </div>
    )
    
}

export default Login