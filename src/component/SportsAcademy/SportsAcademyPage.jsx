// SportsAcademyPage.js
import React from 'react';
import './SportsAcademyPage.css';
import { Link } from 'react-router-dom';

const sportsCenters = [
  {
    name: 'Ars Kreedashala,  Daladali Campus',
    location: 'Daladali, Ranchi',
    sports: 'Cricket',
    link: '/Cricket',
    image: 'https://img.freepik.com/free-photo/view-cricket-game-field_23-2150995570.jpg'
  },
  {
    name: 'Ars Kreedashala,Daladali Campus',
    location: 'Ring Road, Ranchi',
    sports: 'Swimming',
    link: '/swimming',
    image: 'https://img.freepik.com/free-photo/active-swimmer-jumping-pool-competition-start-indoor-pool-european_1157-49319.jpg'
  },
  {
    name: 'Ars Kreedashala, Daladali Campus',
    location: 'Ring Road, Ranchi',
    sports: 'Volleyball',
    link: '/Volleyball',
    image: 'https://img.freepik.com/free-photo/ball-hitting-net_23-2149450951.jpg'
  },
  {
    name: 'Ars Kreedashala, Daladali Campus',
    location: 'Daladali, Ranchi',
    sports: 'Yoga',
    link: '/Yoga',
    image: 'https://img.freepik.com/free-photo/sporty-young-woman-doing-yoga-practice-isolated-concept-healthy-life-natural-balance-body-mental-development_231208-10353.jpg'
  },
  {
    name: 'Ars Kreedashala,  Daladali Campus',
    location: 'Ranchi, Jharkhand',
    sports: 'Gym',
    link: '/Gym',
    image: 'https://img.freepik.com/free-photo/man-training-gym_23-2148024362.jpg'
  },
  {
    name: 'Ars Kreedashala,  Daladali Campus',
    location: 'Ring Road, Ranchi',
    sports: 'Basketball',
    link: '/Basketball',
    image: 'https://img.freepik.com/free-photo/young-black-man-doing-sports-playing-basketball-sunrise-listening-music-headphones-active-lifestyle-summer-morning_285396-1458.jpg'
  },
  {
    name: 'Ars Kreedashala, Daladali Campus',
    location: 'Daladali, Ranchi',
    sports: 'Football',
    link: '/Football',
    image: 'https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg'
  },


  {
    name: 'Ars Kreedashala, Daladali Campus',
    location: 'Daladali, Ranchi',
    sports: 'Badminton',
    link: '/Badminton',
    image: 'https://img.freepik.com/free-photo/badminton-concept-with-racket-shuttlecock_23-2149940923.jpg?t=st=1746687834~exp=1746691434~hmac=0b8df3d729919fc9e004b7106a36226649b8e9f08679a44efe6eb17892d535e1&w=1480'
  },



];

export default function SportsAcademyPage() {
  return (
    <div className="sports-page">
      <div className="sports-header">
        <h1>
          Showing <span className="highlight">Arenas</span>
        </h1>
        <button className="filter-button">
          <span className="material-icons"></span> Filter
        </button>
      </div>

      <div className="sports-grid">
        {sportsCenters.map((center, idx) => (
          <div key={idx} className="sports-card">
            <img
              src={center.image}
              alt={center.name}
              className="sports-image"
            />
            <div className="sports-content">
              <h2>{center.name}</h2>
              <p className="location">{center.location}</p>
              <p className="sports">{center.sports}</p>
              <Link to={center.link} className="learn-button">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
