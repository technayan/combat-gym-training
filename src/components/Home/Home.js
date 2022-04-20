import React from 'react';
import Banner from './Banner/Banner';
import ClientReviews from './ClientReviews/ClientReviews';
import Services from './Services/Services';

const Home = () => {

    return (
        <div>
            <Banner />
            <Services />
            <ClientReviews />
        </div>
    );
};

export default Home;