import { Link, useNavigate } from "react-router-dom"

export default function Navbar({ setToken, token }) {
    const navigate = useNavigate();
    function handleLogout() {
        setToken("")
        localStorage.removeItem('Token');
        console.log("navbar", token);

    }
    function goToHome() {
        
        navigate('/');

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
            <div className="navbar">
                <h1 className="logo"> <a href="#" onClick={goToHome}>Stranger's Things</a></h1>
                {token ? <ul className="nav-links">
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>

                    <li>
                        <a href="#" onClick={handleLogout}>Logout</a>
                    </li>
                </ul> : <ul className="nav-links">
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
            </div>



        </>
    )
}