import React from 'react';
import './NotFound.css'
import NotFoundImg from '../../images/404-img.png'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center not-found-container'>
            <div className='text-center'>
                <img className='not-found-img' src={NotFoundImg} alt="Page not found" />
                <h2>Page Not Found :(</h2>
            </div>
        </div>
    );
};

export default NotFound;