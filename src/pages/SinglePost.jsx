import { fetchPostsById } from "../API/APIFunctions";


export default function SinglePost({token, _id, fetchPosts}) {

    async function handleClick(_id) {
        console.log("ID FROM SINGLE POST", _id)
        //await fetchPostsById(token, _id);
        //await fetchPosts();
      }


    return (

        <>
            <h1>Single Post {console.log("ID FROM SINGLE POST", _id)}</h1>
          
        </>


    )

}