import React from 'react'
import Axios from 'axios'

export default class BlogComment extends React.Component{
    constructor(){
        super()
        this.state = {
            comment: "",
            post: []
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:4000/Comments')
                .then(data=>{
                    this.setState({
                        post: data.data
                    })
                })
    }
    onChangeComment=(e)=>{
        this.setState({
            comment: e.target.value
        })
    }
    onSubmit=(e)=>{
        // e.preventDefault()
        const post = {
            comment:this.state.comment,
        }
        console.log(post)
        Axios.post('http://localhost:4000/Comments',post)
    }
    render(){
        const comment = this.state.post.map(data=>{
            return(
                <div className='card m-2 p-2' key={data._id}>
                    <p>{data.comment}</p>
                </div>
            )
        })
        return(
            <>
                <div className="col-8 mx-auto" style={{color: "black"}}>
                    <div className='stars'>
                        <p>Rate Blog: </p>
                    </div>
                    <h4>Comments</h4>
                    <form onSubmit = {this.onSubmit}>
                        <div className='form-group d-flex p-3'>
                            <input className='form-control col-9 mr-1'
                            value = {this.state.comment}
                            onChange = {this.onChangeComment}
                            placeholder='Comment...'
                            />
                            <button className='col-3 ml-auto btn btn-dark' type='submit'>Comment</button>
                        </div>
                    </form>
                    <div className="card">
                        {comment}
                    </div>
                </div>
            </>
        )
    }
}