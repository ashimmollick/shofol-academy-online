import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../shares/Header/Header';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Container >
                <Row className='mt-5 ms-5'>
                    <div className='mx-2'>
                        <h2>What is cors?</h2>
                        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources</p>
                    </div>
                    <div className='mx-2'>
                        <h2>Why are you using firebase?</h2>
                        <p>
                            Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity
                        </p>
                    </div>
                    <div className='mx-2'>
                        <h2>How does the private route work?</h2>
                        <p>
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
                        </p>
                    </div>
                    <div className='mx-2'>
                        <h2>What is Node? How does Node work?</h2>
                        <p>
                            Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser
                        </p>
                        <p>
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                        </p>
                    </div>
                </Row>
            </Container>

        </div>
    )
};

export default Blog;