import { Link } from "react-router-dom"
export default function Navbar() {

    return(
        <>
            <ul>
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
            </ul>
        </>
    )
}