import React from 'react';
import Footer from '../../Footer/Footer';
import FirstSec from '../FirstSec/FirstSec';
import LearnMore from '../LearnMore/LearnMore';
import NavBar from '../NavBar/NavBar';
import PretyCool from '../PretyCool/pretyCool';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <FirstSec></FirstSec>
            <PretyCool></PretyCool>
            <LearnMore></LearnMore>
            <Footer></Footer>
        </div>
    );
};

export default Home;