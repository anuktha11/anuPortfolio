import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Resume.css';
import image from '../Assets/image.jpeg';

const Resume = () => {

  const downloadPDF = () => {
    const input = document.getElementById('resume');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Anuktha_Resume.pdf');
      });
  };

  return (
    <div className="resume" id="resume">
      <Container>
        <Row className="header">
          <Col md={3} className="text-center">
            <Image src={image} className="profile-photo" />
          </Col>
          <Col md={9}>
            <h1>Anuktha</h1>
            <p className="lead">Self-learned MERN Stack Developer</p>
            <p>Email: anuktha@example.com | Phone: +1234567890</p>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <h2>Experience</h2>
            <ul>
              <li>
                <h4>Frontend Developer at Example Company</h4>
                <p>January 2023 - Present</p>
                <p>Developed responsive web applications using React, Redux, and Bootstrap.</p>
              </li>
              <li>
                <h4>Backend Developer at Another Company</h4>
                <p>June 2021 - December 2022</p>
                <p>Worked on building scalable APIs using Node.js, Express, and MongoDB.</p>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Education</h2>
            <ul>
              <li>
                <h4>Bachelor of Technology in Computer Science</h4>
                <p>Example University, 2018 - 2022</p>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>HTML & CSS</li>
              <li>Bootstrap</li>
              <li>Git & GitHub</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Projects</h2>
            <ul>
              <li>
                <h4>Project Name</h4>
                <p>Short description of the project. <a href="project-link">Project Link</a></p>
              </li>
              <li>
                <h4>Another Project</h4>
                <p>Short description of the project. <a href="project-link">Project Link</a></p>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center mt-4 print-buttons">
          <Col>
            <Button variant="primary" className="m-2" onClick={() => window.print()}>Print</Button>
            <Button variant="secondary" className="m-2" onClick={downloadPDF}>Download PDF</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
