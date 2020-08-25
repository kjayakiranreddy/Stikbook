import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState, useRef } from 'react';
import 'react-phone-input-2/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import './signup-component.css'
import Logo from "../../assets/images/logo_stikbook.png";
import UsePasswordToggle from "../../utils/usePasswordToggle";
import PasswordStrengthIndicator from './passwordStrengthIndicator';
import { Button, StyledBody,CenterBox, Hr } from "../styledcomponets/lib";
import classnames from 'classnames';
import { useHistory } from "react-router-dom";

import {useForm} from 'react-hook-form';


const isNumberRegx = /\d/;
const specialCharacterRegx = /[!$%&'*+-/=?^_`{}|~,.()@ ]/;
const UserName = () => {

    const {register, handleSubmit, errors, watch} = useForm();
    const [userName, setUserName] = useState();    
    const [password, setpassword] = useState();
    const [passwordErr, setpasswordErr] = useState();
    const [confPassword, setconfPassword] = useState();
    const [confPasswordErr, setconfPasswordErr] = useState();
    const [PasswordInputType, ToggleIcon] = UsePasswordToggle();
    const [PasswordFocused, setPasswordFocused] = useState(false)
    const [passwordValidity, setPasswordValidity] = useState({
        minChar:null,
        number:null,
        specialChar:null
    })
    const history = useHistory();

    const handleChange = (e, pwd) => {
        const user = {};
        user[pwd] = e.target.value;
        //validations
        switch (pwd) {
            case 'password':
                setpassword(user.password);
                user.password.length < 3 ? setpasswordErr('Password must contain 3 characters') : setpasswordErr('')
            case 'confPassword':
                setconfPassword(user.confPassword);
                user.confPassword !== password ? setconfPasswordErr('Password donot match') : setconfPasswordErr('');
                break;

            default:
                break;
        }
    }

  const onchangePassword = password => {
        setpassword(password);
        setPasswordValidity({
            minChar: password.length >= 8 ? true: false,
            number: isNumberRegx.test(password) ? true : false,
            specialChar: specialCharacterRegx.test(password) ? true : false
        });

    };

    const onSubmit = data => {

        if(userName !== undefined){
            history.push("./interest");
        }         
    }       
   
        return (     
            <StyledBody>
            <CenterBox>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group text-center">
                    <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                    <h3 >Join Stikbook</h3>
                    <small className="text-center" >You are just one step away from meeting the 
                              great talent across the world! </small>
                    <h4 className="text-center"> User Name and Password</h4>
                </div>

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="user" /></span>
                    </div>
                    <input type="text" name="name" ref={register({required : true})} className="form-control" value={userName}
                    placeholder="User name" onChange={(e) => setUserName(e.target.value)} />
                </div>
                {errors.name && errors.name.type === "required" && (
                    <p className="text-danger">User Name is required</p>
                )}
                <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                    </div>
                    <input type={PasswordInputType} name="password" ref={register({required : true})}
                    className={classnames("form-control",{ 'is-invalid': passwordErr })}
                    onChange={(e) => handleChange(e, 'password')}                
                    value={password}
                    onFocus={ () => setPasswordFocused(true)}  
                    onChange={e => onchangePassword(e.target.value)} 
                    placeholder="Enter Password"/>
                    <span className="password-toogle-icon">{ToggleIcon}</span>
                </div>
                {errors.password && errors.password.type === "required" && (
                    <p className="text-danger">Password is required</p>
                )}
                {PasswordFocused && <PasswordStrengthIndicator validity={passwordValidity}/>}
                {passwordErr && <small className="text-danger">{passwordErr}</small>}
                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="lock" /></span>
                    </div>
                    <input type={PasswordInputType} name="confPassword" ref={register({required : true})}
                    className={classnames("form-control", { 'is-invalid': confPasswordErr })}
                    placeholder="Enter confirm password"
                    onChange={(e) => handleChange(e, 'confPassword')}/>                                  
                </div>
                {confPasswordErr && (<p className="text-danger">{confPasswordErr}</p>)}
                <div>
                 <small className="text-center">By clicking sign Up, you accept STIKbook's 
                    <a href="terms">Terms of Service, Data Policy
                            and Privacy Policy</a>.</small>
                </div>              
                <div className="form-group text-center">
                    <Button type="submit" className="btn"> SignUp</Button>
                </div>
                <div>
                    <p className="text-center">
                        Have an account? <a href="login">Login</a>
                    </p>
                </div>
           </form> 
           </CenterBox>
           </StyledBody>
        );
 }
export default UserName;