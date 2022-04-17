import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p className='text-center py-2 px-4 px-md-0'>Copyright &copy; {year}. All rights reserved <span style={{color: "#ff3622"}}>Combat Gym Training.</span></p>
        </footer>
    );
};

export default Footer;