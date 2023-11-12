import React from 'react';
import {Feature} from '../../components'
import './projectTwo.css';

const ProjectTwo = () => {
    return (
        <div className="custom__container section__margin" id="projectTwo">
            <div className="custom-feature">
                <Feature title="PHP Project" text="In this PHP project, I applied a comprehensive set of technologies to deliver a robust and efficient solution. The project encompasses a variety of technologies, including HTML, CSS, Java, jQuery, PHP for server-side operations, and a relational MySQL database. Additionally, the Slim Framework was utilized for API routing, ensuring a streamlined and organized approach to handling requests."/>
            </div>
            <div className="custom-heading">
                <h1 className="gradient__text">A PHP Website</h1>
            </div>
            <div className="custom-container">
                <Feature title="Front-End" text="On the front-end, I leveraged HTML and CSS to create an engaging and visually appealing user interface. The use of Java and jQuery enhanced the interactivity of the application, providing users with a seamless and dynamic experience. The front-end design reflects my commitment to delivering user-centric solutions with a focus on aesthetics and usability."/>
                <Feature title="Server-Side" text="For server-side operations, PHP played a pivotal role in handling business logic and executing server-side functions. The PHP language, known for its versatility and efficiency, contributed to the overall performance of the application. Additionally, the Slim Framework was employed for API routing, ensuring a structured and organized approach to handling server-side requests and responses."/>
                <Feature title="Database" text="The project utilizes a relational MySQL database to manage and store data efficiently. MySQL, a reliable and widely-used database system, ensures data integrity and supports the project's scalability. The database architecture is designed to accommodate the specific requirements of the application, contributing to seamless data retrieval and management."/>
            </div>
        </div>
    );
}

export default ProjectTwo;
