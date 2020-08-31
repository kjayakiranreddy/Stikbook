import React,{useState, useMemo} from 'react';
import './utils/fontAwsomeIcons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Forgotpassword from "./components/login/Forgotpassword";
import Login from "./components/login/index";
import SignUp from "./components/signup/index";
import Verification from "./components/signup/verification-component";
import PasswordReset from "./components/login/PasswordReset";
import userName from "./components/signup/signup-userName-component";
import Interest from './components/home/interest';
import {UserContext} from './components/context/userContext';




function App() {
  const [userEmail,setUserEmail]=useState(null);
  const providerValue = useMemo(()=>({userEmail,setUserEmail}),[userEmail,setUserEmail])
  return (<Router>
    <div className="App ">    
          <Switch>
                <Route exact path='/' component={Login} />
                <UserContext.Provider value={providerValue}>
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/verification"
                  render={props => {
                    if( userEmail == null) return <Redirect to="/login" />;
                    return <Verification {...props}/>;
                  }}/>
                  <Route path="/Forgotpassword" component={Forgotpassword} />
                  <Route path="/ContinuePage" 
                  render={props => {
                    if( userEmail == null) return <Redirect to="/login" />;
                    return <ContinuePage {...props}/>;
                  }} />
                  <Route path="/PasswordReset" 
                  render={props => {
                    if( userEmail == null) return <Redirect to="/login" />;
                    return <PasswordReset {...props}/>;
                  }} />
                  <Route path="/UsernameSignup"
                  render={props => {
                    if( userEmail == null) return <Redirect to="/login" />;
                    return <userName {...props}/>;
                  }} />
                  <Route path="/Interest" 
                  render={props => {
                    if( userEmail == null) return <Redirect to="/login" />;
                    return <Interest {...props}/>;
                  }} />
                </UserContext.Provider>
              <Redirect from="/" exact to="/login" />
              <Redirect to="/not-found" />
          </Switch>
    </div>
    </Router>
  );
}

export default App;