import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { fetchUser, fetchUserPosts, fetchUserMessages } from "../API/APIFunctions";
import ProfileCard from "../components/ProfileCard";
import PostCard from "../components/PostCard";
export default function Profile({ token }) {
    const [posts, setPosts] = useState([])
    const [userProfile, setUserprofile] = useState([])
    const [postData, setPostData] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([]);


    async function fetchData() {
        const data = await fetchUserMessages(token)
        const postResult = await fetchUserPosts(token)
        const getUserProfile = await fetchUser(token)
        setPosts(data)
        setPostData(postResult)
        setFilteredPosts(postResult)
        setUserprofile(getUserProfile)
        console.log("User message: ", data);
        console.log("Users Post data is", postResult)
        console.log("UserProfile in fetchdATA", userProfile)


    }
    useEffect(() => {
        fetchData()
    }, [])
    const activePosts = filteredPosts.filter((post) => {
        return post.active === true
    })



    return (

        <>
        <div className="profile">


            <h1>Welcome {token && userProfile.username}</h1>
            {/* {token && <h2>{userProfile.username}</h2>} */}
            {/* <p> Please  <Link to="/login">Login</Link></p> */}
            {console.log("User profile in return statement", userProfile)}

            <main>
                <h2>Messages</h2>
                <div>{token ? <div>

                    {/* //renders if token is present             */}
                    {posts.map((post) => (
                        //i put the key in the root div and thats what stopped the unique key error.
                        <div key={post._id}>
                            <div >
                                Message to: {post.post.author.username} <br />
                                Message is: {post.content}
                            </div>


                        </div>

                    ))


                    }
                    <h2>Posts</h2>
                    {
                        activePosts.map((post) => (
                            <ProfileCard
                                key={post._id}
                                post={post}
                                fetchPosts={fetchData}
                                token={token}
                            />
                        ))
                    }




                </div> : <h3>Please <Link to="/login">Login</Link></h3>}</div>
                {

                    // posts.map((post) => (
                    //     <div><p key={post._id}></p>
                    //     <div>
                    //         Message to: {post.post.author.username} 
                    //         Message is: {post.content}
                    //     </div>


                    //      </div>

                    // ))



                }
            </main>
            <section>

                {/* {
                        postData.map((post) => (
                        <ProfileCard
                            key={post._id}
                            post={post}
                            fetchPosts={fetchData}
                            token={token}
                        />
                    ))
                } */}
            </section>
            </div>
        </>


    )

}