import React, { Component } from 'react';
import './LoginPage.css'
import Grid from '@material-ui/core/Grid';
import insta_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIN from '../SignIn/SignIN';
import SignUp from '../SignUp/SignUp';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin: true
        }
    }

    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else
            this.setState({isLogin: true});
    }
    
    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="Loginpage_main">
                            <div>
                                <img src={insta_image} width="454" />
                            </div>
                            <div>
                                <div className="Loginpage_rightcomponent">
                                    <img className="Loginpage_logo" src={insta_logo} />
                                    <div className="Loginpage_signin">
                                        
                                        {
                                            this.state.isLogin ? <SignIN/> : <SignUp />
                                        }

                                        <div className="Loginpage_ordiv">
                                            <div className="Loginpage_dividor"></div>
                                            <div className="Loginpage_or">OR</div>
                                            <div className="Loginpage_dividor"></div>
                                        </div>

                                        <div className="Loginpage_fb">
                                            <img src={fb} height="15px" style={{ "marginRight":"5px" }} />
                                            Log in with Facebook
                                        </div>
                                        <div className="Loginpage_forgot">Forgot password?</div>
                                    </div>
                                </div>
                                <div className="Loginpage_signupoption">
                                    {
                                        this.state.isLogin ?
                                        <div className="Loginpage_signup">Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight=":"bold", "color":"#0395F6" }}>Sign up</span></div> :
                                        <div className="Loginpage_login">Have an account? <span onClick={this.changeLogin} style={{ "fontWeight=":"bold", "color":"#0395F6" }}>Log in</span></div>
                                    }
                                    
                                </div>

                                <div className="Loginpage_downloadsection">
                                    <div>Get the app.</div>
                                    <div className="Loginpage_option">
                                        <img className="Loginpage_dwing" src={appstore} width="136px" />
                                        <img className="Loginpage_dwing" src={playstore} width="136px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default LoginPage;