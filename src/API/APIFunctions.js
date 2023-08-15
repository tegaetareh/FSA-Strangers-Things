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