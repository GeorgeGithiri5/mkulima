import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <>
                <form style={{color: "#fff"}}>
                    <div className="form-group">
                        <label>
                            Enter Email:
                        </label>
                        <input className='form-control' placeholder='Enter Email...'/>
                    </div>
                    <div className="form-group">
                        <label>
                            Enter Password:
                        </label>
                        <input type='password' className='form-control' placeholder='Enter Password...'/>
                    </div>
                    <button type='submit' className='btn btn-warning'>
                        Login
                    </button>
                </form>
            </>
        );
    }
}

export default Login;