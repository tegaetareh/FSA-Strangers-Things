import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { fetchUser, fetchUserPosts, fetchUserMessages } from "../API/APIFunctions";
import ProfileCard from "../components/ProfileCard";
import PostCard from "../components/PostCard";
export default function Profile({ token }) {
    const [posts, setPosts] = useState([])
    const [postData, setPostData] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([]);


    async function fetchData() {
        const data = await fetchUserMessages(token)
        const postResult = await fetchUserPosts(token)
        setPosts(data)
        setPostData(postResult)
        setFilteredPosts(postResult)
        console.log("Data from profile: ", data);
        console.log("Posts data is", postResult)


    }
    useEffect(() => {
        fetchData()
    }, [])
    const activePosts= filteredPosts.filter((post) => {
        return post.active ===true
    })



    return (

        <>


            <h1>Welcome</h1>
            {/* {token && <h2>{posts.username}</h2>} */}
            {/* <p> Please  <Link to="/login">Login</Link></p> */}

            <main>
                <h2>Messages</h2>
                <div>{token ? <div>

                    {/* //renders if token is present             */}
                    {posts.map((post) => (
                        <div><p key={post._id}></p>
                            <div>
                                Message to: {post.post.author.username}
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
        </>


    )

}