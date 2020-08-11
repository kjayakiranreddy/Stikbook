import React from 'react';
import './utils/fontAwsomeIcons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/index";
import SignUp from "./components/signup/index";
import Verification from "./components/signup/verification-component"
import Navbar from "./components/home/navbar";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Interest from './components/home/interest';

function App() {
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/verification" component={Verification} />
            <Route path="/interest" component={Interest}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;