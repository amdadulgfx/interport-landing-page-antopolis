import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import Programs from '../Programs/Programs';

const Home = () => {
    return (
        <div className='font-link'>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Programs></Programs>
            <Footer></Footer>
        </div>
    );
};

export default Home;