import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Media() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Media</h2>
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <a href="https://note.com/chi3jp" target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>note</Card.Title>
                <Card.Text>
                  AIに関する技術的な投稿や、メルマガのバックナンバーなどを公開しています。
                </Card.Text>
              </Card.Body>
              <div className="card-overlay">
                <div className="card-overlay-text">Read on note</div>
              </div>
            </Card>
          </a>
        </Col>
        <Col md={6} className="mb-4">
          <a href="https://chi3.substack.com/" target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Substack</Card.Title>
                <Card.Text>
                  「AIで日常をラクにするヒント」をテーマに、メールマガジンを配信しています。
                </Card.Text>
              </Card.Body>
              <div className="card-overlay">
                <div className="card-overlay-text">Subscribe on Substack</div>
              </div>
            </Card>
          </a>
        </Col>
        <Col md={4} className="mb-4">
          <a href="https://stand.fm/channels/5ec4f43bf654bbcab4231d7f" target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>stand.fm</Card.Title>
                <Card.Text>声で、つながる。声で、たのしむ。</Card.Text>
              </Card.Body>
              <div className="card-overlay">
                <div className="card-overlay-text">Listen Now</div>
              </div>
            </Card>
          </a>
        </Col>
        <Col md={4} className="mb-4">
          <a href="https://podcasts.apple.com/jp/podcast/id1821673136" target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Apple Podcast</Card.Title>
                <Card.Text>Appleデバイスで楽しむポッドキャスト</Card.Text>
              </Card.Body>
              <div className="card-overlay">
                <div className="card-overlay-text">Listen Now</div>
              </div>
            </Card>
          </a>
        </Col>
        <Col md={4} className="mb-4">
          <a href="https://open.spotify.com/show/1Oaaa3xcDkqh3MsPITtDwr" target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Spotify</Card.Title>
                <Card.Text>音楽とポッドキャストをいつでもどこでも</Card.Text>
              </Card.Body>
              <div className="card-overlay">
                <div className="card-overlay-text">Listen Now</div>
              </div>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Media;
