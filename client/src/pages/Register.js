import React, { Component } from 'react';
import BannerContainer from '../components/Banner/BannerContainer'
import { Link } from 'react-router-dom';
import RegisterExc from '../components/Register/Register'

class Register extends Component {
    render() {
        return (
            <div>
                <BannerContainer className="row" style={{}} bannerclass='mainbanner'>
                    <div className='col-lg-6'>
                        <div className="header">
                            <h3 className="text-muted Heading mb-0" style={{fontSize:70,lineHeight:1.5}}>Create An Account</h3>
                        </div>
                        <div>
                            <p className='lead' style={{color:"#fff",fontSize:30,lineHeight:1.6}}>Create An Account Today And Receive More Benefits in from Mkulima.
                            Already have an Account:
                            <Link className='btn btn-warning mx-2' to='/signIn'>Sign-In</Link>
                            </p>
                        </div>
                    </div>
                </BannerContainer>
                <div className="col-lg-8 mx-auto my-2" style={{color:"black"}}>
                    <p className="lead">Enter Your Details</p>
                <RegisterExc/>
                </div>
            </div>
        );
    }
}

export default Register;