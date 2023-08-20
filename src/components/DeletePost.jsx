import { deletePost } from "../API/APIFunctions";
import { useNavigate } from "react-router-dom";

export default function DeletePost({token, _id, fetchPosts}) {

    async function handleClick(_id) {
        await deletePost(token, _id);
        await fetchPosts();
      }


    return (

        <>
            <button onClick={() => handleClick(_id)}>  Delete Post </button>
          
        </>


    )

}