import React from 'react';
import img from '../../../assets/Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Advertise = () => {
    return (
        <div className='grid grid-cols-2 gap-24 mid-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='flex items-center'>
                <div>
                    <h1 className='text-4xl font-semibold'>Let us handle your <br /> screen <span className='text-primary'>Professionally</span>.</h1>
                    <p className='text-neutral text-sm font-normal my-10 leading-[24px]'>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum.</p>

                    <div className='flex gap-10'>
                        <div>
                            <h1 className='text-4xl font-bold text-primary'>500+</h1>
                            <p className='text-sm font-normal'>Happy Customer</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold text-primary'>160+</h1>
                            <p className='text-sm font-normal'>Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;