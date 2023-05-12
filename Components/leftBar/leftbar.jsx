import { useContext } from "react";
import { Authentication } from "../../Context/Authentication";
import "./leftBar.scss"
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';
import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';

const leftBar= ()=>{

    const { currentUser } = useContext(Authentication);

    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="" alt="" />
                        <span>{currentUser.name}</span>

                    </div>
                    <div className="friends">
                        <PeopleOutlineSharpIcon/>
                        <span>Friends</span>

                    </div>
                    <div className="workouts">
                        <Link to="/workouts">
                            <FitnessCenterSharpIcon/>
                         </Link>
                        <span>Workouts</span>

                    </div>
                    <div className="posts">
                        <Link to="/posts">
                            <WidgetsSharpIcon/>
                        </Link>
                        
                        <span>Posts</span>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default leftBar