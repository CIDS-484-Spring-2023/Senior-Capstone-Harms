import "./post.scss"
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import CommentSharpIcon from '@mui/icons-material/CommentSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';



//tmep

const post = ({post}) => {

const [commentOpen, setCommentOpen] = setState(false);
const liked = false;
    return(
        <div className="post">
            <div className="conatiner">
            <div className="user">
                <div className="userInfo">
                    <img src={profilePicture} alt="" />
                    <div className="details">
                        <Link to={'/profile/${post.userid}'} style ={{textDecoration: "none", color: "inherit"}}>
                        <span className="name">{post.name}</span>
                        <span className="date">1 min ago</span>
                        </Link>
                    </div>
                </div>
                <MoreHorizSharpIcon/>
            </div>
            <div className="content"></div>
                <p>{post.desc}</p>
                <img src= {post.img} alt="" />
            <div className="info">
                <div className="item">
                    {liked ? <FavoriteSharpIcon/> : <FavoriteBorderSharpIcon/>}
                    12 likes
                </div>
                <div className="item" onClick={()=> setCommentOpen(!commentOpen)}>
                    <CommentSharpIcon/>
                    12 Comments

                </div>
                <div className="item">
                    <ShareSharpIcon/>
                    Share
                    
                </div>
            </div>
            {<comments/>}
         </div>
    </div>    
    );
};

export default post