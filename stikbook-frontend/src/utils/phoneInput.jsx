import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
 
const  PhoneNumber = () =>{
    const [value, setValue] = useState()
    const PhoneNumberInput =  (
      <PhoneInput
                    country={'ca'}
                    placeholder="Enter phone number"
                    value={value}
                    inputStyle={{width:'360px'}}
                    onChange={setValue}/>
    );
    return PhoneNumberInput;
  }
export default PhoneNumber;