import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
 
const  PhoneNumber = ({value,onChange}) =>{
    
   return  (
      <PhoneInput
                    country={'in'}
                    placeholder="Enter phone number"
                    value={value}
                    inputStyle={{width:'340px'}}
                    onChange={onChange}/>
    );
    
  }
export default PhoneNumber;