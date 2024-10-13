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
                    <a href="/employer">
                        <p>MBA Abroad</p>
                    </a>
                    <a href="/healthplan">
                        <p>MEM Abroad</p>
                    </a>
                    <a href="/individual">
                        <p>MIM Abroad</p>
                    </a>
                    <a href="/individual">
                        <p>MS in Finance</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Popular Countries</h4>
                    <a href="/employer">
                        <p>United States</p>
                    </a>
                    <a href="/healthplan">
                        <p>United Kingdom</p>
                    </a>
                    <a href="/individual">
                        <p>Canada</p>
                    </a>
                    <a href="/individual">
                        <p>Australia</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Company</h4>
                    <a href="/employer">
                        <p>About Us</p>
                    </a>
                    <a href="/employer">
                        <p>Privacy Policy</p>
                    </a>
                    <a href="/employer">
                        <p>Help Center</p>
                    </a>
                    <a href="/employer">
                        <p>Career</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Contact Info</h4>
                     <p className='address'>
                         2nd Floor, Above Kairali Ford,Kazhakkuttam</p>
                    
                     <p>&bull; info@euroviewinternational.com</p>
                   
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
                        <a href="/term">
                            <div>
                                <p>Term & Conditions</p>
                            </div>
                        </a>
                        <a href="/privacy">
                            <div>
                                <p>Privacy</p>
                            </div>
                        </a>
                        <a href="/security">
                            <div>
                                <p>Security</p>
                            </div>
                        </a>
                        <a href="/cookie">
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