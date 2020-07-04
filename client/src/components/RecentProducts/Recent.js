import React from 'react'
import Image from '../../images/mainbanner.jpeg'

export default function Recent(){
    return(
        <>
        <div className='col-10 mx-auto mb-4 Recent'>
            <div className='header'>
                <h2 className='Recent-H'>Recent Products</h2>
            </div>
                <hr/>
                <div className='d-flex product-wrapper'>
                    <div className='product-Card col-lg-3 mt-sm-2 col-sm-8 mx-sm-auto'>
                        <div className='card-img-top text-center'>
                            <img alt='' className='img-fluid pro-Img' src={Image} />
                        </div>
                        <div className='prod-desc mt-2'>
                            <div className='prod-desc-row p-0'>
                                <p className='lead text-center'>Potato</p>
                            </div>
                            <div className='d-flex justify-content-center prod-desc-row p-0'>
                                <p><strong>Price:</strong> Ksh 8000</p>
                                <button className='btn btn-dark mx-auto'>View</button>
                                <button className='btn btn-warning buy ml-auto'>Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className='product-Card col-lg-3 mt-sm-2 col-sm-8 mx-sm-auto'>
                        <div className='card-img-top text-center'>
                            <img alt='' className='img-fluid pro-Img' src={Image} />
                        </div>
                        <div className='prod-desc mt-2'>
                            <div className='prod-desc-row p-0'>
                                <p className='lead text-center'>Potato</p>
                            </div>
                            <div className='d-flex justify-content-center prod-desc-row p-0'>
                                <p><strong>Price:</strong> Ksh 8000</p>
                                <button className='btn btn-dark mx-auto'>View</button>
                                <button className='btn btn-warning buy ml-auto'>Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className='product-Card col-lg-3 mt-sm-2 col-sm-8 mx-sm-auto'>
                        <div className='card-img-top text-center'>
                            <img alt='' className='img-fluid pro-Img' src={Image} />
                        </div>
                        <div className='prod-desc mt-2'>
                            <div className='prod-desc-row p-0'>
                                <p className='lead text-center'>Potato</p>
                            </div>
                            <div className='d-flex justify-content-center prod-desc-row p-0'>
                                <p ><strong>Price:</strong> Ksh 8000</p>
                                <button className='btn btn-dark mx-auto'>View</button>
                                <button className='btn btn-warning buy ml-auto'>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
        
    )
}