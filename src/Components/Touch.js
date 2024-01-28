import React from 'react'
import '../css/touch.css'

export const Touch = () => {
    return (
        <div className='touch-section'>
            <div className='container'>
                <div className='row'>
                    <h5 className='touch-title'>Time to stop scrolling</h5>
                    <div className='row justify-content-center pb-2'>
                        <a href='#' className='text-center'><img className='touch-img' src='./images/getintouch-logo.png' /></a>
                    </div>
                    <p className='touch-text'><a href='#'>Get In Touch</a></p>
                </div>
            </div>
        </div>
    )
}
