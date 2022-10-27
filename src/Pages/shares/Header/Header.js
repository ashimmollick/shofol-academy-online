import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const { user, providerLogin, logout } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(resulte => {
                const user = resulte.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand ><Link to='/' className='logo-design'>Shofol Academy</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All Couses</Nav.Link>
                        <Link to="/blog">Blog</Link>
                        <Nav.Link href="#pricing">Courses</Nav.Link>

                    </Nav>
                    <Nav>

                        {user?.photoURL ?
                            <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                            : <FaUser></FaUser>
                        }
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <small>{user?.displayName}</small>
                                        <Button variant="light" onClick={handleLogout} >Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                        <Button onClick={handleGoogleSignIn} variant="light"><FcGoogle /></Button>
                                    </>
                            }

                        </>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;