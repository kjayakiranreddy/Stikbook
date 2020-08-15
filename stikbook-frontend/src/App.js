import React from 'react';
import './utils/fontAwsomeIcons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forgotpassword from "./components/login/Forgotpassword";
import Login from "./components/login/index";
import SignUp from "./components/signup/index";
import Verification from "./components/signup/verification-component";
import ContinuePage from "./components/login/ContinuePage";
import PasswordReset from "./components/login/PasswordReset";
import userName from "./components/signup/signup-userName-component";
import Navbar from "./components/home/navbar";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Interest from './components/home/interest';



function App() {
  return (<Router>
    <div className="App ">    
          <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/verification" component={Verification} />
                <Route path="/Forgotpassword" component={Forgotpassword} />
                <Route path="/ContinuePage" component={ContinuePage} />
                <Route path="/PasswordReset" component={PasswordReset} />
                <Route path="/signUp-userName" component={userName} />
              <Route path="/interest" component={Interest}/>
          </Switch>
    </div>
    </Router>
  );
}

export default App;