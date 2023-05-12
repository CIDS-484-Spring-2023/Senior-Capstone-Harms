import "./rightBar.scss"
const rightBar= ()=>{
    return(
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>Friend Requests</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <span>John Doe</span>

                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>

                        </div>

                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <span>John Doe</span>

                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>

                        </div>

                    </div>
                </div>
                <div className="item">
                    <span>Latest Activity</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <p>
                                <span>John Doe</span> just finished a workout!
                            </p>

                        </div>
                        <div>
                            <span>1 min ago</span>

                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <p>
                                <span>John Doe</span> just finished a workout!
                            </p>

                        </div>
                        <div>
                            <span>1 min ago</span>
                        </div>

                    </div>

                </div>
                

            </div>

        </div>
    )
}
export default rightBar