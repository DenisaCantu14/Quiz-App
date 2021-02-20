import React from 'react';
import { render } from 'react-dom';
import {Link} from "react-router-dom";

class Nav extends React.Component
{
    render()
    {
    return (
        <nav>
            <Link to ={ '/'}>Home</Link>
            <Link to ={'/login'}>Login</Link>
            <Link to ={'/signup'}>SignUp</Link>
        </nav>
    )
    }
}       

export default Nav;