import React from 'react';
import {Footer, Blog, Possibility, Features, Custom, Header, ProjectTwo, FeaturesTwo, PossibilityTwo} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';


const App =() => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Custom />
            <Features />
            <Possibility />
            <ProjectTwo />
            <FeaturesTwo />
            <PossibilityTwo />
            <Blog />
            <CTA />
            <Footer />
        </div>
    )
}

export default App