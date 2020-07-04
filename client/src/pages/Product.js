import React, { Component } from 'react';
import BannerContainer from '../components/Banner/BannerContainer';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Search from '../components/Search/Search';
import Categories from '../components/Categories/Categories';
import Recent from '../components/RecentProducts/Recent';
import Footer from '../components/footer/Footer'


class Product extends Component {
    render() {
        return (
            <>
                <BannerContainer bannerclass='productBanner'>
                    <Banner heading="Mkulima Nikujipanga!"
                    message='Sign-In below for More of our services'>
                        <Link className='btn btn-warning' to='sign-in'>Sign In</Link>
                    </Banner>
                </BannerContainer> 
                <Search/>
                <Categories/>
                <Recent/>
                <Footer/>
            </>
        );
    }
}

export default Product;