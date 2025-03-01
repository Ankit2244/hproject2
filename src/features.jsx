import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    { title: "AI Roleplay", desc: "Practice conversations with AI characters." },
    { title: "Grammar Battles", desc: "Challenge AI or friends to correct sentences." },
    { title: "Scan & Fix", desc: "Scan text and fix grammar instantly." },
  ];

  return (
    <div className="features-container">
      <h2>Key Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
