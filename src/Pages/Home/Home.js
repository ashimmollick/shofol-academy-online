import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import EduDeacrip from '../EduDeacrip/EduDeacrip';


const Home = () => {
    const homeDesctips = useLoaderData(AuthContext);


    return (
        <Container>
            <Row>
                {
                    homeDesctips.map(homed => <EduDeacrip
                        key={homed.id}
                        homed={homed}
                    ></EduDeacrip>)
                }
            </Row>
        </Container>
    );
};

export default Home;