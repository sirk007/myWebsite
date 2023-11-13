import React from 'react';
import cvPdf from '../../assets/kristijonasChmieliauskas-CV.pdf';

import './cta.css';
const CTA = () => {
    const downloadCV = () => {
        const filename = 'kristijonasChmieliauskas-CV.pdf';
        const link = document.createElement('a');
        link.href = cvPdf;
        link.setAttribute('download', filename);

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };


    return (
        <div className="home__resume" id="resume">
            <div className="home__resume-content">
                <p>Software Developer</p>
                <h3>Download my CV to learn more about my skills and experience.</h3>
            </div>
            <div className="resume-btn">
                <button type="button" onClick={downloadCV}>Download</button>
            </div>
        </div>
    )
}

export default CTA