import React,{ useState } from 'react';
import ReactPlayer from 'react-player';
import { faStar,faHandHoldingHeart,faBookmark,faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LikeIcon from './../../resources/icons/Like_highlighted.png';
import DonateIcon from './../../resources/icons/Donate.png';
import SaveIcon from './../../resources/icons/Save_highlighted.png';
import ShareIcon from './../../resources/icons/share.png';
import './post.css';



const Post= ()=>{
    let [comment, setComment] = useState();
    const handleSubmit = (e) =>  {
        e.preventDefault();
        setComment("");
    }
    
    return (
        
        
        <div className="container-sm border">
            <div className="row">The very awesome over that cricket fans will never forget, absolutely masterful batting, and of course I dont need to say much about THAT drive, possibly the best cricket shot ever seen. AND now with channel nine commentary- NO MORE LISTENING TO THAT FUCKING AWFUL STAR COMMENTARY!!!!! You can thank me if you want, or send me fucked up abuse etc. I'm sure it will be nothing I havent heard before.</div>
            <div className="row">
            <div className="col-md-8">
                <div className="row">
                           <ReactPlayer
                            controls
                            width="100%"
                            url="http://localhost:3030/api/posts/video"
                            onError={()=>{}}
                            />
                        </div>
                        <div className="row d-flex justify-content-around text-danger mt-1 mb-1">
                        <a><img src={LikeIcon} width="25px" padding-top="15px"alt="Logo"/><span>Like</span></a>
                        <img src={DonateIcon} width="25px" margin="15px" alt="Logo"/>
                        <img src={SaveIcon} width="25px" margin="15px" alt="Logo"/>
                        <img src={ShareIcon} width="25px" margin="15px" alt="Logo"/>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row bg-danger card-block"><span>test</span></div>
                            <div className="row">
    <form onSubmit={handleSubmit}>
  <label>
    <input className="border" value={comment} type="text" name="comment" width="100%" onChange={ (e) => setComment(e.target.value)} placeholder="Add a Comment!!!!"/>
  </label>
  <button className="btn btn-dark" type="submit">Post</button>
</form></div>
                        
                       </div>
            </div>

        </div>
    )
};

export default Post;