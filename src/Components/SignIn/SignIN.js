import React, { Component } from 'react';
import Home from '../HomePage/Home';
import '../LoginPage/LoginPage.css';

class SignIN extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <input className="Loginpage_text" type="text" placeholder="Phone number, username, or email"></input>
                <input className="Loginpage_text" type="password" placeholder="Password"></input>
                <button className="Loginpage_button">Log In</button>
            </div>
         );
    }
}
 
export default SignIN;