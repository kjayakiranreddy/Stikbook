import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { faHome,faSearch,faPlusSquare,faBell,faComment,faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StikBookIcon from '../resources/icons/Logo_stikbook.png';
import './navbar_style.css';

const navbar= () =>{
    return(
      <div id="navbar"  >
      <nav class="navbar navbar-expand-lg h-50 border navbar-dark bg-white mb-1">
        <a class="navbar-brand" href="#"><img src={StikBookIcon} color="black" width="45px"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"  id="navbarSupportedContent-333">
          <ul  class="navbar-nav mr-auto">
          
            <li class="nav-item active">
              <a class="nav-link" href="#"><FontAwesomeIcon icon={faHome} color="black" size="2x"/>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><FontAwesomeIcon icon={faSearch} color="black" size="2x"/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><FontAwesomeIcon icon={faPlusSquare} color="black" size="2x"/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><FontAwesomeIcon icon={faBell} color="black" size="2x"/></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><FontAwesomeIcon icon={faComment} color="black" size="2x"/></a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto nav-flex-icons">
          <li class="nav-item">
              <a class="nav-link" href="#"><FontAwesomeIcon icon={faBars} color="black" size="2x"/></a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
}
export default navbar;