import React, { Component } from 'react';

class Abouts extends Component {
    render() {
        return (
            <>
                <div className="col-8 mx-auto">
                    <h4 className='text-center' style={{fontWeight: 900,color: "var(--mainBlack)"}}>Mkulima Background Information.</h4>
                    <div className='card p-3'>
                        <p className='lead'>
                            Mkulima is platform developed for a Kenyan farmer to easily sell his/her Produce and also a buyer to easily
                            get what he/she is Looking for.
                        </p>
                    </div>
                    <h4 className='text-center' style={{fontWeight: 900}}>Mkulima Elimu</h4>
                    <div className='card p-3'>
                        <p className='lead'>
                            Mkulima offers farming Blogs where you can learn more on value addition to your produce as a farmer from 
                            qualified and experienced agriculturist. These blogs are so informative and can aid you to continously and value to your produce.
                        </p>
                    </div>
                    <h4 className='text-center' style={{fontWeight: 900}}>Mkulima Dawa</h4>
                    <div className='card p-3'>
                        <p className='lead'>
                            Mkulima Also offer farming pesticide,insecticides and other guidance on how to use them for maximum benefit.
                            We have specialists from different farming areas and they will accordingly advice you.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Abouts;