import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import ServicesBanner from '../components/services/ServicesBanner';
import ServicesCTA from '../components/services/ServicesCTA';
import ServicesSolutions from '../components/services/ServicesSolutions';
import Homeowners from '../components/services/Homeowners';
import AreYouReady from '../components/services/AreYouReady';
import WhatTenants from '../components/services/WhatTenants';
import OurServices from '../components/services/OurServices';
import CoolSolutions from '../components/services/CoolSolutions';
import FAQ from '../components/services/FAQ';
import WhyRenting from '../components/services/WhyRenting';
import WereReady from '../components/services/WereReady';

const ServicesPage = () => {
    return (
        <>
            <Header />
            <ServicesBanner />
            <ServicesCTA />
            <ServicesSolutions />
            <Homeowners />
            <AreYouReady />
            <WhatTenants />
            <OurServices />
            <CoolSolutions />
            <FAQ />
            <WhyRenting />
            <WereReady />
            <Footer />
        </>
    );
};

export default ServicesPage;