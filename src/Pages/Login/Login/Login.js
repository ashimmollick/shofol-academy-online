import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const Login = () => {
    const [error, setError] = useState('')
    const { SignIn } = useContext(AuthContext)
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        SignIn(email, password)
            .then(resulte => {
                const user = resulte.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)

            })

    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>


        </div>
    );
};

export default Login;