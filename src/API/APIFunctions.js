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

export async function deletePost(token, _id) {
    try {
        const response = await fetch(`${API_URL}/posts/${_id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const result = await response.json();
        console.log(result);
        
        return result
      } catch (err) {
        console.error(err);
      }

}

export async function fetchPostsById(token, _id) {
    try {
      const response = await fetch(
        `${API_URL}/posts/${_id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
          }
        }
      );
      const result = await response.json();
      console.log(result)
      console.log(`${API_URL}/posts/${_id}`)
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  export async function postMessage(newPost, token, _id) {
    // console.log("New post is: ", newPost)
    // console.log (_id)
    try {
        const response = await fetch(`${API_URL}/posts/${_id}/messages`, {
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

export async function fetchUser(token) {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        const result = await response.json();
        // console.log("token is: ", token)
        console.log(result.data);
        return result.data
      } catch (err) {
        console.error(err);
      }
  }