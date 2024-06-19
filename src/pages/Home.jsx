import React from 'react';
import './home.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Home() {
  return (
    <div className='home'>
      <div className='letters'>
        <div className='letter'>M</div>
        <div className='letter'>E</div>
        <div className='letter'>R</div>
        <div className='letter'>N</div>
      </div>
      <div className='intro-section'>
        <h4>Hello there!</h4>
        <br/>
        <h1>I'm Anuktha </h1>
        <p>
            Passionate full-stack developer and MERN stack enthusiast.<br />
          I turn ideas into reality through innovative web solutions.
        </p>
      </div>
      <div className="buttons">
        <a href="https://www.linkedin.com/in/anuktha-v-r-41631b262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/anuktha11" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </div>
  );
}

export default Home;
