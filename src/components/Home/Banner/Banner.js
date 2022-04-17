import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner mt-5 d-flex align-items-center justify-content-center'>
            <div className="banner-text text-white">
                <h1 className='banner-title'>Be Confident</h1>
                <h4 className='banner-sub-title'>With Your Body</h4>
                <button className='banner-btn mt-3'>Book a Session</button>
            </div>
        </div>
    );
};

export default Banner;