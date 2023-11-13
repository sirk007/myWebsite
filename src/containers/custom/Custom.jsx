import React from 'react';
import {Feature} from '../../components'
import './custom.css';

const Custom = () => {
    return (
        <div className="custom__container section__margin" id="projectOne">
            <div className="custom-feature">
                <Feature title="React Project" text="This project showcases my expertise in front-end development, where I leveraged React.js to build a dynamic and responsive user interface. Utilizing components, state management, and props, I created a seamless and engaging experience for users, emphasizing a modern and interactive design."/>
            </div>
            <div className="custom-heading">
                <h1 className="gradient__text">A React Website</h1>
            </div>
            <div className="custom-container">
                <Feature title="Front-End" text="For the front-end, I employed React.js, a powerful JavaScript library for building user interfaces. Leveraging React's component-based architecture, I crafted a dynamic and responsive UI that enhances user engagement. The project follows best practices in styling, ensuring a visually appealing and user-friendly experience."/>
                <Feature title="Server-Side" text="On the server side, I utilized Node.js to handle server-side logic. Node.js provides a scalable and efficient runtime environment, allowing for the seamless execution of server-side operations. Additionally, I utilized npm packages, including Express, to facilitate the creation of robust APIs and the generation of databases for efficient data management."/>
                <Feature title="Database" text="To manage the project's data, I used npm modules, including Express, to generate databases. This approach, combined with Node.js, allowed for effective data storage and retrieval. The database architecture ensures data integrity and supports the project's scalability as it continues to evolve."/>
            </div>
        </div>
    );
}

export default Custom;
