import React,{ useState } from "react";
import OTPInputBox from "../../utils/otpInput";
import Logo from "../../assets/images/logo_stikbook.png";
import { useHistory } from "react-router-dom";
import { Button, StyledBody,CenterBox} from "../styledcomponets/lib";

const Verification = (props) => {

    const history = useHistory();
    const handleSubmit = (evt) => {
        // evt.preventDefault();
         history.push("./signup-userName");
     }
    return (
        <StyledBody>
            <CenterBox>
        <form onSubmit={handleSubmit}>
            <div className="form-group text-center">
                <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                <h3 >Join Stikbook</h3>
                <small  >Are you ready to meet great talent from around the world?</small>               
                <h4>Verification</h4>
                <p ><small >Enter the 6-digit code sent to your </small>
                <h5>Email Address/ Phone Number</h5></p>
                <OTPInputBox/>

                <p className="text-center"><a className="text-center" href="">Resend Code</a></p>
            </div>

            <div className="form-group text-center">
                <Button type="submit" className="btn">Continue</Button>
                <p className="text-center">
                    Have an account? <a href="login">Login</a>
                </p>
            </div>
        </form>
        </CenterBox>
        </StyledBody>
    );
}
export default Verification;