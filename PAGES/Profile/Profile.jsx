import "./Profile.scss"
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
const Profile= ()=>{
    return(
        <div className="profile">
            <div className="images">
                <img src="" alt="" className="cover"/>
                <img src="" alt="" className="profilePic"/>
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="center"></div>
                        <span>Sam Harms</span>
                        <span>Bio</span>
                        <button>Follow</button>
                        <EmailSharpIcon/>
                        <MoreVertSharpIcon/>

                </div>
            </div>
        </div>
        )
    
}

export default Profile