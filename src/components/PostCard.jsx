import { useState } from 'react'


export default function PostCard({ post, fetchPosts , token}) {
    //TODO show messages once send message is functional
    const { _id, title, author, description, location, price, willDeliver, messages} = post;
   
    return (
      <div className="postCard" key={_id}>
        <h3>{title}</h3>
        <p>Author: {author.username}</p>
        <p>Description: {description}</p>
        <p>Price: {price} Location: {location} Will Deliver: {willDeliver}</p>
        {/* <p>{messages.map()}</p> */}
        {token && <button>Send Message to Seller</button>}
        {
           // make button function to show message form below post. 
           // must be logged in to send message
        }
      </div>
    )
  }