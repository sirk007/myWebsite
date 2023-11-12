import React from 'react';
import './features.css';
import { Feature } from '../../components';
import reactProjectCode from '../../assets/reactProjectCode.png';

const featuresData = [
    {
        title: 'Client-Side',
        text:'Implemented the client-side of the project using React.js, a powerful JavaScript library for building user interfaces. The focus was on creating a dynamic and responsive UI through the use of React components, state management, and props. This ensures a seamless and engaging experience for users, aligning with modern design principles.'
    },
    {
        title: 'Server-Side',
        text:'Utilized Node.js on the server side to handle server-side logic. Node.js provides a scalable and efficient runtime environment, allowing for the seamless execution of server-side operations. The integration of npm packages, including Express, facilitated the creation of robust APIs and the generation of databases for efficient data management.'
    },
    {
        title: 'API End-point Testing',
        text:'Conducted thorough API endpoint testing using tools such as Postman to validate functionality, performance, and reliability. This involved rigorous testing and optimization to meet project requirements and user expectations. Postman facilitated efficient testing and validation of various endpoints, ensuring seamless communication and data exchange.'
    },
    {
        title: 'React Routes',
        text:'Implemented React routes for navigation within the client-side application. Leveraged the React Router library to create a seamless and organized navigation experience. Utilized route parameters and dynamic routing to enhance the flexibility and functionality of the application. The React routes ensure a smooth flow between different views and components, contributing to an intuitive user journey.'
    },
]

const Features = () => {
    return (
        <div className="profile__features section__padding" id="experience">
            <div className="profile__features-heading">
                <h1 className="gradient__text">React Project Source Code</h1>
                <div className="project__possibility-image">
                    <img src={reactProjectCode} alt="reactProjectCode" />
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

export default Features