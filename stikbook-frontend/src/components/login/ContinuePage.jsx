import React from "react";
import "./login-component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/logo_stikbook.png";
import UsePasswordToggle from "../../utils/usePasswordToggle";

const ContinuePage = () => {

    const [PasswordInputType, ToggleIcon] = UsePasswordToggle();
    return (
        <form action="PasswordReset" method="get">
            <div className="form-group">
                <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                <h3 >StikBook</h3>
                <p className="text-center">Success!</p>
                <p className="text-center">We just sent a password link to Email Address/Phone Number <br></br>Click on the link to reset your password
                    </p>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-link">Continue</button>
                </div>
            </div>
        </form>
    );
}

export default ContinuePage;