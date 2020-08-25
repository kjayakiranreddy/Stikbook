import React from "react";
import './interest.css';
import { Button } from "../styledcomponets/lib";

const Interest = () => {
    return(
        <div className="main"> 
        <div className="headings"> 
        <h1>Chose your interest</h1>
        <p>It will help us find you the video you love! <span className="font-weight-bolder">select atleast 3 you like</span></p>
        <input  className="searchbar" type="text" placeholder="Search your favourite talent" ></input>
        </div>
       <div className="pictures"> 
       <h4>Trending</h4>
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
       <h4>Main Categories</h4>
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
       <Button type="submit" className="btn btn-link"> Continue</Button>
       </div>
       </div>
       
    );
}
export default Interest; 