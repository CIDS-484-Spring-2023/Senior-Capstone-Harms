import "./navBar.scss"
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { Link } from "react-router-dom";
import React, { UseContext } from 'react';
import { Authentication } from "../../Context/Authentication";

const navBar= ()=>{
    const { currentUser } = UseContext(Authentication);
    return(
        <div className="navbar">
            <div className="leftbar">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>getABS</span>
                </Link>
                <HomeSharpIcon/>
                <AppsSharpIcon/>
                <div className="search">
                    <SearchSharpIcon/>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="rightbar">
                <PersonSharpIcon/>
                <EmailSharpIcon/>
                <NotificationsSharpIcon/>
                <div className="user">
                    //<img src="" alt="" />
                    <span>{currentUser.name}</span>  
                </div>
            </div>
        
        </div>
    )
}

export default navBar