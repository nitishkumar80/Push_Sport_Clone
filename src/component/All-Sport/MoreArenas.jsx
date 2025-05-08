import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './MoreArenas.css';

const arenas = [
  {
    title: "Ars Kreedashala",
    location: "Daladali Chowk, Ring Road, Ranchi",
    sports: "Swimming",
    link: "swimming",
    image: "https://img.freepik.com/free-photo/active-swimmer-jumping-pool-competition-start-indoor-pool-european_1157-49319.jpg",
  },
  {
    title: "Ars Kreedashala",
    location: "Daladali Chowk, Ring Road, Ranchi",
    sports: "Football",
    link: "Football",
    image: "https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg",
  },
  {
    title: "Ars Kreedashala",
    location: "Daladali Chowk, Ring Road, Ranchi",
    sports: "Basketball",
    link: "Basketball",
    image: "https://img.freepik.com/free-photo/young-black-man-doing-sports-playing-basketball-sunrise-listening-music-headphones-active-lifestyle-summer-morning_285396-1458.jpg",
  },
  {
    title: "Ars Kreedashala",
    location: "Daladali Chowk, Ring Road, Ranchi",
    sports: "Badminton",
    link: "Badminton",
    image: "https://img.freepik.com/free-photo/badminton-concept-with-racket-shuttlecock_23-2149940923.jpg",
  },
  {
    title: "Ars Kreedashala",
    location: "Daladali Chowk, Ring Road, Ranchi",
    sports: "Yoga",
    link: "Yoga",
    image: "https://img.freepik.com/free-photo/sporty-young-woman-doing-yoga-practice-isolated-concept-healthy-life-natural-balance-body-mental-development_231208-10353.jpg",
  },
  {
    title: "Ars Kreedashala",
    location: "Daladali Chowk, Ring Road, Ranchi",
    sports: "Gym",
    link: "Gym",
    image: "https://img.freepik.com/free-photo/man-training-gym_23-2148024362.jpg",
  },
  {
    title: "Ars Kreedashala",
    location: "Daladali Chowk, Ring Road, Ranchi",
    sports: "Volleyball",
    link: "Volleyball",
    image: "https://img.freepik.com/free-photo/ball-hitting-net_23-2149450951.jpg",
  },
];

export default function MoreArenas() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="more-arenas-container">
      <h2 className="heading">
        More <span className="highlight">Arenas</span> by Ars Kreedashala
      </h2>

      <div className="slider-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>&#10094;</button>
        <div className="cards-container" ref={scrollRef}>
          {arenas.map((arena, index) => (
            <Link to={`/${arena.link}`} key={index} className="arena-card-link">
              <div className="arena-card">
                <img src={arena.image} alt={arena.title} className="arena-image" />
                <div className="arena-content">
                  <h3>{arena.title}</h3>
                  <p className="location">{arena.location}</p>
                  <p className="sports">{arena.sports}</p>
                  <button className="trial-button">Free Trial Class</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button className="arrow right" onClick={() => scroll('right')}>&#10095;</button>
      </div>

      <div className="map-container">
        <iframe
          title="Ars Kreedashala Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902204361195!2d85.2286662122291!3d23.3733791152052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1b1e1b1e1b1%3A0x1b1e1b1e1b1e1b1e!2sDaladali%20Chowk%2C%20Ring%20Road%2C%20Ranchi%2C%20Jharkhand%20835303!5e0!3m2!1sen!2sin!4v1689408467087!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
