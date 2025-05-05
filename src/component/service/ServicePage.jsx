import React from 'react';
import './ServicePage.css'; // Styles defined separately
import  { useEffect, useRef } from 'react';
const ServicePage = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;
  
      const cardWidth = container.firstChild.offsetWidth + 32; // Include gap
      let scrollPos = 0;
  
      const scroll = () => {
        if (scrollPos + container.offsetWidth >= container.scrollWidth) {
          scrollPos = 0; // Reset to start
        } else {
          scrollPos += cardWidth;
        }
  
        container.scrollTo({
          left: scrollPos,
          behavior: 'smooth',
        });
      };
  
      const interval = setInterval(scroll, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
  return (
    <div className="service-page">
      {/* Top Stats + Promo Section */}
      <div className="stats-section">
        <div className="stats-left">
          <div className="stat-item">
            <h2>7000+</h2>
            <p>Students trained across multiple disciplines at Ars Kreedashala</p>
          </div>
          <div className="stat-item">
            <h2>50+</h2>
            <p>Representations at State and District level in over 6 sports</p>
          </div>
          <div className="stat-item">
            <h2>100+</h2>
            <p>Certified Coaches trained in child safety, POSH & POCSO compliance</p>
          </div>
          <div className="stat-item">
            <h2>10+</h2>
            <p>Expert-designed sports curriculums tailored for school and academy programs</p>
          </div>
        </div>
        <div className="stats-right">
          <h2>Partner with Ars Kreedashala</h2>
          <p>Empowering schools with a complete ecosystem for holistic education and athletic development</p>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="why-us">
        <h2>Why Choose Ars Kreedashala</h2>
        <div className="features">
          <div className="feature-card1">
            <img src="./icon/Athletic-Growth-Icon.webp" alt="Growth Icon" />
            <h3>Age-Specific Athletic Growth</h3>
            <p>
              Scientifically designed, NEP-aligned sports curriculum that ensures optimal physical development across age groups
            </p>
          </div>
          <div className="feature-card1">
            <img src="./icon/gamified-tool-icon.webp" alt="Gamified Icon" />
            <h3>Gamified Learning Approach</h3>
            <p>
              Make sports fun and engaging with interactive, gamified fitness modules designed to build consistency and motivation
            </p>
          </div>
          <div className="feature-card1">
            <img src="./icon/Assessment-Reports-Icon.webp" alt="Report Icon" />
            <h3>Smart Performance Reports</h3>
            <p>
              Data-backed assessments and progress tracking for students, shared directly with parents and institutions
            </p>
          </div>
          <div className="feature-card1">
            <img src="./icon/growth.webp" alt="Monetize Icon" />
            <h3>Scalable Sports Ecosystem</h3>
            <p>
              Enable schools to grow through after-school academies and monetized community access to premium sports infrastructure
            </p>
          </div>
        </div>
      </div>

      <div className="our-solutions">
  <h2>Our Solutions</h2>
  <div className="solution-cards" ref={scrollRef}>
    <div className="solution-card">
      <img
        src="https://img.freepik.com/free-photo/kids-playing-football-supervised-by-football-trainer_23-2149684435.jpg?t=st=1746390024~exp=1746393624~hmac=baf8e585de7a7172214aaa13c3fdf27e2f0d868d6ff6cef781224df55f637340&w=2000"
        alt="In-School Training"
      />
      <h3>In-School Training</h3>
      <p>
        Integrated sports curriculum aligned with school timetables to enhance physical literacy, discipline, and team spirit
      </p>
    </div>
    <div className="solution-card">
      <img
        src="https://img.freepik.com/free-photo/high-angle-football-trainer-teaching-kids_23-2149742039.jpg?t=st=1746389185~exp=1746392785~hmac=d6ddd26223f4c5401d482c2eb37e920e2a0e2cbeb5e6e932ff56130192ed865b&w=2000"
        alt="After-School Academies"
      />
      <h3>After-School Academies</h3>
      <p>
        Professional coaching sessions beyond school hours to prepare budding athletes for competitive excellence
      </p>
    </div>
    <div className="solution-card">
      <img
        src="https://img.freepik.com/free-photo/young-stylish-mother-with-four-kids-outdoor-sports-family-spend-free-time-outdoors-with-scooters-skates-painted-with-chalk-asphalt_627829-11729.jpg?t=st=1746390361~exp=1746393961~hmac=3a11354f1acd4bef2a0de9b1bed2a8cd06b8c450d3594692b70a4d0743f1a11f&w=2000"
        alt="Come&Play Arenas"
      />
      <h3>Come&Play Arenas</h3>
      <p>
        Community-friendly access to world-class sporting facilities for events, tournaments, and recreational leagues
      </p>
    </div>
    <div className="solution-card">
      <img
        src="https://img.freepik.com/free-photo/back-view-women-doing-sport-with-stats_23-2150040498.jpg?t=st=1746391579~exp=1746395179~hmac=f7168bbafe574276d4df662d02384197cf8a74347de3f30aca382a80a67674bb&w=2000"
        alt="Tech Integration"
      />
      <h3>Tech-Enabled Skill Assessment</h3>
      <p>
        Use AI-based tools and digital platforms to track, analyze, and improve player performance and training efficiency
      </p>
    </div>
    <div className="solution-card">
      <img
        src="https://img.freepik.com/free-photo/medium-shot-kids-yoga-mats-with-pink-balls_23-2149038764.jpg?t=st=1746391703~exp=1746395303~hmac=489283da2f6a7c37a1aa3250afd720c062334bb60f5a1e763cfba520ee67d7b4&w=2000"
        alt="Coach Training"
      />
      <h3>Coach Certification & Mentoring</h3>
      <p>
        Upskilling programs for sports educators with workshops, certifications, and mentorship under national-level experts
      </p>
    </div>
    <div className="solution-card">
      <img
        src="https://img.freepik.com/free-photo/young-woman-working-laptop-outdoors-showing-super-smiling_651396-3635.jpg?t=st=1746391793~exp=1746395393~hmac=65f89810eb6ed5ce0524454ea6e5dea8bd81ad52ba1438d807bb6f6de3814abc&w=2000"
        alt="Talent Scouting"
      />
      <h3>Talent Identification Programs</h3>
      <p>
        Structured scouting programs to identify promising athletes and provide them with scholarship or advanced training pathways
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default ServicePage;
