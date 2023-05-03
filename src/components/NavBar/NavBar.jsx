import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const displayName = user?.displayName;
    const photoURL = user?.photoURL;

    const handleLogOut = () => {
        logOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>The Tokyo Food</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ?
                            <span className='d-flex flex-column flex-md-row align-items-md-center gap-4'>
                                <img className='rounded-circle' style={{width: '40px', height: '40px'}} src={photoURL && photoURL} alt="Profile"
                                title={displayName && displayName} />
                                <Button onClick={handleLogOut} variant="light">Logout</Button>
                            </span> :
                                <Nav.Link as={Link} to='/login'>
                                    <Button variant="light" className='px-3 py-1'>Login</Button>
                                </Nav.Link>
                        }

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;