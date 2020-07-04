import React from 'react'

export default function BannerContainer({children,bannerclass}){
    return(
        <div className={bannerclass}>
           {children}
        </div>
    )
}