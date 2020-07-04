import React, { Component } from 'react';
import BannerContainer from '../components/Banner/BannerContainer';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import BlogList from '../components/blogs/bloglist';

class Blogs extends Component {
    render() {
        return (
            <>
                <BannerContainer bannerclass='productBanner'>
                    <Banner message='Listen To what Other Are saying'>
                        <div className='d-flex mx-auto'>
                            <Link to='/' className='btn btn-warning mx-2'>Go Home</Link>
                            <Link to='/product' className='btn btn-dark'>Products</Link>
                        </div>
                    </Banner>
                </BannerContainer>
                <div className="bg-dark d-flex justify-content-center lead">
                    <p style={{color:"white"}}>Would You Like To Participate In Blogging, Click Below For More.</p>
                    <Link className='text-danger mx-2' to= '/createblog'>Create Blog</Link>
                    <Link className= "text-warning" to='/AddBlog'>Add Blog</Link>
                </div>
                <BlogList/>
            </>
        );
    }
}

export default Blogs;