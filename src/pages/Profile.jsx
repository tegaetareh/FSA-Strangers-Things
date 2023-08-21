import { useState, useEffect } from "react"
import { fetchUser } from "../API/APIFunctions";
import PostCard from "../components/PostCard";
import PostsForm from "../components/PostsForm";
export default function Profile({ token }) {
    const [posts, setPosts] = useState([])
    // const [filteredPosts, setFilteredPosts] = useState([]);

    async function fetchData() {
        const data = await fetchUser()
        setPosts(data)
        // setFilteredPosts(data.posts)
        console.log("Data: ", data);


    }
    useEffect(() => {
        fetchData()
    }, [])



    return (

        <>
            
            <h1>Posts</h1>
            <main>
                {/* {
                    filteredPosts.map((post) => (
                        <PostCard
                            key={post._id}
                            post={post}
                            fetchPosts={fetchData}
                            token={token}
                        />
                    ))
                } */}
            </main>
        </>


    )

}