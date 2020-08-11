import React from "react";
import "./login-component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/logo_stikbook.png";
import UsePasswordToggle from "../../utils/usePasswordToggle";
import PhoneNumber from "../../utils/phoneInput";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const PasswordReset = () => {
    
        const [PasswordInputType,ToggleIcon] = UsePasswordToggle();
        return (

            <form>
                <div className="form-group">
                    <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                    <h3 >StikBook</h3>
                    <p className="text-center">Password Reset</p>
                </div>
                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                    </div>
                    <input type={PasswordInputType} className="form-control" placeholder="New Password" />
                </div>
               

                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                    </div>
                    <input type={PasswordInputType} className="form-control" placeholder="Confirm New Password" />
                    <span className="password-toogle-icon">{ToggleIcon}</span>
                </div>
                <small className="text-center">By clicking Reset Password, you accept STIKBOOK's <a href="terms">Terms of Use
                            and Privacy Policy</a>.</small><br></br>
                            <div className="form-group text-center">
                    <button type="submit" className="btn btn-link">Reset Password</button>
                </div>
            </form>
           
        );
    }

export default PasswordReset;