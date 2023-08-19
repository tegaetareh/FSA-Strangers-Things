import { useState, useEffect } from "react"
import { fetchPosts } from "../API/APIFunctions";
import PostCard from "../components/PostCard";
import PostsForm from "../components/PostsForm";
export default function Posts({token}) {
    const [posts, setPosts] = useState([])

    async function fetchData() {
        const data = await fetchPosts()
        setPosts(data.posts)
        console.log("Data: ", data.posts);


    }
    useEffect(() => {
        fetchData()
    }, [])


    return (

        <>
             {token && <PostsForm token={token} fetchData={fetchData} />}
            <h1>Posts</h1>
            <main>
            {
                posts.map((post) => (
                    <PostCard 
                        key={post._id}
                        post={post}
                        fetchPosts={fetchData}
                        token = {token}
                        />
                ))
            }
            </main>
        </>


    )

}