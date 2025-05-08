import React, { useState, useEffect } from 'react';
import MoreArenas from '../MoreArenas';


export default function Badminton() {
  const images = [
    "https://img.freepik.com/free-photo/badminton-concept-with-shuttlecock-racket_23-2149940872.jpg?t=st=1746698481~exp=1746702081~hmac=cebe4f28023f7ba326cacf28a48d72e55c68cdcf48969ee74205b62b3428bdbe&w=2000", 
    "https://img.freepik.com/free-photo/full-shot-people-badminton-field_23-2149732989.jpg?t=st=1746698715~exp=1746702315~hmac=72880a71d3520cabc79727d2bf0c7d7cfd9b57c8f3d1b88175829bb065599784&w=2000",
    "https://img.freepik.com/free-photo/full-shot-father-girl-playing-badminton_23-2149907950.jpg?t=st=1746698749~exp=1746702349~hmac=2a54b903fed6be3f532f9ea973b608da4617df968fe3f01f67a07b3b0d6aea39&w=2000"
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
            <img src="https://pushsports.in/wp-content/uploads/2024/01/badminton.png" alt="Badminton" />
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
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Sitting-Area.png" alt="Sitting Area" />
            <p>Sitting Area</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Camera-Security.png" alt="Camera Security" />
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
              <option>Badminton</option>
              <option>Cricket</option>
              <option>Running</option>
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
