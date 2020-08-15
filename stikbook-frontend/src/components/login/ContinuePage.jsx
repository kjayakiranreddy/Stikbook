import React from "react";
import "./login-component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/logo_stikbook.png";
import UsePasswordToggle from "../../utils/usePasswordToggle";
import { Button, StyledBody,CenterBox, Hr } from "../styledcomponets/lib";

const ContinuePage = () => {

    const [PasswordInputType, ToggleIcon] = UsePasswordToggle();
    return (
        <StyledBody>
            <CenterBox>
        <form action="PasswordReset" method="get">
            <div className="form-group text-center">
                <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                <h3 >StikBook</h3>
                <p >Success!</p>
                <p>We just sent a password link to Email Address/Phone Number <br></br>Click on the link to reset your password
                    </p>
                <div className="form-group text-center">
                    <Button type="submit" className="btn btn-link">Continue</Button>
                </div>
            </div>
        </form>
        </CenterBox>
        </StyledBody>
    );
}

export default ContinuePage;