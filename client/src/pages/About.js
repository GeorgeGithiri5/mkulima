import React from 'react'
import BannerContainer from '../components/Banner/BannerContainer'
import Banner from '../components/Banner/Banner'
import { Link } from 'react-router-dom'
import Abouts from '../components/About/About'

export default function About(){
    return(
        <>
            <BannerContainer bannerclass='productBanner'>
                <Banner heading='Who is Mkulima?'>
                    <Link to='/product' className='btn btn-warning'>View Our Products</Link>
                </Banner>
            </BannerContainer>
            <Abouts/>
        </>
    )
}