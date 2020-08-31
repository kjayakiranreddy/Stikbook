import  React  from 'react';
import { faFireAlt,faCheckSquare,faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*const LeftPane= () =>{
    return(
        <div ><FontAwesomeIcon icon={faFireAlt} /></div>
    );
}*/
const LeftPane = () =>{
    
    return ( 


        <div className="fire" >
            <FontAwesomeIcon icon={faFireAlt} size="4x"/>
            <span>Trending</span><br></br>
            <FontAwesomeIcon icon={faBookmark} size="5x"/>
            <span>Saved</span><br></br>
            <FontAwesomeIcon icon={faCheckSquare} size="4x"/>
            <span>Following</span>
            
            </div>

    )};
export default  LeftPane;