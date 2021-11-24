import React from 'react';
import Banner from '../Banner/Banner';
import NavigationBar from '../NavigationBar/NavigationBar';
import Programs from '../Programs/Programs';

const Home = () => {
    return (
        <div className='font-link'>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Programs></Programs>
        </div>
    );
};

export default Home;