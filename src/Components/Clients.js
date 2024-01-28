import React from 'react'
import '../css/clients.css'
import ClientCarousel from './ClientCaraosel'

export const Clients = () => {
  return (
    <div className='client-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='client-content'>
                        <h5>Don't Take Our Word, Here's What Our Clients Have To Say</h5>
                        <div className='our-client'>
                            <ClientCarousel />
                        </div>
                        <p><img src='./images/views-img.png' />115+ 5 Star Reviews</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='client-img'>
                        <img src='./images/banner-image.png' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
