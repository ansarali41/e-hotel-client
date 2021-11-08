import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProvideServices from '../ProvideServices/ProvideServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProvideServices></ProvideServices>
            <ClientsFeedback></ClientsFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;
