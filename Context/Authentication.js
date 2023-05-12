import { createContext, useEffect, useState } from "react";
export const Authentication = createContext();

export const AuthenticationProvider = ({children}) =>{
    const[currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    const Login = () =>{
        //todo
        setCurrentUser({
            id: 1, 
            name: "Sam Harms", 
            profilePicture: ""}
        );

    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);
    
    return (
        <Authentication.Provider value={{currentUser, Login}}>
            {children}
        </Authentication.Provider>
    );
};
}