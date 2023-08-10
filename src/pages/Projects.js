import React from "react";
import "./Projects.css";
import carImg from "../assets/car-rental-full11.png";
import cryptoImg from "../assets/coindom-full11.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div className="portfolioHeader">
        <p>
          <b>PORTFOLIO</b>
        </p>
        <h3>Each project is a unique piece of development 🧩</h3>
      </div>
      <div className="portfolio">
        <div className="portfolioBox">
          <div className="img">
            <img src={carImg} id="carimg" alt="website"></img>
          </div>
          <div className="projectData">
            <h2>CAR RENTAL 🚗</h2>
            <p>
              A car rental website is an online platform that allows users to
              rent cars for personal or business use. The website provides an
              interface for searching, comparing, and reserving cars.
            </p>
            <div className="codeLink">
              <a href="https://github.com/mahe1999mh" target="_blank">
                Code <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://car-rental-ten.vercel.app/" target="_blank">
                Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <div className="portfolioBox">
          <div className="img">
            <img src={cryptoImg} id="carimg" alt="website"></img>
          </div>
          <div className="projectData">
            <h2>Crypto App</h2>
            <p>
              Coindom is a crypto app that allows users to search for
              information about various cryptocurrencies in real-time.
            </p>
            <div className="codeLink">
              <a href="https://github.com/mahe1999mh" target="_blank">
                Code <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://coindom-crypto-search.vercel.app/"
                target="_blank"
              >
                Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
