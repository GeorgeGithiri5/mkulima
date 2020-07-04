import React from 'react'

export default function Banner({children,heading,message}){
    return(
        <>
            <div className='banner'>
                <div className='heading'>
                    <h4 className='text-center text-muted'>{heading}</h4>
                </div>
                <div>
                    <p className='lead text-center' style={{lineHeight:1.4,fontSize:20}}>{message}</p>
                </div>
                <div className='d-flex col-12 mx-auto mt-1'>
                {children}
                </div>
            </div>
        </>
    )
}