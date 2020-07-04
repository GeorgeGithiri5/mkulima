import React, { Component } from 'react';

// images Import
import Image1 from '../../images/featured-one.jpeg'
import Image2 from '../../images/featured-two.jpeg'
import Image3 from '../../images/featured-three.jpeg'



class welcomedesc extends Component {
    render() {
        return (
            <>
                <div className='desc-wrapper col-11 mx-auto'>
                <div className='header pt-2'>
                    <h5 className='text-center'>Mkulima,Every farmer's Choice!</h5>
                </div>
                <div className='d-flex col-10 mx-auto row-d'>
                    <div className='card col-lg-4 col-sm-8'>
                        <div className='card-img-top mt-1'>
                            <img src={Image1} alt='description' className='img-fluid'/>
                        </div>
                        <div className='card-header'>
                            <h6 className='text-muted'>Consumer-Farmer-Link</h6>
                        </div>
                        <div className='card-body bg-dark'>
                            <p className='lead'>Mkulima is platform that enhance quick and very cost effective
                            way of buying and selling farm Produce in Kenya. Eliminated Middleman,hence you sell or buy your products at a cost effective price.
                            </p>
                        </div>
                    </div>


                    <div className='card col-lg-4 col-sm-8  mx-3'>
                        <div className='card-img-top mt-1'>
                            <img src={Image2} alt='description' className='img-fluid'/>
                        </div>
                        <div className='card-header'>
                            <h6 className='text-muted'>Transport-Link</h6>
                        </div>
                        <div className='card-body bg-dark'>
                            <p className='lead'>
                                Mkulima makes it easy for you to get goods transportation. We have ready cars,which you can hire for your transportation.
                                The cost is effective for any distance.
                            </p>
                        </div>
                    </div>

                    
                    <div className='card col-sm-8 col-lg-4'>
                        <div className='card-img-top mt-1'>
                            <img src={Image3} alt='description' className='img-fluid'/>
                        </div>
                        <div className='card-header'>
                            <h6 className='text-muted'>Quality Farming Advice</h6>
                        </div>
                        <div className='card-body bg-dark'>
                            <p className='lead'>
                                Mkulima Offers tips on best practices in farming. We get Our Advice from experienced personels in agriculture
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </>
        );
    }
}

export default welcomedesc;