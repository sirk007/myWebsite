import React from 'react';
import './possibilityTwo.css';
import phpDatabase from '../../assets/PhpDatabase.png';
import phpUserCreate from '../../assets/phpUserCreate.png';


const PossibilityTwo = () => {
    return (
        <div className="project__possibility section__padding" id="possibility">
            <div className="project__possibility-image">
                <img src={phpDatabase} alt="PhpDb" />
            </div>
            <div className="project__possibility-content">
                <div className="project__possibility-image">
                    <img src={phpUserCreate} alt="PhpUserCreate" />
                </div>
            </div>
        </div>
    )
}

export default PossibilityTwo;