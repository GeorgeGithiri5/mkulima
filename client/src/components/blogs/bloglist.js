import React from 'react'
import Potatoes from '../../images/potates.jpeg'
import Avatar from '../../images/blogavatar.png'
import BlogComment from './BlogComment'
import Axios from 'axios'

export default class BlogList extends React.Component{
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:4000/blogAdd')
            .then(data=>{
                this.setState({
                    posts: data.data
                })
            })
    }
    render(){
        const blogs = this.state.posts.map(data=>{
            return(
                <div className='card' key={data._id}>
                            <header>
                            <h4 className='text-center'>{data.topic}</h4>
                            </header>
                                <div className='card-img-top blog-pic text-center'>
                                   <img src={Potatoes} alt="" style={{height: "30vh",width:"70%"}} className="img-fluid"/> 
                                </div>
                            <div className='card-body'>
                                <p className='lead' style={{color: "black"}}>
                                    {data.message}
                                </p>
                            <BlogComment/>
                            </div>
                        </div>
            )
        })
        return(
            <>
                <div className='col-10 mx-auto'>
                    <div className='display-1'>
                        <h5 className='text-center'>Our Blogs</h5>
                    </div>
                    <div className='recent'>
                        <div className='card-body'>
                            <div className='img-blogger border p-3 d-flex'>
                                <div className='col-3'>
                                    <img className='img-fluid' style={{borderRadius: "50%"}} src={Avatar} alt=''/>
                                </div>
                                <div className='col-4'>
                                    <h6 className='text-muted'>John De Mwangi</h6>
                                    <p className='lead' style={{color:"black"}}>Senior Agriculturist.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        {blogs}
                </div>
            </>
        )
    }
}