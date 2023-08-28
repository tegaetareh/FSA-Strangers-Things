import { useState, useEffect } from "react"
import { fetchPosts } from "../API/APIFunctions";
import PostCard from "../components/PostCard";
import PostsForm from "../components/PostsForm";
export default function Posts({ token }) {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([]);

    async function fetchData() {
        const data = await fetchPosts()
        setPosts(data.posts)
        setFilteredPosts(data.posts)
        console.log("Data: ", data.posts);


    }
    useEffect(() => {
        fetchData()
    }, [])
    function handleSearch(e) {
        e.preventDefault()
        const search = e.target.value
        const filteredPosts = posts.filter((post) => {
            return post.title.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredPosts(filteredPosts)
    }


    return (

        <>
            <div className="posts">
                
                <form onSubmit={handleSearch}>
                    {/* <label htmlFor="search">Search Posts</label> */}
                    <input className="searchbar" onChange={handleSearch} type="text" id="search" />
                </form>
                {token && <PostsForm token={token} fetchData={fetchData} />}
                <h1>Posts</h1>
                <main>
                    {
                        filteredPosts.map((post) => (
                            <PostCard
                                key={post._id}
                                post={post}
                                fetchPosts={fetchData}
                                token={token}
                            />
                        ))
                    }
                </main>

            </div>
        </>


    )

}