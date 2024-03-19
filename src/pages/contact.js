import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/contact/ContactUs';

const Contact = () => {
    return (
        <>
           <Header />
            <ContactUs web3formsAccessKey="b1c275cd-e749-49e3-82cf-537ac0a8bcde" />
           <Footer /> 
        </>
    );
};

export default Contact;