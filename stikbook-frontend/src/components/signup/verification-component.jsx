import React,{ useState, useEffect} from "react";
import OTPInputBox from "../../utils/otpInput";
import Logo from "../../assets/images/logo_stikbook.png";
import { useHistory } from "react-router-dom";
import { Button, StyledBody,CenterBox} from "../styledcomponets/lib";
import axios from 'axios';


const Verification = (props) => {

    const [otp, setOTP] = useState();
    const history = useHistory();

    useEffect (() => {

    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {otp:otp}; 
        async function postData(){
            let {data: email} = await axios.post("auth/otp_verification", obj); 
            if(email !== undefined){
          
                history.push("./UsernameSignup");
            }  
        }    
        postData();   

     }
    return (
        <StyledBody>
        <CenterBox>
        <form onSubmit={handleSubmit}>
            <div className="form-group text-center">
                <a href=""><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                <h3 >Join Stikbook</h3>
                <small  >Are you ready to meet great talent from around the world?</small>               
                <h4>Verification</h4>
                <span><small >Enter the 6-digit code sent to your </small></span>
                <h5>Email Address/ Phone Number</h5>
                <OTPInputBox defaultValue={otp} onChange={(otp) => setOTP(otp)}/>

                <p className="text-center"><a className="text-center" href="">Resend Code</a></p>
            </div>

            <div className="form-group text-center">
                <Button type="submit" className="btn">Continue</Button>
               
            </div>
        </form>
        </CenterBox>
        <CenterBox>
        <p className="text-center">Have an account? <a href="login">Login</a></p>
        </CenterBox>
        </StyledBody>
    );
}
export default Verification;