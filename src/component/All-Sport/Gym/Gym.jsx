import React, { useState, useEffect } from 'react';
import MoreArenas from '../MoreArenas';


export default function Gym() {
  const images = [
    "https://img.freepik.com/free-photo/man-training-gym_23-2148024291.jpg?t=st=1746700909~exp=1746704509~hmac=54eeaaf344785dff7d0b31a1dc418069de12817a5185587c0be63666a8718e0e&w=2000",
    "https://img.freepik.com/free-photo/woman-training-gym_23-2148024275.jpg?t=st=1746700883~exp=1746704483~hmac=c79beaa9656f4c2420e2308021e886fb8dea5cfe1350ca08ba78ba26e14a7a11&w=2000",
    "https://img.freepik.com/free-photo/young-man-sportswear-exercise-class-gym_1150-12358.jpg?t=st=1746700952~exp=1746704552~hmac=e7adb88c7c4db6b8a722780e87086473f09ca34845ccd83b91e491c55c43b082&w=2000"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="academy-page">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Ars Kreedashala Gym Facility</h1>
          <p>Daladali Chowk, Near Sarna Hotel</p>
          <p>Ring Road, Ranchi</p>
          <div className="opening-hours">
            <h4>Opening Hours</h4>
            <div className="timings">
              <span className="day">Monday to Friday</span>
              <span className="time green-bg">6:00 am – 9:00 am & 5:00 pm – 9:00 pm</span>
            </div>
            <div className="timings">
              <span className="day">Saturday</span>
              <span className="time green-bg">7:00 am – 10:00 am</span>
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
                  <img src={src} alt={`Gym Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="available-section">
        <div className="section-title">
          <h2>Facilities <span className="highlight">Available</span></h2>
        </div>
        <div className="icons-row">
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/01/gym.png" alt="Gym Icon" />
            <p>Modern Equipment</p>
          </div>
          <div className="icon-box">
            <img src="https://cdn-icons-png.freepik.com/256/10237/10237656.png?uid=R69734068&ga=GA1.1.657497519.1744262750&semt=ais_hybrid" alt="Trainer" />
            <p>Certified Trainers</p>
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
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Contactless-Attendance.png" alt="Attendance" />
            <p>Contactless Entry</p>
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
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Camera-Security.png" alt="Security" />
            <p>Camera Security</p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <h2>Book a <span className="highlight">Free Trial</span></h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="date" placeholder="Date of Birth" />
          </div>
          <div className="form-row">
            <input type="date" placeholder="Trial Date" />
            <select>
              <option>Select Goal</option>
              <option>Weight Loss</option>
              <option>Strength Training</option>
              <option>Fitness</option>
            </select>
          </div>
          <button type="submit" className="book-now">BOOK NOW</button>
        </form>
      </section>

      <section>
        <MoreArenas />
      </section>
    </div>
  );
}
