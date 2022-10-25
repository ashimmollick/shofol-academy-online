import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories, setCatagory] = useState([]);
    useEffect(() => {
        fetch('https://shofol-server-ashimmollick.vercel.app/educations')
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, [])
    return (
        <div>
            <h3>Total Subjects: {catagories.length}</h3>
            <div>
                {
                    catagories.map(catagory => <p key={catagory.id}>
                        <Link to={`/catagories/${catagory.id}`}>{catagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;