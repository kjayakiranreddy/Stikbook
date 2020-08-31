import React from 'react';
import { Route, Switch } from "react-router-dom";
import Forgotpassword from './components/login/Forgotpassword';
import Home from './components/home/home-component';
import Login from "./components/login/index";
import SignUp from "./components/signup/index";
import Verification from "./components/signup/verification-component";
import PasswordReset from "./components/login/PasswordReset";
import userName from "./components/signup/signup-userName-component";
import Navbar from "./utils/navbar";
import Interest from './components/home/interest';
import ContinuePage from "./components/login/ContinuePage";

import { faHome } from '@fortawesome/free-solid-svg-icons';
import './utils/fontAwsomeIcons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';



function App() {
  return ( 
          <Switch>
                
                <Route path="/login" component={Login} />
                <Route path="/userInfo" component={SignUp} />
                <Route path="/verification" component={Verification} />
                <Route path="/signup" component={userName} />
                <Route path="/forgot_password" component={Forgotpassword} />
                <Route path="/reset_password" component={PasswordReset} />
                <Route path="/interest" component={Interest}/>
                <Route path='/' component={Home}/>
              </Switch>
          
    
    
  );
}

export default App;