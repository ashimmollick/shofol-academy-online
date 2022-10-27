import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { useLoaderData } from 'react-router-dom';

import NewSummery from '../shares/NewSummery/NewSummery';

const Catagories = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <h2 className='text-center mt-4'>Total Class :{news.length}</h2>

            <Container>
                <Row>


                    {
                        news.map(clas => <NewSummery
                            key={clas._id}
                            clas={clas}
                        ></NewSummery>)
                    }

                </Row>
            </Container>


        </div>
    );
};

export default Catagories;