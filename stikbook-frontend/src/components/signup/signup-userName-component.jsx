import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{  Fragment } from "react";
import 'react-phone-input-2/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import './signup-component.css'
import Logo from "../../assets/images/logo_stikbook.png"
import { Button, StyledBody,CenterBox} from "../styledcomponets/lib";

import UsePasswordToggle from "../../utils/usePasswordToggle";



const userName =(props) => {
    const [PasswordInputType, ToggleIcon] = UsePasswordToggle();
    
        return ( 
            <StyledBody>
            <CenterBox>
            <form>
                <div className="form-group text-center">
                    <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                    <h3 >Join Stikbook</h3>
                    <small className="text-center" >You are just one step away from meeting the 
                              great talent across the world? </small>
                    <h4 className="text-center"> User Name and Password</h4>
                </div>

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="user" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="User Name"/>
                </div>

                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                    </div>
                    <input type={PasswordInputType} className="form-control" placeholder="Enter password" />
                    <span className="password-toogle-icon">{ToggleIcon}</span>
                </div>

                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                    </div>
                    <input type={PasswordInputType} className="form-control" placeholder="Enter confirmPassword" />
            
                </div>


              
                <div>
                 <small className="text-center">By clicking sign Up, you accept STIKbook's 
                    <a href="terms">Terms of Service, Data Policy
                            and Privacy Policy</a>.</small>
               </div>        

            
                <div className="form-group text-center">
                    <Button type="submit" className="btn"> Sign Up</Button>
                </div>
               
                </form>
                </CenterBox>
                <CenterBox><p className="text-center">
                        Have an account? <a href="login">Login</a>
                    </p></CenterBox>
            </StyledBody>
           
        );
        }
export default userName;