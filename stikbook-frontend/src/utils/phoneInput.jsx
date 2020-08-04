import React, { useState } from "react";
import PhoneInput from 'react-phone-input';
import 'react-phone-input/lib/style.css'
 
const  phoneNumber = () =>{
    const [value, setValue] = useState()
    return (
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}/>
    )
  }
export default phoneNumber;