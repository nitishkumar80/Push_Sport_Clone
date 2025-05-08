import React, { useState, useEffect } from 'react';
import MoreArenas from '../MoreArenas';



export default function Swimming() {
  const images = [
    "https://img.freepik.com/free-photo/boy-goggles-swimming-splashing-pool_259150-60553.jpg?t=st=1746697146~exp=1746700746~hmac=5e4a310bc303a632853165554ec7ff626d231b20d57baeceeed74489facbdbf3&w=2000", 
    "https://img.freepik.com/free-photo/young-girl-posing-inside-swimming-pool_23-2148700013.jpg?t=st=1746697197~exp=1746700797~hmac=d44c7bb821c775fc21370b9ecad8e5fa2857720d7b59cf45b0790614c2cb7962&w=2000",
    "https://img.freepik.com/free-photo/front-view-swimmer-diving_23-2148393607.jpg?t=st=1746697258~exp=1746700858~hmac=fd2d03b1326b3a43cca0330eba748421bf74ccd47db789abe080fa7d4f3d394b&w=2000"
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
            <img src="https://pushsports.in/wp-content/uploads/2024/02/Swimming.png" alt="Swimming" />
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
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Changing-Room.png" alt="Contactless" />
            <p>Change Room</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Shower.png" alt="Washroom" />
            <p>Washroom & Shower</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Camera-Security.png" alt="Water" />
            <p>Camera Security</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/06/Sitting-Area.png" alt="Sitting Area" />
            <p>Sitting Area</p>
          </div>
          <div className="icon-box">
            <img src="https://pushsports.in/wp-content/uploads/2024/04/Contactless-Attendance.png" alt="Camera Security" />
            <p> Security</p>
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
              <option>Swimming</option>
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
