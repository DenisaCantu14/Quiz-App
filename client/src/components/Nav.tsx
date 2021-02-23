import React from 'react';
import { Link } from "react-router-dom";
import './CSS/Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

                    </div>
                </div>
            </nav >
              )
    }
}

export default Nav;