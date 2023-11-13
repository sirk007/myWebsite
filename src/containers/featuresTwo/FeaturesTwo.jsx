import React from 'react';
import './featuresTwo.css';
import { Feature } from '../../components';
import phpNavbar from '../../assets/phpNavbar.png';

const featuresData = [
    {
        title: 'MySQL PDO Connection',
        text:'Establishment of a robust MySQL PDO connection for efficient and secure data management. Utilizing best practices in database connectivity to ensure integrity and reliability in data storage and retrieval.'
    },
    {
        title: 'User Authentication and Authorization',
        text:'Implementation of secure user authentication and authorization mechanisms, ensuring data protection and controlled access to specific features for a secure and user-friendly experience.'
    },
    {
        title: 'API End-point Testing',
        text:'Conducted thorough API endpoint testing using tools such as Postman to validate functionality, performance, and reliability. This involved rigorous testing and optimization to meet project requirements and user expectations. Postman facilitated efficient testing and validation of various endpoints, ensuring seamless communication and data exchange.'
    },
    {
        title: 'Performance Optimization',
        text:'Strategies employed for performance optimization, including code optimization, caching mechanisms, and efficient database queries. These optimizations contribute to a highly performant application, offering a seamless user experience.'
    },
]


const FeaturesTwo = () => {
    return (
        <div className="profile__features section__padding" id="experience">
                <div className="profile__features-heading">
                <h1 className="gradient__text">PHP Project Source Code</h1>
                    <div className="project__possibility-image">
                        <img src={phpNavbar} alt="PhpNavbar" />
                    </div>
                </div>
            <div className="profile__feature-container">
                {featuresData.map((item, index) =>(
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
            
        </div>
    )
}

export default FeaturesTwo