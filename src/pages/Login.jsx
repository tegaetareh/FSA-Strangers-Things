import { useState } from "react"
import {Routes, Route, useNavigate} from 'react-router-dom'
export default function Login({setToken, token}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    function navigateToPosts(){
        // 👇️ navigate to /
       
        navigate('/posts');
        
      };
    async function handleSubmit(event) {
        event.preventDefault();
        // if(password.length<5){
        //     setUsername('')
        //     setPassword('')
        //     return(setError("Password must be five characters or more"))
        // }
       
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2302-acc-et-web-pt-a/users/login', 
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
            setUsername('')
            setPassword('')
            
            // console.log(result);
            if(!result.success){
                setError(result.error.message)
                console.log(result.error.message)
            }

            setSuccessMessage(result.data.message)
            //setToken(result.data.token)
            console.log("login passed", token)
            //console.log("Token: ", result.data.token) 
            localStorage.setItem('Token', result.data.token);
            console.log("login local storage", localStorage.getItem('Token'))
            setToken(localStorage.getItem('Token'))
            // setToken(genToken)
            console.log("login after set token", token)
            //console.log("Success message", successMessage)
            //console.log("Error is ", error)
            navigateToPosts();
            
        } catch (error) {
          //setError(error.message);
        }
        
      }


    return (

        <>
            <h1>Login</h1>
            <div>
                {successMessage && <p className="success"> {successMessage}</p>}     
                {error && <p className='error'>{error}</p>} 
                <form onSubmit={handleSubmit}>
                    <label>
                        Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button>Submit</button>
                </form>

            </div>
        </>


    )

}