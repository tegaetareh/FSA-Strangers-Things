import { useState, useEffect } from "react"
import { fetchPosts } from "../API/APIFunctions";
export default function Posts() {

    async function fetchData() {
        const data = await fetchPosts()
        console.log("Data: ", data);


    }
    useEffect(() => {
        fetchData()
    }, [])


    return (

        <>
            <h1>Posts</h1>
        </>


    )

}