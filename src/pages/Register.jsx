import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    // if((username.length<8) ||(password.length<8)){
    //     setUsername('')
    //     setPassword('')
    //     return(setError("Username and Password must be eight characters or more"))
    // }
    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2302-acc-et-web-pt-a/users/register',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password
            }
          })
        })
      const result = await response.json();
      // setToken(result.data.token)
      setUsername('')
      setPassword('')
      if (!result.success) {
        setError(result.error.message)
        console.log(result.error.message)

      }
      console.log(result);
      console.log("Token: ", result.data.token)

      navigate('/login');
    } catch (error) {
      //setError(error.message);
      console.log(error)
    }

  }


  return (

    <>
      <div className="register">
        <h1 className="heading">Register</h1>
        <div>

          {error && <p className='error'>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label>
              Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
          </form>

        </div>
      </div>
    </>


  )

}