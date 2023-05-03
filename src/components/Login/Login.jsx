import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const {signIn, signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setSuccess('');
        setError('');

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess("Successfully Login!");
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
      };

      const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess("Successfully Login!");
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
      }

      const handleGithubLogin = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess("Successfully Login!");
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
      }

    return (
        <div className='container my-5 py-5 d-flex align-items-center justify-content-center'>
            <div className='w-50'>
                <Form onSubmit={handleLogin}>
                    <p className='text-success text-center fw-medium mb-3'>{success}</p>
                    <p className='text-danger text-center fw-medium mb-3'>{error}</p>
                    <h2>Please Login</h2>

                    <Form.Group controlId="formEmail" className='mb-3'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" required/>
                    </Form.Group>

                    <Form.Group controlId="formPassword" className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" required/>
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Login
                    </Button>
                </Form>
                <hr />
                <Button onClick={handleGoogleLogin} className='d-flex align-items-center gap-1 mb-3' variant="danger" type="button">
                       <FaGoogle></FaGoogle> Sign in with Google
                </Button>
                <Button onClick={handleGithubLogin} className='d-flex align-items-center gap-1 mb-3' variant="dark" type="button">
                       <FaGithub></FaGithub> Sign in with Github
                </Button>
                <Link to='/register'>
                    <Button variant="link">New User ? Please Registration</Button>
                </Link>
            </div>
        </div>
    );
};

export default Login;