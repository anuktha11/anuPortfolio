import React from 'react';
import './about.css';
import image from '../Assets/image.jpeg'

function About() {
  return (
    <div className="about">
      <div className="about-container container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <div className="profile">
              <img src= {image} alt="Profile" />
              <h2>Anuktha</h2>
              <h4>Qualifications</h4>
                         <p>Masters in Arts</p>
              <p>Self-taught MERN Stack Developer</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="about-text">
              <h3>About Me</h3>
              <p>
                I am a self-learned MERN stack developer with a passion for building innovative web applications. I have experience in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.
              </p>
              <p>
                Currently, I am working as an intern at Brototype, gaining valuable industry experience and honing my skills in software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
