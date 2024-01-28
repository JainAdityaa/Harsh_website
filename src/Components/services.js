import React from 'react'
import '../css/services.css'

export const Services = () => {
    return (
        <div className='service-section'>
            <h4>Our Services</h4>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-5'>
                        <div className='main-service-box'>
                            <h5>Design_______________________01</h5>
                            <p>Nous prenons en compte l'interaction de l'utilisateur avec l'interface. Nous accordons une attention particulière aux tests d'hypothèses et au prototypage, seules les solutions les plus réussies sont retenues pour la visualisation.</p>
                            <div className='service-btn'>
                                <a href='#'>Figma</a>
                                <a href='#'>Printing Collaterals</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='main-service-box'>
                            <h5>Developer___________________02</h5>
                            <p>Nous prenons en compte l'interaction de l'utilisateur avec l'interface. Nous accordons une attention particulière aux tests d'hypothèses et au prototypage, seules les solutions les plus réussies sont retenues pour la visualisation.</p>
                            <div className='service-btn'>
                                <a href='#'>Figma</a>
                                <a href='#'>Printing Collaterals</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center pt-4'>
                    <div className='col-md-5'>
                        <div className='main-service-box'>
                            <h5>Marketing___________________03</h5>
                            <p>Nous prenons en compte l'interaction de l'utilisateur avec l'interface. Nous accordons une attention particulière aux tests d'hypothèses et au prototypage, seules les solutions les plus réussies sont retenues pour la visualisation.</p>
                            <div className='service-btn'>
                                <a href='#'>Figma</a>
                                <a href='#'>Printing Collaterals</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='main-service-box'>
                            <h5>Ads__________________________02</h5>
                            <p>Nous prenons en compte l'interaction de l'utilisateur avec l'interface. Nous accordons une attention particulière aux tests d'hypothèses et au prototypage, seules les solutions les plus réussies sont retenues pour la visualisation.</p>
                            <div className='service-btn'>
                                <a href='#'>Figma</a>
                                <a href='#'>Printing Collaterals</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center pt-5 pb-1'>and we are frequently cited by some very credible clients…</p>
                <div className='logo-brand'>
                    <div className='brands'>
                        <img src='./images/b1.png' />
                        <img src='./images/b2.png' />
                        <img src='./images/b3.png' />
                        <img src='./images/b4.png' />
                        <img src='./images/b5.png' />
                        <img src='./images/b6.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}
