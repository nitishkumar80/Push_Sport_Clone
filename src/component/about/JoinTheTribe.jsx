import React from 'react';
import './JoinTribeForm.css';

const JoinTribeLayout = () => {
  return (
    <div className="join-tribe-page">
      {/* Banner with text overlay */}
      <div className="banner-container">
        <img
          src="https://pushsports.in/wp-content/uploads/2024/12/career-banner.jpg"
          alt="Join the Tribe"
          className="banner-image"
        />
        <div className="banner-overlay">
          {/* Optional Heading */}
        </div>
      </div>

      {/* Content section */}
      <div className="main-content">
        <div className="text-container">
          <h2>Inspire. Innovate. Impact.</h2>
          <p>
            At Ars Kreedashala, we’re not just building a sports academy—we’re driving the future of skill development in sports through technology and passion. 
            Join a young, ambitious team focused on revolutionizing how athletes train, learn, and grow.
          </p>
          <p>
            Whether you're a coach, a technologist, or someone passionate about sports and education, 
            Ars Kreedashala offers an environment that blends athletic excellence with cutting-edge innovation. 
            Work with us to empower the next generation of champions through data, discipline, and drive.
          </p>
          <p className="closing-text">
            Ready to join the movement? Send your details to 
            <a href="mailto:careers@arskreedashala.com"> careers@arskreedashala.com</a>.
          </p>
        </div>

        <div className="form-container">
          <form className="join-form">
            <div className="row">
              <div className="input-group">
                <label>Full Name*</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="input-group">
                <label>Mobile No*</label>
                <input type="tel" placeholder="Mobile Number" />
              </div>
            </div>

            <div className="row">
              <div className="input-group">
                <label>Email*</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <label>Job Title*</label>
                <input type="text" placeholder="Job Title" />
              </div>
            </div>

            <div className="file-upload">
              <label>Upload CV & Cover Letter</label>
              <br /><br />
              <input type="file" />
            </div>

            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinTribeLayout;
