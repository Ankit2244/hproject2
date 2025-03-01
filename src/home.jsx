import React, { useEffect } from "react";
import gsap from "gsap";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    gsap.from(".title", { opacity: 0, y: -50, duration: 1, ease: "bounce" });
    gsap.from(".description", { opacity: 0, y: 30, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">Learn. Play. Improve.</h1>
      <p className="description">
        Enhance your English & Hindi with AI-driven challenges, grammar battles, and real-time voice interactions.
      </p>
    </div>
  );
};

export default Home;
