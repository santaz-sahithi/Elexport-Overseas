import React from 'react';
import './footer.css';
import fb from './facebook.png';
import whatsapp from './WhatsApp.png';
import LinkedIn from './linkedin.png';
import inst from './instagram.png';

function Footer() {
  return (
    <div className='footer'>
        <div className="sb-footer-section-padding">
            <div className="sb-footer-links">
                <div className="sb-footer-links-div">
                    <h4>Courses</h4>
                    <a className='f_anchor' href="/employer">
                        <p>MBA Abroad</p>
                    </a>
                    <a className='f_anchor' href="/healthplan">
                        <p>MEM Abroad</p>
                    </a>
                    <a className='f_anchor' href="/individual">
                        <p>MIM Abroad</p>
                    </a>
                    <a className='f_anchor' href="/individual">
                        <p>MS in Finance</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Popular Countries</h4>
                    <a className='f_anchor' href="/USAUni">
                        <p>United States</p>
                    </a>
                    <a className='f_anchor' href="/UKUni">
                        <p>United Kingdom</p>
                    </a>
                    <a className='f_anchor' href="/CanadaUni">
                        <p>Canada</p>
                    </a>
                    <a className='f_anchor' href="/AustraliaUni">
                        <p>Australia</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Company</h4>
                    <a className='f_anchor' href="/employer">
                        <p>About Us</p>
                    </a>
                    <a className='f_anchor' href="/employer">
                        <p>Privacy Policy</p>
                    </a>
                    <a className='f_anchor' href="/employer">
                        <p>Help Center</p>
                    </a>
                    <a className='f_anchor' href="/employer">
                        <p>Career</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Contact Info</h4>
                     <p className='address'>
                         2nd Floor, Above Kairali Ford,Kazhakkuttam</p>
                    
                     <p>&bull;  info@elexportoverseas.com</p>
                   
                </div>
                <div className="sb-footer-links-div">
                    <h4>Connect here ...</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt=''/></p>
                        <p><img src={whatsapp} alt=''/></p>
                        <p><img src={LinkedIn} alt=''/></p>
                        <p><img src={inst} alt=''/></p>
                    </div>
                    <p>AHN Projects</p>
                </div>
            </div>
            <hr></hr>

                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>@{new Date().getFullYear()} Elex Port All right reserved</p>
                    </div>
                    <div className="sb-footer-below-links">
                        <a className='f_anchor' href="/term">
                            <div>
                                <p>Term & Conditions</p>
                            </div>
                        </a>
                        <a className='f_anchor' href="/privacy">
                            <div>
                                <p>Privacy</p>
                            </div>
                        </a>
                        <a className='f_anchor' href="/security">
                            <div>
                                <p>Security</p>
                            </div>
                        </a>
                        <a className='f_anchor' href="/cookie">
                            <div>
                                <p>Cookie Declaration</p>
                            </div>
                        </a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer