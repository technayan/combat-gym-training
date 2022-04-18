import React, { useRef } from 'react';
import './Banner.css'

const Banner = () => {
    
    return (
        <div className='banner mt-5 d-flex align-items-center justify-content-center'>
            <div className="banner-text text-white text-center">
                <h1 className='banner-title'><span className='d-block d-md-inline'>Build</span> Your Body</h1>
                <h4 className='banner-sub-title'>With Nayan</h4>
                <button onClick={() => window.location.href = '#services'} className='banner-btn mt-3'>Book a Session</button>
            </div>
        </div>
    );
};

export default Banner;