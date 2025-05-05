import React from 'react';
import './SportsFranchise.css';

const SportsFranchise = () => {
  return (
    <div className="sports-franchise">
      <header className="hero-section">
        <h1>
          Unlock Your Potential With <span className="highlight1">ARS Kreedashala</span>
        </h1>
        <p>
          ARS Kreedashala is empowering communities by building world-class sports ecosystems. As a franchisee, you will lead local sports development by offering structured programs and top-tier facilities. Join us in building the future of Indian sports from the grassroots up.
        </p>
      </header>

      <div className="banner-image1">
        <img src="https://pushsports.in/wp-content/uploads/2024/11/franchise-banner.jpg" alt="Cricket Ground" />
      </div>

      <section className="why-partner">
        <h2>
          Why <span className="highlight1">Partner with ARS?</span>
        </h2>
        <div className="grid">
          <div className="card">
            <div className="card-top-line" />
            <h3>Proven Model</h3>
            <p>Utilize our develop-train-grow model to achieve a 30%+ ROI while making a social impact.</p>
          </div>
          <div className="card">
            <div className="card-top-line" />
            <h3>Dedicated Territory</h3>
            <p>Claim exclusive rights to operate and grow in your assigned zone with full ARS backing.</p>
          </div>
          <div className="card">
            <div className="card-top-line" />
            <h3>Operational Support</h3>
            <p>Receive complete guidance—from infrastructure to staffing—so you can focus on scaling.</p>
          </div>
          <div className="card">
            <div className="card-top-line" />
            <h3>Digital Edge</h3>
            <p>Leverage technology for training, tracking, and reporting to enhance performance and retention.</p>
          </div>
          <div className="card">
            <div className="card-top-line" />
            <h3>Community Builder</h3>
            <p>Be the catalyst of health, wellness, and discipline in your community through structured sports.</p>
          </div>
          <div className="card">
            <div className="card-top-line" />
            <h3>Brand Boost</h3>
            <p>Grow faster with ARS Kreedashala’s strong brand presence and marketing push.</p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>
          Interested In Becoming A <span className="highlight">Franchise Partner?</span>
        </h2>
        <p>Please share details below and our team will connect with you.</p>

        <form className="franchise-form">
          <div className="form-row">
            <input type="text" placeholder="Name ( Academy/ Institute/ Individual )*" />
            <input type="email" placeholder="Email*" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Contact No.*" />
            <input type="text" placeholder="Space Available (in square feet)*" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Location with complete address*" />
            <select>
              <option>Select Occupation*</option>
              <option>Business Owner</option>
              <option>Educator</option>
              <option>Parent</option>
              <option>Sports Enthusiast</option>
            </select>
          </div>
          <div className="form-row">
            <select>
              <option>Select Budget*</option>
              <option>₹5-10 Lakhs</option>
              <option>₹10-20 Lakhs</option>
              <option>₹20-50 Lakhs</option>
              <option>₹50+ Lakhs</option>
            </select>
            <input type="text" placeholder="How early do you want to start?*" />
          </div>
          <textarea placeholder="Any Additional Information You Would Like to Share" rows={4}></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    </div>
  );
};

export default SportsFranchise;
