import React from "react";
import "./Projects.css";
import cryptoImg from "../assets/coindom-full11.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import aiResumeBuilderImg from "../assets/Ai-Resume.png"


const projectData = [
  {
    title: "AI Resume Builder",
    description:
      "An AI-powered tool that helps users create professional, ATS-friendly resumes in minutes, leveraging Google Gemini AI for personalized recommendations.",
    githubLink: "https://github.com/mahe1999mh",
    liveDemoLink: "https://ai-resume-builder-nu.vercel.app/",
    image: aiResumeBuilderImg, 

  },
  {
    title: "Crypto App",
    description:
      "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
    githubLink: "https://github.com/mahe1999mh",
    liveDemoLink: "https://coindom-crypto-search.vercel.app/",
    image: cryptoImg,
  },
];

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div className="portfolioHeader">
        <p>
          <b>PORTFOLIO</b>
        </p>
        <h3>Each project is a unique piece of development 🧩</h3>
      </div>

      {projectData?.map(
        ({ title, description, githubLink, liveDemoLink, image }) => (
          <>
            <div className="portfolio">
              <div className="portfolioBox">
                <div className="img">
                  <img src={image} id="carimg" alt="website"></img>
                </div>
                <div className="projectData">
                  <h2>{title ?? ""}</h2>
                  <p>{description ?? ""}</p>
                  <div className="codeLink">
                    <a href={githubLink} target="_blank">
                      Code <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={liveDemoLink} target="_blank">
                      Live Demo{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Projects;
