import React, { Component } from 'react';
import BannerContainer from '../components/Banner/BannerContainer'
import Login from '../components/LogIn/Login';

class SignIn extends Component {
    render() {
        return (
            <div>
                <BannerContainer bannerclass='mainbanner'>
                    <div className='col-lg-6 border-right text-center'>
                        <div className='header'>
                            <h3 className='text-muted' style={{fontSize:40}}>
                                Sign-In To Your Account
                            </h3>
                            <p className='lead' style={{color: "white",fontSize:25}}>
                                Hello,Mkulima Can Now deliver goods to Your door step!
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <Login/>
                    </div>
                </BannerContainer>
            </div>
        );
    }
}

export default SignIn;