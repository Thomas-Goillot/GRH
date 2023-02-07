import React from 'react';
import ListAgent from '../components/ListAgent';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="container-fluid">
            <Navigation />
            <h1 className='text-center mt-3 mb-3'>Information Agent depuis la table GRH</h1>
            <ListAgent/>
        </div>
    );
};

export default Home;