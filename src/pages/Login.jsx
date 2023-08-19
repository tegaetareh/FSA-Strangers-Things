import { useState } from "react"
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        // if((username.length<4) ||(password.length<5)){
        //     setUsername('')
        //     setPassword('')
        //     return(setError("Username and Password must be eight characters or more"))
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
            
            console.log(result);
            if(!result.success){
                setError(result.error.message)
                console.log(result.error.message)
            }

            setSuccessMessage(result.data.message)
            // setToken(result.data.token)
            //console.log("Token: ", result.data.token) 
            console.log(result.data.message)
            //console.log("Error is ", error)
            
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