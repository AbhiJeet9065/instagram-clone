import React, { Component } from 'react';
import './NavBar.css';
import Grid from '@material-ui/core/Grid';
import insta_logo from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import new_post from '../../images/new_post.svg';
import find from '../../images/find.svg';
import react from '../../images/love.svg';
import Avatar from '@material-ui/core/Avatar';
import pp1 from '../../images/pp1.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='navbar_barContent'>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={3}>
                        <img className='navbar_logo' src={insta_logo} width="105px" />
                    </Grid>
                    <Grid item xs={3}>
                        <input text="text" className='navbar_searchBar' placeholder='search' />
                    </Grid>
                    <Grid item xs={3} style={{ "display":"flex" }} >
                        <img className='navbar_img' src={home} width="25px" />
                        <img className='navbar_img' src={message} width="25px" />
                        <img className='navbar_img' src={new_post} width="25px" />
                        <img className='navbar_img' src={find} width="25px" />
                        <img className='navbar_img' src={react} width="25px" />
                        <Avatar className='navbar_img' src={pp1} style={{ "maxWidth":"25px", "maxHeight":"25px" }} />
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        );
    }
}
 
export default NavBar;