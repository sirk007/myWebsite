import React from 'react';
import {Article} from '../../components';
import {blogNode, blogPhp, blogMysql, blogJava, bashTerminal} from './imports';
import './blog.css';

const Blog = () => {
    return (
        <div className="home__blog section__padding" id="blog">
            <div className="home__blog-heading">
                <h1 className="gradient__text">Miscellaneous Technologies</h1>
            </div>     
            <div className="home__blog-container">
                <div className="home__blog-container_groupA">
                    <Article imgUrl={bashTerminal} date="Sep 26, 2021" title="Bash Terminal" />
                </div>
                <div className="home__blog-container_groupB">
                    <Article imgUrl={blogNode} date="Sep 26, 2021" title="Node JS" />
                    <Article imgUrl={blogPhp} date="Sep 26, 2021" title="PHP" />
                    <Article imgUrl={blogMysql} date="Sep 26, 2021" title="MySQL" />
                    <Article imgUrl={blogJava} date="Sep 26, 2021" title="Java" />
                </div>
            </div>     
        </div>
    )
}

export default Blog