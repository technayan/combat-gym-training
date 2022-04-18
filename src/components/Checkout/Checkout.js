import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const params = useParams();
    return (
        <div className='mt-5 pt-5'>
            <h2>Checkout page {params.id}</h2>
        </div>
    );
};

export default Checkout;