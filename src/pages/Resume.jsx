import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Resume.css';
import image from '../Assets/image.jpeg';

const Resume = () => {
  const downloadPDF = () => {
    const pdfContent = document.getElementById('pdf-content');

    html2canvas(pdfContent)
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
    <div className="resume">
      <Container>
        <div id="pdf-content">
          <Row className="header">
            <Col md={3} className="text-center">
              <Image src={image} className="profile-photo" />
            </Col>
            <Col md={9}>
              <h1>Anuktha</h1>
              <p className="lead">Self-learned MERN Stack Developer</p>
              <p>Email: anukthavr@example.com | Phone: +1234567890</p>
              <p>
                Portfolio: <a href="https://anuktha11.github.io/anuPortfolio/">MyPortfolio</a> <br/>
                LinkedIn: <a href="https://www.linkedin.com/in/anuktha-v-r-41631b262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Link</a> |
                GitHub: <a href="https://github.com/anuktha11">Link</a>
              </p>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <h2>Summary</h2>
              <p>Passionate and self-motivated MERN Stack Developer with experience in developing responsive web applications. Adept at working independently and collaboratively in a team environment.</p>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <h2>Experience</h2>
              <ul>
                <li>
                  <h4>MERN Stack Developer Intern at Brototype</h4>
                  <p>May 2023 - Present</p>
                  <ul>
                    <li>Developing responsive web applications using React, Redux, and Bootstrap.</li>
                    <li>Building scalable APIs using Node.js, Express, and MongoDB.</li>
                    <li>Working on live projects and collaborating with the team to deliver solutions.</li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <h2>Projects</h2>
              <ul>
                <li>
                  <h4>E-commerce Website</h4>
                  <p>Developed a full-featured e-commerce website single-handedly using Node.js, Express, MongoDB, and React. Hosted on AWS EC2 with Nginx. <a href="http://www.greengrove.today">www.greengrove.today</a></p>
                </li>
              </ul>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <h2>Education</h2>
              <ul>
                <li>
                  <h4>Bachelor of Arts in Sanskrit</h4>
                  <p>Example University, 2018 - 2022</p>
                  <p>Graduated with 82% marks</p>
                </li>
              </ul>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col>
              <h2>Skills</h2>
              <ul className="skills-list">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>Git & GitHub</li>
                <li>Data Structures and Algorithms</li>
                <li>AWS EC2</li>
                <li>Nginx</li>
              </ul>
            </Col>
          </Row>
        </div>

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
