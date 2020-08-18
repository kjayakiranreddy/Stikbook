import React, { useState,useEffect } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
 
const  PhoneNumber = ({value,onChange}) =>{
    
   return  (
      <PhoneInput
                    country={'in'}
                    placeholder="Enter phone number"
                    value={value}
                    onChange={onChange}
                    inputStyle={{width:'335px',backgroundColor: '#f1f1f1a3'}}
                    />
    );
    
  }
export default PhoneNumber;