import React from "react";
import "./login-component.css";
import "../../assets/styles/commonstyle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/logo_stikbook.png";
import UsePasswordToggle from "../../utils/usePasswordToggle";
import { Button, StyledBody,CenterBox, Hr } from "../styledcomponets/lib";

const Login = () => {

    const [PasswordInputType, ToggleIcon] = UsePasswordToggle();
    return (
        <StyledBody>
            <CenterBox>
                <form>
                    <div className="form-group">
                        <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                        <h3 >Welcome back to StikBook</h3>
                        <p className="text-center">Login into your account</p>
                    </div>

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <FontAwesomeIcon icon="envelope" /></span>
                        </div>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                        </div>
                        <input type={PasswordInputType} className="form-control" placeholder="Enter password" />
                        <span className="password-toogle-icon">{ToggleIcon}</span>
                    </div>

                    <small className="text-center">By Login, you accept the <a href="terms">Terms of Use
                            and Privacy Policy</a>.</small>
                    <div className="form-group text-center">
                        <Button type="submit" className="btn">Login</Button>
                    </div>
                    <p className="text-right">
                        Forgot <a href="Forgotpassword">password?</a>
                    </p>

                    <div className="row">
                        <div className="col"><Hr /></div>
                        <div className="col-auto">Or</div>
                        <div className="col"><Hr /></div>
                    </div>
                    <div className="row logins">
                        <a><img className="icons" src={require('../../assets/images/googleicon.png')} alt="Google Logo"></img></a>
                        <a><img className="icons" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img></a>
                        <a><img className="icons" src={require('../../assets/images/inicon.png')} alt="Linkedin Logo"></img></a>
                    </div>
                    <div className="form-group signuptext"><p className="text-center"> No account? <a href="signup">Create one</a>!</p></div>


                </form>
            </CenterBox>
        </StyledBody>
    );
}

export default Login;