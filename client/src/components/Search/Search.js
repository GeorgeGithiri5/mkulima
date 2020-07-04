import React from 'react'
// import { Link } from 'react-router-dom'

export default function Search(){
    return(
        <>
            <div style={{height:'10vh',width:'100%'}} className='mx-auto col-lg-10 bg-dark'>
                    <form className='d-flex pt-3'>
                        <input className='form-control'  placeholder='Search' aria-label='Search' />
                        <button className='btn btn-outline-info mx-4' type='submit'>Search</button>
                    </form>
            </div>
        </>
    )
}