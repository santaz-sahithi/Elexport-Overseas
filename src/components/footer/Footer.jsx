import React from 'react';
import './footer.css';
import fb from './facebook.png';
import whatsapp from './WhatsApp.png';
import LinkedIn from './linkedin.png';
import inst from './instagram.png';
import p_logo from '../../assests/Logo 3.png';
import { useNavigate } from 'react-router-dom';

function scrollToElement(id, padding = 0) {
    const element = document.getElementById(id);
    if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - padding;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
}

function Footer() {
    const navigate = useNavigate();
    const handleAboutUsClick = (event) => {
        event.preventDefault();
        navigate('/');
        // Scroll after navigation to homepage
        setTimeout(() => {
            scrollToElement('AboutUsSection', 50);
        }, 100); // Small delay to ensure navigation is completed
    };
  return (
    <div className='footer'>
        <div className="sb-footer-section-padding">
            <div className="sb-footer-links">
                <div className="sb-footer-links-div">
                    <h4>Courses</h4>
                    <a className='f_anchor'>
                        <p>MBA Abroad</p>
                    </a>
                    <a className='f_anchor'>
                        <p>MEM Abroad</p>
                    </a>
                    <a className='f_anchor'>
                        <p>MIM Abroad</p>
                    </a>
                    <a className='f_anchor'>
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
                    <a className='f_anchor' onClick={handleAboutUsClick}>
                        <p>About Us</p>
                    </a>
                    <a className='f_anchor'>
                        <p>Privacy Policy</p>
                    </a>
                    <a className='f_anchor'>
                        <p>Help Center</p>
                    </a>
                    <a className='f_anchor'>
                        <p>Career</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>Contact Info</h4>
                     <p className='address'>
                     2nd floor kallingal building ,Near Ambattukavu metro station,ALUVA 683106</p>
                    
                     <a className='email-link' href='mailto:info@elexportoverseas.com'>&bull;  info@elexportoverseas.com</a>
                   
                </div>
                <div className="sb-footer-links-div">
                    <h4>Connect here ...</h4>
                    <div className="socialmedia">
                        <a href = "https://www.facebook.com/share/iK5iG9kPaQAR2RDe/?mibextid=LQQJ4d"><img src={fb} alt=''/></a>
                        <a href="https://wa.link/10di5m"><img src={whatsapp} alt=''/></a>
                        <a><img src={LinkedIn} alt=''/></a>
                        <a href ="https://www.instagram.com/elexport_overseas/profilecard/?igsh=M24xYTFsMnpkeXdp"><img src={inst} alt=''/></a>
                    </div>
                    <div className='Parent_company'>
                    <a className='pc_name'>A Venture of AHN Projects</a>
                    <a><img src={p_logo} alt=''/></a>
                    </div>
                </div>
            </div>
            <hr></hr>

                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>@{new Date().getFullYear()} ElexPort All right reserved</p>
                    </div>
                    <div className="sb-footer-below-links">
                        <a className='f_anchor' >
                            <div>
                                <p>Terms & Conditions</p>
                            </div>
                        </a>
                        <a className='f_anchor'>
                            <div>
                                <p>Privacy</p>
                            </div>
                        </a>
                        <a className='f_anchor'>
                            <div>
                                <p>Security</p>
                            </div>
                        </a>
                        <a className='f_anchor'>
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