import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput=()=> {
    

    const [startDate, setStartDate] = useState();
    const dateInput = (<DatePicker className="form-control" 
    selected={startDate} placeholderText={'Enter date of birth'}
    onChange={setStartDate}/>);
    return dateInput;
}

export default DatePickerInput;
