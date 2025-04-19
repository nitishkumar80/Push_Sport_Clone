import React, { useState } from "react";
import './contact.css';  // Make sure to create and link the CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "e290a6b9-d4ae-48ab-af95-3f1314fcaf9e",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setResponseMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setResponseMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="header-title">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Start */}
      <div className="contact-container">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title">Contact Us</h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h5>Get In Touch</h5>
              <p className="mb-4">
                We’re here to make your journey unforgettable! Whether you have questions, need assistance with Ars, or want to share your feedback, the Ars Kreedashala team is ready to help.
              </p>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="contact-info">
                  <h5>Office</h5>
                  <p>Daladali Chowk</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="contact-info">
                  <h5>Mobile</h5>
                  <p>+91 92052 90015</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="contact-info">
                  <h5>Email</h5>
                  <p>contact@arskreedashala.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <iframe
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d140295.8781777621!2d55.469978168521905!3d25.303717021992436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f56418f745f4b%3A0xb3e30623a4f75bb3!2sBlock%20C%20VL06-197%2C%20Sharjah%20Research%2C%20Technology%20and%20Innovation%20Park%2C%20Sharjah%2C%20UAE!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>

            <div className="col-lg-4 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                        style={{ height: 100 }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              {responseMessage && <p className="mt-3 text-center">{responseMessage}</p>}
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}

export default Contact;
