import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './interest.css'

const Interest = () => {
    return(
        <div className="main"> 
        <div className="headings"> 
        <h1>Chose your interest</h1>
        <h3>It will help us find you the video you love! select atleast 3 you like</h3>
        <input  className="placeholder" type="text" placeholder="Search your faviurite talent here" ></input>
        </div>
       <div className="pictures"> 
       <h5>Trending</h5>
       <div className="pic1">
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p>
       </div> 
       <div className="pic2"> 
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p> 
       </div>
       <div className="pic3">
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p> 
       </div>
       <div className="pic4">
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p> 
       </div>
       <div className="pic5">
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p> 
       </div>
       <div className="sub-heading">
       <h5>Main Categories</h5>
       </div>
       </div>
       <div className="pictures"> 
       <div className="pic1">
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p>
       </div> 
       <div className="pic2"> 
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p> 
       </div>
       <div className="pic3">
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p> 
       </div>
       <div className="pic4">
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p> 
       </div>
       <div className="pic5">
       <img className="fbicon" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img>
       <p>ART</p> 
       </div>
       </div>

       <div className="form-group text-center">
       <button type="submit" className="btn btn-link"> <a href="interest">Continue</a></button>
       </div>
       </div>
       
    );
}
export default Interest;