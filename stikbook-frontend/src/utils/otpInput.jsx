import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const OTPInputBOxs=()=> {

 const [enteredOtp, setEnteredOtp] = useState('');

const OTPBoxs = (<OtpInput
    inputStyle={{  
        width: '2rem',  
        height: '2rem',  
        margin: '20px 0.8rem',  
        fontSize: '1rem',  
        borderRadius: 4,  
        border: '2px solid rgba(0,0,0,0.4)',  
      }} 
    value={enteredOtp}
    onChange={setEnteredOtp}
    numInputs={6}
    otpType="number"
    isInputNum={true}  
    separator={<span>&nbsp;</span>}  
  />)
   
      return  OTPBoxs;
        
      
    
  
}
export default OTPInputBOxs;