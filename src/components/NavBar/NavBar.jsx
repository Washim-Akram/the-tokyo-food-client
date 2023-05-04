import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './NavBar.css';


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
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='py-4'>
                <Container>
                    <Navbar.Brand className='fw-bold fs-3' as={Link} to='/' title='The Tokyo Food'>The Tokyo Food</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mx-auto">
                        <NavLink
                            title='Home'
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                            Home
                        </NavLink>

                        <NavLink
                            title='Blog'
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            >
                            Blog
                        </NavLink>

                    </Nav>
                    <Nav>
                        {
                            user ?
                            <span className='d-flex flex-column flex-md-row align-items-md-center gap-4'>
                                <img className='rounded-circle' style={{width: '40px', height: '40px', cursor: 'pointer'}} src={photoURL && photoURL} alt="Profile"
                                title={displayName && displayName} />
                                <Button onClick={handleLogOut} variant="outline-danger" title='Logout'>Logout</Button>
                            </span> :
                                <Nav.Link as={Link} to='/login'>
                                    <Button variant="outline-danger" className='px-3 py-1' title='Login'>Login</Button>
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