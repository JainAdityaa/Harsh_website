import React from 'react'
import '../css/banner.css'

export const Banner = () => {
    return (
        <div className='container'>
            <div className='first-row'>
                <div className='banner-content'>
                    <div className='content'>
                        <h4>Social Media Team You've Been Looking For</h4>
                        <p>Work with a Sunshine Coast social media agency that generates real results. We make your marketing predictable.</p>
                        <a>submit</a>
                    </div>
                </div>
                <div className='banner-image'>
                    <img className='header-logo' src='./images/banner-image.png' />
                </div>
            </div>
        </div>
    )
}
