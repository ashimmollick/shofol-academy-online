import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './leftSidenav.css'
const LeftSideNav = () => {
    const [catagories, setCatagory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news-catagories')
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, [])
    return (
        <div>
            <h3 className='mt-2'>Total Couse: {catagories.length}</h3>
            <div>
                {
                    catagories.map(catagory => <p key={catagory.id}>
                        <Link className='classList' to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                    </p>)
                }

            </div>
        </div>
    );
};

export default LeftSideNav;