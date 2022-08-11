import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <div className='bg-secondary'>
                <Navbar />
                <Banner />
            </div>
            <Services />
            <div className='bg-secondary py-36'><Advertise /></div>
            <div className='py-28'><Testimonials /></div>
        </div>
    );
};

export default Home;