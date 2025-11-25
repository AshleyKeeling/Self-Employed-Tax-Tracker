import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import logo from '../assets/logo.png';
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const NavBar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleLogoutClick = () => {
        logout();
    }

    return (
        <Navbar variant="dark" expand="lg" sticky="top" className="primary-bg">
            <Container >
                {/* Left: Logo */}
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    <img
                        src={logo}
                        alt="Logo"
                        // width="35"
                        height="50"
                        className="rounded-3 d-inline-block align-text-top me-2"
                    />

                </Navbar.Brand>

                {/* Right: Buttons */}
                {/* defualt*/}
                {!user ?
                    <div className="ms-auto d-flex gap-2">
                        <Button as={Link} to="/login" className="secondary-bg rounded-3 secondary-border ">
                            Login
                        </Button>
                        <Button as={Link} to="/register" className="secondary-colour primary-bg secondary-border rounded-3">
                            Register
                        </Button>
                    </div>
                    :
                    <div>
                        <Button onClick={handleLogoutClick} className="secondary-colour primary-bg secondary-border rounded-3">
                            Log Out
                        </Button>
                    </div>
                }
                {/* if user is signed in */}
            </Container>
        </Navbar >
    )
}

export default NavBar;