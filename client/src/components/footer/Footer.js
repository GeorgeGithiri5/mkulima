import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className='footer bg-success col-12'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12'>
                        <div className='header'>
                            <h4>Contact Us</h4>
                        </div>
                        <div className='card-body'>
                            <p>
                                Email:<Link to=''>mkulima@gmail.com</Link>
                            </p>
                            <p>
                                Phone Number: 04444444
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;