import React from 'react';
import './brand.css';
import { html5, css, js, bootstrap, react, nodejs, phplogo} from './imports';

const Brand = () => {
    return (
        <div className="profile__brand section__padding">
            <div className="profile__brand__container section__padding">
                <div>
                    <img src={html5} alt="html5" />
                </div>
                <div>
                    <img src={css} alt="css" />
                </div>
                <div>
                    <img src={js} alt="js" />
                </div>
                <div>
                    <img src={bootstrap} alt="bootstrap" />
                </div>
                <div>
                    <img src={react} alt="react" />
                </div>
                <div>
                    <img src={nodejs} alt="nodeJs"/>
                </div>
                <div>
                    <img src={phplogo} alt="phplogo"/>
                </div>
            </div>
        </div>
    )
}

export default Brand