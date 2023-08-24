import { Link } from "react-router-dom"
export default function Navbar({ setToken, token }) {
    function handleLogout() {
        setToken("")
        localStorage.removeItem('Token');
        console.log("navbar",token);

    }

    return (
        <>
            {/* <ul>
               
                <p>Stranger's Things</p>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                {token && 
                    <li>
                    <a href="#" onClick={handleLogout}>Logout</a>
                    </li>}
            </ul> */}

            <p>Stranger's Things</p>
            {token ? <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>

                <li>
                    <a href="#" onClick={handleLogout}>Logout</a>
                </li>
            </ul> : <ul>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>



            </ul>}




        </>
    )
}