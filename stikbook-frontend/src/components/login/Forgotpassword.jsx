import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Logo from "../../assets/images/logo_stikbook.png";
import 'react-tabs/style/react-tabs.css';
import PhoneInput from "../../utils/phoneInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UsePasswordToggle from "../../utils/usePasswordToggle";

const Forgotpassword = () => {
  const [PasswordInputType,ToggleIcon] = UsePasswordToggle();
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
      <PhoneInput />     
      </TabPanel>
      <div className="form-group text-center">
                    <button type="submit" className="btn btn-link">Reset Password</button>
    </div>
    </Tabs>
    </form>
  );
  
};

export default Forgotpassword;
