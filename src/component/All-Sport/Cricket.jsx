import React, { useState, useEffect } from 'react';
import './cricket.css'; // External CSS file
import MoreArenas from './MoreArenas';

export default function Cricket() {
  const images = [
    "https://img.freepik.com/free-photo/cricket-player-holding-leather-ball_53876-63344.jpg?t=st=1746686894~exp=1746690494~hmac=5d8d7bddf353dfe12cc7b9fabf8127fb13e78eb190429ca57756d344d83b0c43&w=2000",
    "https://img.freepik.com/free-photo/cricketer-field-action_53876-63345.jpg?t=st=1746686985~exp=1746690585~hmac=6f138bde37757f4130af45d5c2f7132171a39ee1d1a61068f0f2d54badf47d15&w=2000",
    "https://img.freepik.com/free-photo/view-cricket-game-field_23-2150995570.jpg"
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="academy-page">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Ars Kreedashala Sports Academy</h1>
          <p>Daladali Chowk, Near Sarna Hotel</p>
          <p>Ring Road, Ranchi </p>
          <div className="opening-hours">
            <h4>Opening Hours</h4>
            <div className="timings">
              <span className="day">Monday, Wednesday, Friday</span>
              <span className="time green-bg">4:30 – 7:30 pm</span>
            </div>
            <div className="timings">
              <span className="day">Saturday, Sunday</span>
              <span className="time green-bg">8:00 am – 11:00 am</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="slider-container">
            <div
              className="slider"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div className="slide" key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="available-section">
        <div className="section-title">
          <h2>Sports <span className="highlight">Available</span></h2>
        </div>
        <div className="icons-row">
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/01/cricket.png" alt="Cricket" />
          </div>
        </div>

        <div className="section-title">
          <h2>Amenities <span className="highlight">Available</span></h2>
        </div>
        <div className="icons-row amenities horizontal">
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Parking.png" alt="Parking" />
            <p>Parking</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Contactless-Attendance.png" alt="Contactless" />
            <p>Contactless Attendance</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Washroom-and-shower-1.png" alt="Washroom" />
            <p>Washroom & Shower</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Filter-Water.png" alt="Water" />
            <p>Filtered Water</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Sitting-Area.png" alt="Water" />
            <p>Sitting Area</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Camera-Security.png" alt="Water" />
            <p>Camera Security</p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <h2>Book a <span className="highlight">Free Trial Class</span></h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Athlete Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="date" placeholder="Date of Birth" />
          </div>
          <div className="form-row">
            <input type="date" placeholder="Date of Trial" />
            <select>
              <option>Select Sport</option>
              <option>Cricket</option>
              <option>Running</option>
              <option>Swimming</option>
            </select>
          </div>
          <button type="submit" className="book-now">BOOK NOW</button>
        </form>
      </section>
      <section>
        <MoreArenas/>
      </section>
    </div>
  );
}
