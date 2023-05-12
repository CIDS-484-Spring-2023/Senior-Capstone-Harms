import "./posts.scss";
import Post from "./Components/Post/post";

const Posts  = () => {
    //ttemp
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
        <div className="posts">
            {posts.map(post=> (
                <Post post= {post} key ={post.id}/>
            ))}
        </div>
    )
}

export default Posts