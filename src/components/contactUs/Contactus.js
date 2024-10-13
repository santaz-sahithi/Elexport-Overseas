import React from "react";
import "./contact.css";

const Contactus = () => {
  return (
    <>
      <div className="contact_div">
        <div className="contact_form">
          <h1>Reach out to us...</h1>
          <div className="form">
            <input type="text" className="input_name" placeholder="First Name" />
            <input type="text" className="input_name" placeholder="Second Name" />
            <div>
              <input
                className="input_email"
                type="email"
                placeholder="Email id"
                style={{ display: "inline-block" }}
              />
              <input
                type="text"
                className="input_phone"
                style={{ display: "inline-block" }}
                placeholder="Phone Number"
              />

              <textarea rows="4" cols="50" className="input_comment" placeholder="Comments..."></textarea>

              <div className="input_button">
                <button className="Contact-submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="responsive-map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3928.250684410966!2d76.3352317750323!3d10.078534090030937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA0JzQyLjciTiA3NsKwMjAnMTYuMSJF!5e0!3m2!1sen!2sin!4v1728151177422!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default Contactus;
