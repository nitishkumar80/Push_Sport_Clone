import React from "react";
import "./WhyPushSports.css"; // Import CSS file

const features = [
  {
    img: "https://pushsports.in/wp-content/uploads/2024/09/Infrastructure.png",
    title: "World-class Infrastructure",
    description: "Safe, Hygienic & Supervised Arenas",
  },
  {
    img: "https://pushsports.in/wp-content/uploads/2024/09/Certified-Coaches.png",
    title: "Best Coaches & Curriculum",
    description: "Elite Coaches deliver our structured curriculum from beginner to Professional level.",
  },
  {
    img: "https://pushsports.in/wp-content/uploads/2024/09/gamified-tool-icon.png",
    title: "Gamified Assessment Tools",
    description: "Motivate athletes to perform better with our gamification tools.",
  },
  {
    img: "https://pushsports.in/wp-content/uploads/2024/09/growth.png",
    title: "Growth & Supervision",
    description: "Helping athletes unleash their potential.",
  },
];

const WhyPushSports = () => {
  return (
    <section className="why-push-sports">
      <div className="container">
        <h2 className="heading">
          Why <span className="main-color">Push Sports?</span>
        </h2>
        <p className="description">
          We offer world-class facilities, experienced coaches, and a holistic approach to world-class arenas, elite coaches, and competitive exposure with a 15:1
          student-coach ratio, all underpinned by an advanced training curriculum. A sports academy unparalleled in scope and ambition.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.img} alt={feature.title} className="feature-icon" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPushSports;
