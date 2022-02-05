import React from 'react';
import './LearnMore.css'
import icon5 from '../../../image/Photos and Icons/icon5.png'
import icon6 from '../../../image/Photos and Icons/icon6.png'
import icon7 from '../../../image/Photos and Icons/icon7.png'


const LearnMore = () => {
    return (
        <div className='learn-more' style={{ marginTop: 50 }}>
            <h3>Learn more about GG</h3>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: 50,
                marginBottom: 150

            }}>

                <div style={{
                    border: "2px solid goldenrod ",
                    borderRadius: 8,
                    width: '25%',
                    padding: 10,
                    boxSizing: 'border-box'

                }}>
                    <img src={icon5} alt="" />
                    <h3>GG Perks</h3>
                    <p>we allow employers to offer <br />
                        subsidize meals to their <br />
                        employees
                    </p>

                    <button style={{ backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", paddingTop: 5, paddingBottom: 5, width: '90%', color: 'white', borderColor: 'transparent', position: 'relative', bottom: 10 }}>GG PERKS</button>
                </div>
                <div style={{
                    border: "2px solid goldenrod",
                    borderRadius: 8,
                    width: '25%',
                    height: 500,
                    padding: 10,
                    boxSizing: 'border-box'

                }}>
                    <img src={icon6} alt="" />

                    <h3>Drive For us</h3>
                    <p>Earn to $35-$55 for an hour of <br />
                        work each day
                    </p>

                    <button style={{ backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", paddingTop: 5, paddingBottom: 5, width: '90%', color: 'white', borderColor: 'transparent', position: 'relative', bottom: '10px' }}>DRIVER AFFILLIATE</button>
                </div>
                <div style={{
                    border: "2px solid goldenrod",
                    borderRadius: 8,
                    width: '25%',
                    padding: 30,
                    boxSizing: 'border-box'

                }}>
                    <img src={icon7} alt="" />

                    <h3>Partner With Us</h3>
                    <p>Cenerate revenue before the daily <br />
                        lunch rush begins
                    </p>
                    <button style={{ backgroundImage: " linear-Gradient( to right, #0cce87, #51b855)", paddingTop: 5, paddingBottom: 5, width: '90%', color: 'white', borderColor: 'transparent', position: 'relative', bottom: 10 }}>DRIVER AFFILLIATE</button>
                </div>

            </div>
            <hr />

        </div >
    );
};

export default LearnMore;