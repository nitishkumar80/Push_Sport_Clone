import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-info">
          <h1>
            Feel <span className="highlight-green">free</span> to <span className="highlight-green">contact</span> us
          </h1>

          <h2 className="headquarter-title">Headquarter</h2>
          <p>Ring Road, Near Daladali</p>
          <p>Ranchi, Jharkhand-834005</p>
          <p className="phone">+91-9205290015</p>
        </div>

        {/* Right Column - Form */}
        <div className="contact-form">
          <h3>SEND US A MESSAGE</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone No." required />
            <textarea placeholder="Message" rows="4" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default ContactUs;
