import React, {useState} from "react";
import "./login-component.css";
import "../../assets/styles/commonstyle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/images/logo_stikbook.png";
import { useHistory } from "react-router-dom";
import UsePasswordToggle from "../../utils/usePasswordToggle";
import { Button, StyledBody,CenterBox, Hr } from "../styledcomponets/lib";
import {useForm} from 'react-hook-form';

const Login = () => {

    const {register, handleSubmit, errors} = useForm();

    const [PasswordInputType, ToggleIcon] = UsePasswordToggle();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const onSubmit = data => {

        if(email !== undefined && password !== undefined){
            history.push("./home");
        }
    }

    return (
        <StyledBody>
            <CenterBox>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <a href=""><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                        <h3 >Welcome back to StikBook</h3>
                        <p className="text-center">Login into your account</p>
                    </div>

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <FontAwesomeIcon icon="envelope" /></span>
                        </div>
                        <input type="email" name="email" className="form-control" defaultValue={email} onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter email" ref={register({required : true})} />
                    </div>
                    {errors.email && errors.email.type === "required" && (
                    <p className="text-danger">Email is required</p>
                    )}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                        </div>
                        <input type={PasswordInputType} name="password" className="form-control" defaultValue={password} onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter password" ref={register({required : true})} />
                        <span className="password-toogle-icon">{ToggleIcon}</span>
                    </div>
                    {errors.password && errors.password.type === "required" && (
                    <p className="text-danger">Password is required</p>
                    )}
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
                        <div className="col-auto">OR</div>
                        <div className="col"><Hr /></div>
                    </div>
                    <div className="row logins">
                        <a href=""><img className="icons" src={require('../../assets/images/googleicon.png')} alt="Google Logo"></img></a>
                        <a href=""><img className="icons" src={require('../../assets/images/fbicon.png')} alt="Facebook Logo"></img></a>
                        <a href=""><img className="icons" src={require('../../assets/images/inicon.png')} alt="Linkedin Logo"></img></a>
                    </div>
                </form>
            </CenterBox>
            <CenterBox>
                <p className="text-center"> No account? <a href="signup">Create one</a>!</p>
           </CenterBox>
        </StyledBody>
       
        
           
    );
}

export default Login;