import React, { useEffect, useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const EduDeacrip = ({ homed }) => {
    const { id, name, image_url } = homed;

    return (
        <Col lg={4}>
            <Card className='my-3'>
                <Card.Img variant="top" style={{ height: '160px' }} src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link className='classList' to={`/catagory/${id}`}><Button variant="primary">Go Class</Button></Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default EduDeacrip;