import React, { Component } from 'react';
import Axios from 'axios';

class AddBlog extends Component {
    constructor(){
        super()
        this.state = {
            topic: "",
            message: "",
            image: ''
        }
    }
    onChangeTopic=(e)=>{
        this.setState({
            topic: e.target.value
        })
    }
    onChangeMessage=(e)=>{
        this.setState({
            message: e.target.value
        })
    }
    onChangeImage=(e)=>{
        this.setState({
            image: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        const post = {
            topic: this.state.topic,
            message: this.state.message,
            image: this.state.image
        }
        Axios.post('http://localhost:4000/blogAdd',post)
            window.location='/blogs'
    }
    render() {
        return (
            <div className="col-9 mx-auto">
                <form onSubmit ={this.onSubmit} >
                    <div className='form-group'>
                        <label>Enter Topic:</label>
                        <input className='form-control'
                        value = {this.state.topic}
                        onChange = {this.onChangeTopic} 
                        placeholder='Enter The Topic'/>
                    </div>
                    <div className='form-group'>
                        <label>Enter Message:</label>
                        <textarea className='form-control'
                        value = {this.state.message}
                        onChange = {this.onChangeMessage} 
                        placeholder='Enter Your Blog'></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Enter Image:</label>
                        <input
                        type="file"
                        value = {this.state.image}
                        onChange = {this.onChangeImage} 
                        placeholder='Upload The Image'/>
                    </div>
                    <button className='btn btn-info' type='submit'>Add The Blog</button>
                </form>
            </div>
        );
    }
}

export default AddBlog;