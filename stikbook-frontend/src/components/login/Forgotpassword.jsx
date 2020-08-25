import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Logo from "../../assets/images/logo_stikbook.png";
import 'react-tabs/style/react-tabs.css';
import PhoneInput from "../../utils/phoneInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, StyledBody,CenterBox, Hr } from "../styledcomponets/lib";
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";

const Forgotpassword = () => {
  const {register, handleSubmit, errors} = useForm();
  const [selectedTab, setSelectedTab] = useState('tab-1');
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const history = useHistory();

  const onSubmit = data => {

    if(email !== undefined || phone !== undefined){
        history.push("./ContinuePage");
    }
  }

  return (
    <StyledBody>
    <CenterBox>
    <form onSubmit={handleSubmit(onSubmit)}>
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
                  <input type="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" ref={register({required : true})}/>
                  <br></br>
        </div>
        {errors.email && errors.email.type === "required" && (
          <p className="text-danger">Email Address is required</p>
        )}
      </TabPanel>
      <TabPanel item="tab-2">
      <PhoneInput />     
      </TabPanel>
      <div className="form-group text-center">
                    <Button type="submit" className="btn btn-link">Reset Password</Button>
    </div>
    </Tabs>
    </form>
    </CenterBox>
        </StyledBody>
  );
  
};

export default Forgotpassword;
