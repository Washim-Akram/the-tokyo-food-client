import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl);
        setSuccess('');
        setError('');
        if(password.length < 6) {
            setError("Password must be 6 characters or longer.")
            return;
        }
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess("Successfully Registered!");
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })

      };

    return (
        <div className='container my-5 py-5 d-flex align-items-center justify-content-center'>
            <Form onSubmit={handleRegister} className='w-50'>
                <p className='text-success text-center fw-medium mb-3'>{success}</p>
                <p className='text-danger text-center fw-medium mb-3'>{error}</p>
                <h2>Please Register</h2>
                <Form.Group controlId="formName" className='mb-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" required/>
                </Form.Group>

                <Form.Group controlId="formEmail" className='mb-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required/>
                </Form.Group>

                <Form.Group controlId="formPassword" className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required/>
                </Form.Group>

                <Form.Group controlId="formPhotoUrl" className='mb-3'>
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter photo URL" name="photoUrl" required/>
                </Form.Group>

                <Button variant="dark" type="submit">
                    Registration
                </Button>
                <Link to='/login'>
                    <Button className='d-block mt-3' variant="link">Already have an account ? Please Login</Button>
                </Link>
            </Form>
        </div>
    );
};

export default Register;