import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="left">
          <img
            src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
            alt="img"
          />
        </div>
        <div className="rigth">
          <h3>
            <b>ABOUT ME</b>
          </h3>
          <h2>A dedicated Front-end Developer based in India, Bangalore📍</h2>
          <p>
            As a Junior Front-End Developer, I excel in HTML, CSS, JavaScript,
            React, Tailwind, and SCSS. Designing responsive websites, my
            expertise crafts engaging interfaces through clean code, utilizing
            cutting-edge techniques. A team player, I thrive in cross-functional
            collaboration, delivering outstanding web applications and a smooth
            user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
