import React, { Component } from 'react';
import axios from 'axios'

class CreateBlog extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            contact: "",
            message: "",
            email: "",
            file: ""
        }
    }
    onChangeName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    onChangeContact=(e)=>{
        this.setState({
            contact: e.target.value
        })
    }
    onChangeMessage=(e)=>{
        this.setState({
            message: e.target.value
        })
    }
    onChangeEmail=(e)=>{
        this.setState({
            email: e.target.value
        })
    }
    onChangeUpload=(e)=>{
        this.setState({
            file: e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const post = {
            name: this.state.name,
            contact: this.state.contact,
            qualification: this.state.message,
            cert: this.state.file,
            email: this.state.email
        }
        axios.post("http://localhost:4000/blogscreening",post)
                alert(`Thank You For Your Request,We will get back to you ` + this.state.name )
    }
    render() {
        return (
            <>
                <div className='bg-dark d-flex justify-content-between' style={{height:"20vh",color:"white"}}>
                    <h3>Mkulima need Some Information from you Approve You as A Bloger.</h3>
                </div>

                <form className="col-10 mx-auto" onSubmit = {this.onSubmit}>
                    <div className='form-group'>
                        <label>Enter Full Name:</label>
                        <input className="form-control" 
                        value = {this.state.name}
                        onChange = {this.onChangeName}
                        placeholder="Enter Full Name..."
                         />
                    </div>
                    <div className='form-group'>
                        <label>Enter Phone Number:</label>
                        <input className="form-control" 
                        value = {this.state.contact}
                        onChange = {this.onChangeContact}
                        placeholder="Enter Phone Number..."
                         />
                    </div>
                    <div className='form-group'>
                        <label>Describe Qualifaction:</label>
                        <textarea className="form-control" 
                        value = {this.state.message}
                        onChange = {this.onChangeMessage}
                        placeholder="Describe Qualifaction..."
                        ></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Enter Email:</label>
                        <input className="form-control" 
                        value = {this.state.email}
                        onChange = {this.onChangeEmail}
                        placeholder="Enter Email..."
                         />
                    </div>
                    <div className='form-group'>
                        <label>Upload Certificates:</label>
                        <input 
                        type="file"
                        value = {this.state.file}
                        onChange = {this.onChangeUpload}
                        placeholder="Upload"
                         />
                    </div>
                    <button className='btn btn-warning' type='submit'>Submit</button>
                </form> 
            </>
        );
    }
}

export default CreateBlog;