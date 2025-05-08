import React, { useState, useEffect } from 'react';
import MoreArenas from '../MoreArenas';


export default function Basketball() {
  const images = [
    "https://img.freepik.com/free-photo/basketball-hoop-with-blue-sky_23-2147644421.jpg?t=st=1746697956~exp=1746701556~hmac=cbad6b37d1f1df43ab9718a58bfdd4d348f43b18acdb404ce9afd10eac5ad12c&w=2000", 
    "https://img.freepik.com/free-photo/young-man-doing-sports-playing-basketball-sunrise_285396-9719.jpg?t=st=1746698000~exp=1746701600~hmac=5d1cad5aa4145ae049771d1246bd6d5c9d826f2c8fa268956f97fca0ea73ae91&w=2000",
    "https://img.freepik.com/free-photo/black-man-doing-sports-playing-basketball-sunrise-jumping-silhouette_285396-1440.jpg?t=st=1746698024~exp=1746701624~hmac=464d6a5101157d5f66634099daf9a9a0235226f1fae22adf45d888f95f8e213f&w=2000"
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
            <img src="https://pushsports.in/wp-content/uploads/2024/01/basketball.png" alt="Basketball" />
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
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Locker.png" alt="Camera Security" />
            <p>Storage</p>
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
              <option>Basketball</option>
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
