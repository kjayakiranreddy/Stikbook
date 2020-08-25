import React,{ useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DatePickerInput from "../../utils/datePicker"
import './signup-component.css'
import Logo from "../../assets/images/logo_stikbook.png"
import { useHistory } from "react-router-dom";
import PhoneNumberInput from "../../utils/phoneInput"
import { Button, StyledBody,CenterBox, Hr } from "../styledcomponets/lib";
import Moment from 'moment';
import {useForm} from 'react-hook-form';

const SignUp =(props) => {

    const {register, handleSubmit, errors} = useForm();
    
    const [fNameVal, setFName] = useState();
    const [lNameVal, setLName] = useState();
    const [emailVal, setEmail] = useState();
    const [genderVal, setGender] = useState();
    const [phone, setPhone] =useState();
    let [dob, setDob] = useState();

    const history = useHistory();
    dob = Moment(dob).format('MM-DD-YYYY');
    
    const onSubmit = data => {

        if(phone !== undefined && dob !== undefined && fNameVal !== undefined &&
        lNameVal !== undefined && emailVal !== undefined && genderVal !== undefined){
            history.push("./verification");
        }         
    }

        return ( 
            <StyledBody>
            <CenterBox>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group text-center">
                    <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                    <h3 >Join Stikbook</h3>
                    <small className="text-center" >Are you ready to meet great talent from around the world?</small>
                    <h6 className="text-center"> Tell us a bit about yourself</h6>
                </div>

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="user" /></span>
                    </div>
                    <input type="text" className="form-control" name="firstName" value={fNameVal} onChange={(e) => setFName(e.target.value)} 
                    placeholder="First Name" ref={register({required : true})}/>                    
                </div>
                {errors.firstName && errors.firstName.type === "required" && (
                    <p className="text-danger">First Name is required</p>
                )}
                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="user" /></span>
                    </div>
                    <input type="text" className="form-control" name="lastName" value={lNameVal} onChange={(e) => setLName(e.target.value)} 
                    placeholder="Last Name" ref={register({required : true})} />
                </div>
                {errors.lastName && errors.lastName.type === "required" && (
                    <p className="text-danger">Last Name is required</p>
                )}
                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="envelope" /></span>
                    </div>
                    <input type="email" className="form-control" name="email" value={emailVal} onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter Email" ref={register({required : true})} />
                </div>
                {errors.email && errors.email.type === "required" && (
                    <p className="text-danger">Email is required</p>
                )}
                <div className="form-group">
                <PhoneNumberInput name="phone_number" value={phone} onChange={(phone) => setPhone(phone)} 
                inputProps={{
                    name: 'phone_number',
                    required: true,
                  }}/>
                </div>
                {errors.phone_number && errors.phone_number.type === "required" &&(
                    <p className="text-danger">Phone Number is required</p>
                    )}
                <div className="form-group">
                    <div className="float-left">
                        <select className="form-control" name="gender" value={genderVal} onChange={(e) => setGender(e.target.value)}
                        ref={register({required : true})}>
                            <option value="">Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                        </select>
                    </div>
                    <div className="float-right">
                        <DatePickerInput placeholderText={'Enter date of birth'} value={dob} onChange={(date) => setDob(date)}/>
                    </div>
                </div>
                {errors.gender && (
                    <p className="text-danger">Gender is required</p>
                    )}
                <div className="form-group text-center">
                    <Button type="submit" className="btn">Continue</Button>
                </div>
                <div className="row">
                    <div className="col"><Hr /></div>
                    <div className="col-auto">OR</div>
                    <div className="col"><Hr /></div>
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
            </CenterBox>
        </StyledBody>
        );
    }
export default SignUp;