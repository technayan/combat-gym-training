import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import ClientReviews from './ClientReviews/ClientReviews';
import Services from './Services/Services';

const Home = () => {
    

    return (
        <div>
            <Banner />
            <Services />
            <ClientReviews />
            <Footer />
        </div>
    );
};

export default Home;