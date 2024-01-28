import React from 'react'
import '../css/footer.css'

export const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='footer-logo'>
                        <img src='./images/footer-logo.png'/>
                    </div>
                    <div className='social-icon'>
                        <img src='./images/facebook.png' />
                        <img src='/images/instagram-logo.png' />
                        <img src='./images/linkedin-logo.png' />
                        <img src='./images/pinterest-logo.png' />
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='footer-content'>
                        <h6>SEO</h6>
                        <p>SEO Sunshine Coast</p>
                        <p>SEO Brisbane</p>
                        <p>SEO Gold Coast</p>
                    </div>
                    <div className='footer-content'>
                        <h6>WEB DESIGN</h6>
                        <p>Web Design Sunshine Coast</p>
                        <p>Web Design Brisbane</p>
                        <p>Web Design Gold Coast</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='footer-content'>
                        <h6>GOOGLE ADS</h6>
                        <p>Adwords Sunshine Coast</p>
                        <p>Adwords Brisbane</p>
                        <p>Adwords Gold Coast</p>
                    </div>
                    <div className='footer-content'>
                        <h6>SOCIAL MARKETING</h6>
                        <p>Social Marketing Sunshine Coast</p>
                        <p>Social Marketing Brisbane</p>
                        <p>Social Marketing Gold Coast</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='footer-content'>
                        <h6>CONTACT</h6>
                        <p>1300 633 100</p>
                        <p>Hello@dnhq.com.au</p>
                        <p>Mon - Fri : 8:30 - 5:00</p>
                    </div>
                    <div className='footer-content'>
                        <h6>AGENCY OFFICE</h6>
                        <p>3/2 Akeringa Place, Mooloolaba, QLD</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
