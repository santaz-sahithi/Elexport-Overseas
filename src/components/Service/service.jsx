import React from 'react';
import './service.css';
import serviceBG from '../../assests/service_bg.jpg';
import service_img1 from '../../assests/serv_img1.jpeg';
import SAC from '../../assests/S_StudyAbroadCounselling.jpg';
import SCA from '../../assests/S_CourseAdvice.jpg';
import SUA from '../../assests/S_UniversityApplication.jpg';
import SVA from '../../assests/S_VisaApplication.jpg';
import STPA from '../../assests/S_TestPrep.jpg';
import SSAS from '../../assests/S_ScholarshipAssistance.jpg';
import VLA from '../../assests/V_EduLoan.jpg';
import VFB from '../../assests/V_FlightBookingAss.jpg';
import VA from '../../assests/V_Accomodation.jpg';
import VPA from '../../assests/V_PreDeparture.jpg';
import VT from '../../assests/V_AirportTaxi.jpg';

function Services(props) {
    const img_dec_prop = props.img_dec_prop;
    // const service_img1 = props.service_img1;
    const here_we_go_again = props.here_we_go_again;


    return (
        <div className='services'>
            <div className="service-main">
                <img src= {serviceBG} alt= {img_dec_prop} />
                <h1 className="services_title">SERVICES</h1>
            </div>
            <h2>STUDENT SERVICES</h2>
            <div className='all_services'>
                <div className='service_image'>
                    <div><img src={SAC} alt={here_we_go_again} /></div>
                    <div className='service_name'>Abroad Counselling</div>
                </div>
                <div className='service_image'>
                    <div><img src={SCA} alt={here_we_go_again} /></div>
                    <div className='service_name'>Course Advice</div>
                </div>
                <div className='service_image'>
                    <div><img src={SUA} alt={here_we_go_again} /></div>
                    <div className='service_name'>University Application</div>
                </div>
                <div className='service_image'>
                    <div><img src={SVA} alt={here_we_go_again} /></div>
                    <div className='service_name'>Visa Application Assistance</div>
                </div>
                <div className='service_image'>
                    <div><img src={STPA} alt={here_we_go_again} /></div>
                    <div className='service_name'>Test Preperation Training</div>
                </div>
                <div className='service_image'>
                    <div><img src={SSAS} alt={here_we_go_again} /></div>
                    <div className='service_name'>Scholarship Assistance</div>
                </div>
            </div>
            
            <h2>VALUE ADDED SERVICES</h2>
            <div className='all_services'>
                <div className='service_image'>
                    <div><img src={VLA} alt={here_we_go_again} /></div>
                    <div className='service_name'>OverSeas Edu. Loan Assistantance</div>
                </div>
                <div className='service_image'>
                    <div><img src={VFB} alt={here_we_go_again} /></div>
                    <div className='service_name'>Flight Ticket Booking</div>
                </div>
                <div className='service_image'>
                    <div><img src={VA} alt={here_we_go_again} /></div>
                    <div className='service_name'>Accomodation Assistance</div>
                </div>
                <div className='service_image'>
                    <div><img src={VPA} alt={here_we_go_again} /></div>
                    <div className='service_name'>Pre Departure Support</div>
                </div>
                <div className='service_image'>
                    <div><img src={VT} alt={here_we_go_again} /></div>
                    <div className='service_name'>Airport Pick & Drop Services</div>
                </div>
                <div className='service_image'>
                    <div><img src={service_img1} alt={here_we_go_again} /></div>
                    <div className='service_name'>Test Centers</div>
                </div>
            </div>
        </div>
    )
}

export default Services;