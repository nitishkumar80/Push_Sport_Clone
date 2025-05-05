import React, { useState, useEffect } from "react";
import "./banner.css";

const Banner = () => {
  const banners = [
    {
      title: "Transform Your Game at",
      highlightedText: "Ars Kreedashala",
      description:
        "Empowering athletes with AI-driven performance analysis and expert training to unlock their full potential. Join us to elevate your game with cutting-edge sports tech.",
      buttonText: "Join Now",
      buttonLink: "/contact",
      imageUrl:
        "https://images.pexels.com/photos/27684727/pexels-photo-27684727/free-photo-of-a-young-man-holding-a-soccer-ball-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with real URL
    },
    {
      title: "AI-Powered Sports Coaching",
      highlightedText: "Real-time Feedback",
      description:
        "Train smarter with our mobile-camera based AI coaching that analyzes your posture, detects errors, and helps you improve instantly across Cricket, Football, Badminton & more.",
      buttonText: "Start Free Assessment",
      buttonLink: "#",
      imageUrl:
        "https://images.prismic.io//intuzwebsite/b9ae2e5c-f37c-45f0-8624-68c4b608abff_Banner%402x.png?w=2400&q=80&auto=format,compress&fm=png8", // Replace with real URL
    },
    {
      title: "Join the Movement",
      highlightedText: "For Every Athlete",
      description:
        "From grassroots to advanced athletes, our inclusive platform ensures no dream goes unnoticed. Accessible training, expert sessions, and performance reports—anytime, anywhere.",
      buttonText: "Explore Programs",
      buttonLink: "#",
      imageUrl:
        "https://www.stack.com/wp-content/uploads/2024/09/stack.com-sled-training.png", // Replace with real URL
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="banner-carousel">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentSlide ? "active" : ""}`}
        >
          <div className="banner-content">
            <h1 className="banner-title">
              {banner.title}{" "}
              <span className="banner-highlight">{banner.highlightedText}</span>
            </h1>
            <p className="banner-description">{banner.description}</p>
            <a href={banner.buttonLink} className="banner-button">
              {banner.buttonText}
            </a>
          </div>
          <div className="banner-image">
            <img src={banner.imageUrl} alt={banner.title} />
          </div>
        </div>
      ))}

      <div className="banner-indicators">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`banner-indicator ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
