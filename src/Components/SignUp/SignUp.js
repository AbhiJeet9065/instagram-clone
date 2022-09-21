import React, { Component } from 'react';
import "./SignUp.css";

class SignUp  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <input className="Loginpage_text" type="text" placeholder="Mobile Number or Email"></input>
                <input className="Loginpage_text" type="text" placeholder="Full Name"></input>
                <input className="Loginpage_text" type="text" placeholder="Username"></input>
                <input className="Loginpage_text" type="password" placeholder="Password"></input>
                <button className="Loginpage_button">Sign up</button>
            </div>
        );
    }
}
 
export default SignUp;