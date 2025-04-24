import React, { useState, useEffect } from "react";
import "./AdmissionFloatingButton.css";

const AdmissionFloatingButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <div className="admission-fixed">
        <a href="/admission" className="admission-button" target="_blank" rel="noopener noreferrer">
          Admission
        </a>
      </div>
    )
  );
};

export default AdmissionFloatingButton;
