import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const NewSummery = ({ clas }) => {
    const { _id, title, price, image_url } = clas;
    return (


        <Col lg={4}>

            <Card className='my-4'>
                <Card.Img style={{ height: '200px' }} src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <h3>Price: {price}</h3>
                    </Card.Text>
                    <Button variant="success"><Link to={`/classdescription/${_id}`} className='text-white'>More description</Link></Button>
                </Card.Body>
            </Card>

        </Col >


    );
};

export default NewSummery;