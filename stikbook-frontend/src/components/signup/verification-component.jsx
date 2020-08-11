import React,{ useState } from "react";
import OTPInputBox from "../../utils/otpInput";
import Logo from "../../assets/images/logo_stikbook.png";

const Verification = (props) => {
    return (
        <form>
            <div className="form-group">
                <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
                <h3 className="text-center">Join Stikbook</h3>
                <small className="text-center" >Are you ready to meet great talent from around the world?</small>               
                <h4 className="text-center">Verification</h4>
                <p className="text-center"><small >Enter the 6-digit code sent to your </small>
                <h5 className="text-center">Email Address/ Phone Number</h5></p>
                <OTPInputBox/>

                <p className="text-center"><a className="text-center" href="">Resend Code</a></p>
            </div>

            <div className="form-group text-center">
                <button type="submit" className="btn btn-link"><a href="interest">Continue</a></button>
                <p className="text-center">
                    Have an account? <a href="login">Login</a>
                </p>
            </div>
        </form>
    );
}
export default Verification;