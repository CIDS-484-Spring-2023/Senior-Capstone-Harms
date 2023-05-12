import { ExposureTwoTone } from "@mui/icons-material"
import "./comments.scss"
import { useContext } from "react";
import { Authentication } from "../../Context/Authentication";

const comments = () =>{

    const {currentUser} = useContext(Authentication);

    const posts = [
        {
            id: 1,
            name: "Sam Harms",
            userId: 1,
            profilePicture: "https://www.pexels.com/photo/woman-jumping-wearing-green-backpack-214574/",
            desc: "what a great workout",
            img: "https://www.pexels.com/photo/silhouette-photo-of-woman-against-during-golden-hour-39853/"

        },
        {
            id: 2,
            name: "Sam Harms",
            userId: 1,
            profilePicture: "https://www.pexels.com/photo/woman-jumping-wearing-green-backpack-214574/",
            desc: "what a great workout!!"
           
        },

    ];

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePicture} alt="" />
                <input type="text" placeholder="Write a Comment"/>
                <button>Send</button>
            </div>
            
            {comments.map(comment => (
                <div className="comment">
                    <img src={CommentOutlined.profilePicture} alt="" />
                    <div className="info"> 
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>

            ))
            

            }</div>
    )
    

}

export default comments