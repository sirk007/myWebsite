import React from 'react';
import './possibility.css';
import reactDatabase from '../../assets/reactDatabase.png';
import reactRoutes from '../../assets/reactRoutes.png';


const Possibility = () => {
    return (
        <div className="project__possibility section__padding" id="possibility">
            <div className="project__possibility-image">
                <img src={reactDatabase} alt="reactDB" />
            </div>
            <div className="project__possibility-content">
                <div className="project__possibility-image">
                    <img src={reactRoutes} alt="reactRoutes" />
                </div>
            </div>
        </div>
    )
}

export default Possibility;