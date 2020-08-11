import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Logo from "../../assets/images/logo_stikbook.png";
import ForgotPassword from "./forgotpassword.css";
import 'react-tabs/style/react-tabs.css';
import PhoneInput from 'react-phone-input-2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UsePasswordToggle from "../../utils/usePasswordToggle";

const Forgotpassword = () => {
  const [PasswordInputType, ToggleIcon] = UsePasswordToggle();
  const [selectedTab, setSelectedTab] = useState('tab-1');

  return (
    <form action="ContinuePage" method="get">
    <div className="form-group">
    <a><img className="stikBookLogo" src={Logo} alt="Stikbook Logo"></img></a>
   
    <p className="text-center">Enter Email Address/Phone Number</p>
    </div>
    <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
      <TabList>
        <Tab item="tab-1">EMAIL ADDRESS</Tab>
        <Tab item="tab-2">PHONE NUMBER</Tab>
      </TabList>
      <TabPanel item="tab-1">
      <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="envelope" /></span>
                </div>
                    < input  type="email" className="form-control" placeholder="Email" />
                    <br></br>
       </div>
      </TabPanel>
      <TabPanel item="tab-2">
          <PhoneInput>
      <div className="form-group input-group">
                <div className="input-group-prepend">
                        <span className="input-group-text"> <FontAwesomeIcon icon="fa fa-phone" /></span>
                </div>
                    <input type="number"className="form-control" placeholder="Phone Number" />

      </div>
      </PhoneInput>     
      </TabPanel>
    </Tabs>
    <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
    </form>
  );
  
};

export default Forgotpassword;
