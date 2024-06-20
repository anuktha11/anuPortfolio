import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "./Certificates.css";
import certi1 from '../Assets/certi/novi.jpg'
import certi2 from '../Assets/certi/mern.jpg'
import certi3 from '../Assets/certi/mernS.jpg'
import certi4 from '../Assets/certi/rjs.jpg'


const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

   
  const certificates = [
    {
      title: "Certificate 1",
      description: "Description of Certificate 1.",
      thumbnailUrl: certi1,
      imageUrl: certi1
    },
    {
      title: "Certificate 2",
      description: "Description of Certificate 2.",
      thumbnailUrl: certi2,
      imageUrl: certi2
    },
    {
      title: "Certificate 2",
      description: "Description of Certificate 2.",
      thumbnailUrl: certi3,
      imageUrl: certi3
    },
    {
      title: "Certificate 2",
      description: "Description of Certificate 2.",
      thumbnailUrl: certi4,
      imageUrl: certi4
    },
     
  ];

  const handleThumbnailClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  return (
    <div className="certificates">
      <Container>
        <h2 className="text-center mb-4">Certificates</h2>
        <Row xs={1} md={3} className="g-4">
          {certificates.map((certificate, index) => (
            <Col key={index}>
              <img
                src={certificate.thumbnailUrl}
                alt={certificate.title}
                className="certificate-thumbnail"
                onClick={() => handleThumbnailClick(certificate)}
              />
            </Col>
          ))}
        </Row>
      </Container>

       
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl">
        <Modal.Body>
          <img
            src={selectedCertificate && selectedCertificate.imageUrl}
            alt={selectedCertificate && selectedCertificate.title}
            className="img-fluid"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Certificates;
