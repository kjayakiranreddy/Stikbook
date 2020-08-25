import React from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput=({dob,defaultValue,onChange})=> {

    const dateInput = (
    <DatePicker className="form-control"
    selected={dob} value={defaultValue} placeholderText={'Enter date of birth'}
    onChange={onChange}/>
    );
    return dateInput;
}

export default DatePickerInput;
