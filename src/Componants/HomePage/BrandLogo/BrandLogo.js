import React from 'react';
import google from '../../../images/logos/google.png'
import airbnb from '../../../images/logos/airbnb.png'
import nexflix from '../../../images/logos/netflix.png'
import slck from'../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'
import './brandLogo.css';
const BrandLogo = () => {
    return (
        <div className='row d-flex brandLogo'>
            <img src={airbnb} alt=""/>
            <img src={nexflix} alt=""/>
            <img src={google} alt=""/>
            <img src={slck} alt=""/>
            <img src={uber} alt=""/>
        </div>
    );
};

export default BrandLogo;