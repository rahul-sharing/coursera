import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Nav from '../components/Nav';
import SpecialDishes from '../components/SpecialDishes';

const Home = () => {
    return (
        <>
            <Nav />
            {/* <Header /> */}
            <Main />
            <SpecialDishes />
            <Footer />
        </>
    )
}

export default Home