import { postMessage } from "../API/APIFunctions";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


export default function SendMessageButton({ token, id }) {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    

    async function handleSubmit(e, _id) {
        //id = _id
        // console.log("ID FROM SEND MESSAGE BUTTON", _id)
        // const search = _id
        // const filteredPosts = posts.filter((post) => {
        //     console.log(post._id.toLowerCase().includes(search))
        //     return (post._id.toLowerCase().includes(search))
        //     // return post.id.includes(search)
        // })
        // setFilteredPosts(filteredPosts)
        // console.log("Filtered Post is: ", filteredPosts)
        // navigateToPosts();
        e.preventDefault();
        // console.log("Message is: ", message)
        // console.log(_id)
        const newPost = 
           {
                message: {content: message}
               }
        
        await postMessage(newPost, token,  id)
        setMessage("")


    }


    return (

        <>
            {/* <Routes>
                <Route path="/posts/singlepost" element={<SinglePost token={token} _id={_id} />} />
            </Routes> */}
            <form className="postForm" onSubmit={handleSubmit}>
                <label>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <button>Send Message</button>
            </form>

        </>


    )

}