import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import LogIn from './components/LogIn'
import Home from './components/Home'
import SignUp from './components/SignUp'


class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
       
        <div className="auth-wrapper">
          <div className="auth-ineer">
            <Switch>
              <Route exact path="/" component = {Home}/>
              <Route exact path="/login" component = {LogIn} /> 
              <Route exact path="/signUp" component = {SignUp} /> 

            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
}

export default App