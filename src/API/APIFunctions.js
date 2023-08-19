const COHORT_NAME = '2302-acc-et-web-pt-a';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
export async function fetchPosts() {
  try {
    const response = await fetch(
      `${API_URL}/posts`
    );
    const result = await response.json();
    // console.log("Data: ", result.data);
    return result.data;
    
  } catch (err) {
    console.error(err);
  }
}


export async function createNewPost(newPost, token) {
    console.log("New post is: ", newPost)
    console.log (token)
    try {
        const response = await fetch(`${API_URL}/posts`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(newPost)
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
    
}