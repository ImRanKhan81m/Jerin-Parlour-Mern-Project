import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='mid-container'>
            <h1 className='text-4xl font-bold text-center mt-24'>Our Awesome <span className='text-primary'>Services</span></h1>

            <div className=' my-16'>
                <Service />
            </div>
        </div>
    );
};

export default Services;