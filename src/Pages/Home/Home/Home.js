import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>

        </div>
    );
};

export default Home;