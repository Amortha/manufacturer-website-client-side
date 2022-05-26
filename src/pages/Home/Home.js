import React from 'react';
import Banner from './Banner';
import Bestsaling from './Bestsaling';
import Business from './Business';
import Contuct from './Contuct';
import Footer from './Footer';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Business/>
            <Bestsaling></Bestsaling>
            <Review/>
            <Contuct/>
            <Footer/>
        </div>
    );
};

export default Home;