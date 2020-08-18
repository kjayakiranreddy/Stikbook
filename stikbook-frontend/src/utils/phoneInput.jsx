import React, { useState,useEffect } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
 
const  PhoneNumber = (props) =>{
    const [phone, setPhone] = useState();
     useEffect(() => {
        setPhone(props.phone);
      }, [props.phone]);
    const PhoneNumberInput =  (
      <PhoneInput
                    country={'ca'}
                    placeholder="Enter phone number"
                    
                    inputStyle={{width:'335px',backgroundColor: '#f1f1f1a3'}}
                    />
    );
    return PhoneNumberInput;
  }
export default PhoneNumber;