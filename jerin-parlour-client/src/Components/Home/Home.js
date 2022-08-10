import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <div className='bg-secondary'>
                <Navbar />
                <Banner />
            </div>
        </div>
    );
};

export default Home;