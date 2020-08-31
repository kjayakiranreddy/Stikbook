import React from 'react';
import Navbar from '../../utils/navbar';
import SplitPane from 'react-split-pane';
import LeftPane from '../leftpane/leftPane';
import RightPane from './../rightPane/rightPane';
import Post from '.././Post/Post';
import Upload from '.././Post/createPost';
import './home.css';


const Home = () =>{
    
    return ( 
        <React.Fragment>
            <Navbar/>
    <Upload/>
  
    </React.Fragment>
    )};
 export default Home;