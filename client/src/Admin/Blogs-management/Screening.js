import React, { Component } from 'react';
import Axios from 'axios';

class Screening extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        Axios.get("http://localhost:4000/blogscreening")
                .then(data=>{
                    this.setState({
                        data: data.data
                    })
                })
    }
    render() {
        const blogScreening = this.state.data.map(item=>{
            console.log(item)
            return(
                <div className="card p-2 my-1" key={item._id}>
                    <p className='lead'>Name: <strong>{ item.name }</strong></p>
                    <p>Phone Number: {item.contact}</p>
                    <p>{item.email}</p>
                    <p className='jumbotron'>{item.qualification}</p>
                    <p>Attachment: {item.cert}</p>
                        <div className='d-flex justify-content-between col-6 mx-auto'>
                            <button className="btn btn-warning">Authorize</button>
                            <button className="btn btn-danger">Decline</button>
                            <button className="btn btn-info">Delete</button>
                        </div>
                </div>
            )
        })
        return (
            <>
                <div className='header bg-success' style={{height:"15vh",color:"black"}}>
                    <h3>Qualification Screening Page</h3>
                </div>
                <div className='col-10 mx-auto'>
                    {blogScreening}
                </div> 
            </>
        );
    }
}

export default Screening;