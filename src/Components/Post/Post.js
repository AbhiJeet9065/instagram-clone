import React, { Component } from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import postimage from '../../images/post.jpg';
import love from '../../images/love.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentList:[]
        }
    }

    render() { 
        return ( 
            <div className='post_container'>

                {/* Header */}
                <div className='post_header'>
                    <Avatar className="post_image" src="profileImage" />
                    <div className='post_username'>_abhi_2.0</div>
                </div>

                {/* Image */}
                <div>
                    <img src={postimage} width="615px" />
                </div>

                {/* Analytics */}
                <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img className='post_reactimage' src={love} />
                        <img className='post_reactimage' src={comment} />
                        <img className='post_reactimage' src={share} />
                    </div>
                    <div style={{"fontWeight":"bold", "marginLeft":"20px"}}>
                    9987 likes
                    </div>
                </div>

                {/* Comment Section */}
                <div>
                    <div className='post_comment'>Hello Comment 1</div>
                    <input className='post_commentbox' text="text" placeholder='Add a comment...' />
                </div>
            </div>
        );
    }
}
 
export default Post;