import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
const ClassDescription = () => {
    const classdescription = useLoaderData()
    const { title, price, details, image_url } = classdescription
    console.log(classdescription)
    return (
        <div>
            <h1 className='text-center'>Class Description</h1>
            <Card>
                <Card.Img variant="top" style={{ height: '300px' }} src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <h3>Class Price: {price}</h3>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ClassDescription;