import React from "react";
import "./login-component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/logo_stikbook.png";
import UsePasswordToggle from "../../utils/usePasswordToggle";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const PasswordReset = () => {
    
        const [PasswordInputType, ToggleIcon] = UsePasswordToggle();
        return (

            <form>
                <div className="form-group">
                    <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                    <h3 >StikBook</h3>
                    <p className="text-center">Password Reset</p>
                </div>
                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon={faEye} /></span>
                    </div>
                    <input type={PasswordInputType} className="form-control" placeholder="New Password" />
                    
                </div>

                <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon={faEyeSlash} /></span>
                    </div>
                    <input type={PasswordInputType} className="form-control" placeholder="Confirm New Password" />
                    
                </div>
                <small className="text-center">By clicking Reset Password, you accept STIKBOOK's <a href="terms">Terms of Use
                            and Privacy Policy</a>.</small><br></br>
                <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
            </form>
           
        );
    }

export default PasswordReset;