import React, { Component } from 'react';
import styled from 'styled-components'

class RegisterExc extends Component {

    render() {
        return (
            <>
                <Form>
                <div className='form-group'>
                    <label>
                        First Name:
                    </label>
                    <input className='form-control' placeholder='Enter First Name...' />
                </div>
                <div className='form-group'>
                    <label>
                        Second Name:
                    </label>
                    <input className='form-control' placeholder='Enter Second Name...' />
                </div>
                <div className='form-group'>
                    <label>
                        Email:
                    </label>
                    <input className='form-control' placeholder='Enter Email...' />
                </div>
                <div className='form-group'>
                    <label>
                        Phone Number:
                    </label>
                    <input className='form-control' placeholder='Enter Phone Number...' />
                </div>
                <div className='form-group'>
                    <label>
                        Password:
                    </label>
                    <input type='password' className='form-control' placeholder='Enter Password...' />
                </div>
                <div className='form-group'>
                    <label>
                        Confirm Password:
                    </label>
                    <input className='form-control' placeholder='Confirm Password...' />
                </div>
                <button type='submit' className='btn btn-success'>Create Account</button>
                </Form>
                
            </>
        );
    }
}

const Form = styled.div`
    label{
        color: white;
    }
`

export default RegisterExc;