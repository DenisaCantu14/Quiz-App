import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Quiz from './components/Quiz'
import Start from './components/Start'


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
              <Route exact path="/quiz" component = {Quiz} /> 
              <Route exact path="/start" component = {Start} /> 

            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
}

export default App