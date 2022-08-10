import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div className='mid-container'>
            <div className='grid grid-cols-2  mt-10'>
                <div className='flex items-center'>
                    <div>
                        <h1 className='text-5xl font-bold mb-5 leading-[60px]'>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                        <p className='text-neutral text-sm font-normal mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aut voluptatem laborum laboriosam. Est corrupti ut distinctio accusantium <br /> earum dolore debitis omnis</p>
                        <Link to='/' ><button className='btn btn-primary lg:px-5 '>Get an Appointment</button> </Link>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;