import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Apps100() {
  useEffect(() => {
    document.title = 'AI Apps 100 | Chi3 Works';
  }, []);

  return (
    <Container className="my-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4">AIアプリ100本ノック</h1>
          <p className="lead mt-3">
            <a href="https://x.com/nikkei/status/1943981536002318398" target="_blank" rel="noopener noreferrer">こちらの投稿</a>にある「業務をこなす」アプリとは少し違いますが、この取り組みに触発され、私が個人的に使いそうなアプリケーションを100個開発しました。
          </p>
          <hr className="my-4" />
          <p>
            以下のリンクから、開発した100個のアプリをご覧ください。
          </p>
          <Button 
            href="https://app100.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ backgroundColor: '#6A0DAD', borderColor: '#6A0DAD' }} 
            className="mt-3"
          >
            100 Apps Site
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Apps100;
