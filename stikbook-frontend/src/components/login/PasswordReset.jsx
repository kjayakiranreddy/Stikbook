import React from "react";
import "./login-component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/logo_stikbook.png";
import UsePasswordToggle from "../../utils/usePasswordToggle";
import { Button, StyledBody,CenterBox } from "../styledcomponets/lib";

const PasswordReset = () => {

    const [PasswordInputType, ToggleIcon] = UsePasswordToggle();
    return (
        <StyledBody>
            <CenterBox>
        <form>
            <div className="form-group text-center">
                <a href="/home"><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                <h3 >StikBook</h3>
                <p >Password Reset</p>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                </div>
                <input type={PasswordInputType} className="form-control" placeholder="New Password" />
                <span className="password-toogle-icon">{ToggleIcon}</span>
            </div>


            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                </div>
                <input type={PasswordInputType} className="form-control" placeholder="Confirm New Password" />
                
            </div>
            <small className="text-center">By clicking Reset Password, you accept STIKBook's <a href="terms">Terms of Use
                            and Privacy Policy</a>.</small><br></br>
            <div className="form-group text-center">
                <Button type="submit" className="btn btn-link">Reset Password</Button>
            </div>
        </form>
        </CenterBox>
        </StyledBody>
    );
}

export default PasswordReset;