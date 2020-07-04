import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories(){
    return(
        <>
            <div className='bg-success col-lg-10 mx-auto pt-1 mt-1' style={{height:"15vh"}}>
                <div className='d-flex align-content-center justify-content-between'>
                    <Link className='btn btn-light mx-auto'>Vegetables</Link>
                    <Link className='btn btn-light mx-auto'>Fruits</Link>
                    <Link className='btn btn-light mx-auto'>Cattles</Link>
                    <Link className='btn btn-light mx-auto'>Cereals</Link>
                    <Link className='btn btn-light mx-auto'>Potatoes</Link>
                </div>
                <div className='d-flex align-content-center my-2 justify-content-between'>
                    <Link className='btn btn-light btn-group-lg mx-auto'>Fruits</Link>
                    <Link className='btn btn-light mx-auto'>Cattles</Link>
                    <Link className='btn btn-light mx-auto'>Cereals</Link>
                    <Link className='btn btn-light mx-auto'>Potatoes</Link>
                    <Link className='btn btn-light mx-auto'>Vegetables</Link>
                </div>
            </div>
        </>
    )
}