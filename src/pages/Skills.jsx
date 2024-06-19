import React from 'react';
import './skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 7 },
    { name: 'Node.js', level: 7 },
    { name: 'MongoDB', level: 7 },
    { name: 'Express js', level: 6 },
    { name: 'React Js', level: 6 },
    { name: 'HTML', level: 6 },
    { name: 'CSS', level: 6 },
    { name: 'GIT', level: 6 },
    { name: 'DSA', level: 6 },
    { name: 'Redux', level: 5 },
    { name: 'My SQL', level: 5 },
    { name: 'Bootstrap', level: 5 },
    // Add more technical skills as needed
  ];

  const softSkills = [
    { name: 'Communication', rating: 4 },
    { name: 'Teamwork', rating: 5 },
    { name: 'Problem Solving', rating: 4 },
    { name: 'Time Management', rating: 4 },
    // Add more soft skills as needed
  ];

  const languagesKnown = [
    { name: 'Malayalam', rating: 5 },
    { name: 'Sanskrit', rating: 5 },
    { name: 'English', rating: 4 },
    { name: 'Hindi', rating: 4},
    { name: 'Tamil', rating: 3 },
    { name: 'Telugu', rating: 3 },
    // Add more languages as needed
  ];

  return (
    <div className="skills">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-name">{skill.name}</div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(skill.level / 10) * 100}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="10"
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6 mb-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-name">{skill.name}</div>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={i < skill.rating ? 'filled-star' : 'empty-star'}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <h3 className="text-center mb-3">Languages Known</h3>
            {languagesKnown.map((language, index) => (
              <div key={index} className="skill">
                <div className="skill-name">{language.name}</div>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={i < language.rating ? 'filled-star' : 'empty-star'}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
