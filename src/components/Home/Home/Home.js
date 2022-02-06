import React from 'react';
import Footer from '../../Footer/Footer';
import AddCompany from '../../SignUp/AddCompany/AddCompany';
import CreateAccount from '../../SignUp/CreateAccount/CreateAccount';
import CreditCard from '../../SignUp/CreditCard/CreditCard';
import PhoneNumber from '../../SignUp/PhoneNumber/PhoneNumber';
import ReceiveText from '../../SignUp/ReceiveText/ReceiveText';
import SignUp from '../../SignUp/SignUp/SignUp';
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
            {/* <SignUp></SignUp>
            <AddCompany></AddCompany>
            <CreateAccount></CreateAccount>
            <PhoneNumber></PhoneNumber>
            <CreditCard></CreditCard>
            <ReceiveText></ReceiveText> */}

        </div>
    );
};

export default Home;