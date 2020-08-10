import React,{ useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DatePickerInput from "../../utils/datePicker"
import './signup-component.css'
import Logo from "../../assets/images/logo_stikbook.png"
import { useHistory } from "react-router-dom";
import PhoneNumberInput from "../../utils/phoneInput"

const SignUp =(props) => {
    
    const history = useHistory();
    const handleSubmit = (evt) => {
       // evt.preventDefault();
        history.push("./verification");
    }
        return ( 
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                    <h3 >Join Stikbook</h3>
                    <small className="text-center" >Are you ready to meet great talent from around the world?</small>
                    <h6 className="text-center"> Tell us a bit about yourself</h6>
                </div>

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="user" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="First Name"/>
                </div>

                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="user" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>

                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="envelope" /></span>
                    </div>
                    <input type="email" className="form-control" placeholder="Enter Email" />
                </div>

                <div className="form-group">
                <PhoneNumberInput/>
                </div>
                <div className="form-group">
                    <div className="float-left">
                        <select className="form-control">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="float-right">
                        <DatePickerInput/>
                    </div>
                </div>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-link">Continue</button>
                </div>
                <div className="row">
                    <div className="col"><hr /></div>
                    <div className="col-auto">Or</div>
                    <div className="col"><hr /></div>
                </div>
                <div className="row logins">
                    <a><img className="icons" src={require('../../assets/images/googleicon.png')} alt="Google Logo"></img></a>
                    <a><img className="icons" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img></a>
                    <a><img className="icons" src={require('../../assets/images/inicon.png')} alt="Linkedin Logo"></img></a>
                </div>
                <div className=" form-group logintext">
                    <p className="text-center">
                        Have an account? <a href="login">Login</a>
                    </p>
                </div>
            </form>
        );
    }
export default SignUp;