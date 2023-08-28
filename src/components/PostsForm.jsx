import { useState } from "react"
import { createNewPost } from "../API/APIFunctions"


export default function PostsForm({token, fetchData}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('On Request')
    const [willDeliver, setWillDeliver] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const newPost = {
            post: {
                title: title,
                description: description,
                price: price,
                location: location,
                willDeliver: willDeliver,
               }
        }
        await createNewPost(newPost, token)
        setTitle('')
        setDescription('')
        setPrice('')
        setLocation('')
        setWillDeliver(false)
        fetchData()

    }

    
    return (
        <div className="newpostForm" >
            <h1>Add new Post</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
                type="text"
                required
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <label htmlFor="description">Description: </label>
            <textarea
                type="text"
                required
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <label htmlFor="price">Price: </label>
            <input
                type="text"
                required
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br></br>
            <label htmlFor="location">Location: </label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <br></br>
            <label htmlFor="willDeliver">Will Deliver: </label>
            <select
                id="willDeliver"
                value={willDeliver}
                onChange={(e) => setWillDeliver(e.target.value)}
            >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <br></br>
            <button className="submit">Submit</button>
        </form>
        </div>
    
        
    )
}