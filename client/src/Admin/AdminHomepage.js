import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminHomepage extends Component {
    render() {
        return (
            <div>
                This is the AdminHomepage
                <div className="">
                    <Link to='/BlogScreening' className ='btn btn-warning'>BlogScreening</Link>
                </div>
            </div>
        );
    }
}

export default AdminHomepage;