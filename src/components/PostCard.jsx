import { useState } from 'react'
import DeletePost from './deletePost';
import SinglePost from '../pages/SinglePost';
import SendMessageButton from '../components/SendMessageButton';



export default function PostCard({ post, fetchPosts, token }) {
    //TODO show messages once send message is functional
    const { _id, title, author, description, location, price, willDeliver, isAuthor, messages } = post;
    //console.log(willDeliver)
    //console.log(_id)
    let delivery = null;
    willDeliver ? delivery = "Yes" : delivery = "No"

    return (
        <div>
            <div>
           
            </div>
            <div className="postCard" key={_id}>
                <h3>{title}</h3>
                <p>Author: {author.username}</p>
                <p>Description: {description}</p>
                <p>Price: {price} Location: {location} Will Deliver: {delivery}</p>
                {/* <p>{messages.map()}</p> */}
                {token && <SendMessageButton token={token} id={_id} />}
                {token && <DeletePost token={token} _id={_id} fetchPosts={fetchPosts}/>}
                {
                    // make button function to show message form below post. 
                    // must be logged in to send message
                }
            </div>

        </div>

    )
}