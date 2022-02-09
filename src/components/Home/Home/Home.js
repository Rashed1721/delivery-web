import React from 'react';
import DishType from '../../DishType/DishType';
import Footer from '../../Footer/Footer';
import PasswordReset from '../../LogIn/PasswordReset/PasswordReset';
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
            <PasswordReset></PasswordReset>
            <DishType></DishType>

        </div>
    );
};

export default Home;