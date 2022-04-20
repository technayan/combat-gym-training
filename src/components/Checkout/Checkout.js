import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css'

const Checkout = () => {
    const params = useParams();

    const notify = () => toast("Congratulations for Booking!");
    return (
        <div className='mt-5 pt-5 checkout-section'>
            <Container className='text-center'>
            <h2>Checkout page</h2>

            <button onClick={notify} className="btn btn-primary mt-5">Procced to checkout</button>
            <ToastContainer />
            </Container>
        </div>
    );
};

export default Checkout;