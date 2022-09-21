import React, { Component } from 'react'
import './StatusBar.css';
import Avatar from '@material-ui/core/Avatar';
import status_img from '../../images/pp1.png';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusList: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        let data=[
            {
                "username":"im_.abhii_2.0",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"bik_1607",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"srijan_rajj",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"mr_devil_7507",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"ifeel.like.yoyo_",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"kumari_shruti18",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"srivastavaaman31",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"_its_okk_",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"_nishh._",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"abhishekramdut",
                "imageURL":"../../images/pp1.png"
            }
        ]
        this.setState({statusList: data});
    }
    
    render() { 
        return (
            <div>
                <div className='Statusbar_container'>
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className="status">
                                <Avatar className='statusbar_status' src={status_img} />
                                <div className='statusbar_text'>{item.username}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
 
export default StatusBar;