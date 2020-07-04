import React, { Component } from 'react';

import BannerContainer from '../components/Banner/BannerContainer'
import Banner from '../components/Banner/Banner'
import { Link } from 'react-router-dom';
import Welcomedesc from '../components/HomePageSections/welcome-desc';
import Footer from '../components/footer/Footer';

class Homepage extends Component {
    render() {
        return (
            <>
                <BannerContainer bannerclass='mainbanner'>
                    <Banner
                        heading='Mkulima,Kenya best farmer-customer bridge'
                        message='Mkulima,We connect you with the your customer conviently. We also Offer a convient platform
                        for you who is looking for a product, you just post it.'
                    >
                    <Link className='btn btn-warning' to='/product'>Products <span className='arrow'> > </span></Link>
                    </Banner>
                </BannerContainer>

                <Welcomedesc/>
                <Footer/>
            </>
        );
    }
}

export default Homepage;