import React, { useState, useEffect } from 'react';
import MoreArenas from '../MoreArenas';


export default function Yoga() {
  const images = [
    "https://img.freepik.com/free-photo/man-stretching-his-leg-grass_23-2147645681.jpg?t=st=1746700479~exp=1746704079~hmac=251cd177270e02787588ab4470199a5b2de77395c33b9df53b759e8c6447ffff&w=2000",
    "https://img.freepik.com/free-photo/young-couple-enjoying-yoga_23-2147645700.jpg?t=st=1746700459~exp=1746704059~hmac=39ba15df661e84bb661c624660db98bec6340a659340359f9045937fa6a637c7&w=2000",
    "https://img.freepik.com/free-photo/young-sporty-woman-practicing-yoga-pink-yoga-suit-sunrise-park_140725-14123.jpg?t=st=1746700526~exp=1746704126~hmac=00501b257436511efbf1808e4ee9a3f46c54f41f561273a2b99a15c8aa8971e6&w=2000"
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
          <h1>Ars Kreedashala Sports Academy</h1>
          <p>Daladali Chowk, Near Sarna Hotel</p>
          <p>Ring Road, Ranchi</p>
          <div className="opening-hours">
            <h4>Opening Hours</h4>
            <div className="timings">
              <span className="day">Tuesday, Thursday</span>
              <span className="time green-bg">6:00 – 7:00 am</span>
            </div>
            <div className="timings">
              <span className="day">Saturday, Sunday</span>
              <span className="time green-bg">7:00 – 8:00 am</span>
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
                  <img src={src} alt={`Yoga Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="available-section">
        <div className="section-title">
          <h2>Activity <span className="highlight">Offered</span></h2>
        </div>
        <div className="icons-row">
          <div className="icon-box">
            <img src="https://cdn-icons-png.freepik.com/256/2737/2737041.png?uid=R69734068&ga=GA1.1.657497519.1744262750" alt="Yoga" />
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
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Contactless-Attendance.png" alt="Contactless Attendance" />
            <p>Contactless Attendance</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Washroom-and-shower-1.png" alt="Washroom" />
            <p>Washroom & Shower</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Filter-Water.png" alt="Filtered Water" />
            <p>Filtered Water</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Sitting-Area.png" alt="Sitting Area" />
            <p>Sitting Area</p>
          </div>
        </div>
      </section>

      <section className="form-section">
        <h2>Book a <span className="highlight">Free Trial Class</span></h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="date" placeholder="Date of Birth" />
          </div>
          <div className="form-row">
            <input type="date" placeholder="Preferred Trial Date" />
            <select>
              <option>Select Activity</option>
              <option>Yoga</option>
              <option>Meditation</option>
              <option>Stretching</option>
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
