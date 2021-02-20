import React from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import './CSS/Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isLoggedIn, } from './LogIn';

console.log(isLoggedIn);
class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link  className="logo"to={'/'}>QuizTime</Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link" to={'/'}>Home</Link>
                    {!isLoggedIn ?  <Link className="nav-item nav-link" to={'/login'}>Login</Link> : null}
                
                    <Link className="nav-item nav-link" to={'/signup'}>SignUp</Link>
                    </div>
                </div>
            </nav >
              )
    }
}

export default Nav;