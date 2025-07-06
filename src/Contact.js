import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  useEffect(() => {
    document.title = 'Contact | Chi3 Works';
  }, []);
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="text-center mb-4 display-4">Contact</h2>
          <p>
            作品に関するお問い合わせやコラボレーションのご依頼は、以下のInstagramアカウントまでお願いいたします。
          </p>
          <p>
            <a href="https://www.instagram.com/chi3jp_aiart/" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#6A0DAD', borderColor: '#6A0DAD', color: 'white' }}>
              Visit my Instagram
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;