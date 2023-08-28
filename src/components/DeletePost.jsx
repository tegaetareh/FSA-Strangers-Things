import { deletePost } from "../API/APIFunctions";


export default function DeletePost({token, _id, fetchPosts}) {

    async function handleClick(_id) {
        await deletePost(token, _id);
        await fetchPosts();
      }


    return (

        <>
            <button className="deleteButton" onClick={() => handleClick(_id)}>  Delete Post </button>
          
        </>


    )

}