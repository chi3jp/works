import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const textSites = [
  { name: 'note', url: 'https://note.com/chi3jp', description: 'AIに関する技術的な投稿や、メルマガのバックナンバーなどを公開しています。' },
  { name: 'Substack', url: 'https://chi3.substack.com/', description: '「AIで日常をラクにするヒント」をテーマに、メールマガジンを配信しています。' },
];

const audioStreams = [
  { name: 'stand.fm', url: 'https://stand.fm/channels/5ec4f43bf654bbcab4231d7f', description: '声で、つながる。声で、たのしむ。' },
  { name: 'Apple Podcast', url: 'https://podcasts.apple.com/jp/podcast/id1821673136', description: 'Appleデバイスで楽しむポッドキャスト' },
  { name: 'Spotify', url: 'https://open.spotify.com/show/1Oaaa3xcDkqh3MsPITtDwr', description: '音楽とポッドキャストをいつでもどこでも' },
];

const socialLinks = [
  { name: 'X', url: 'https://twitter.com/chi3_jp', description: '最新情報や日々のつぶやきを投稿しています。' },
  { name: 'Instagram', url: 'https://www.instagram.com/chi3jp_aiart/', description: 'AIアート作品をメインに公開しています。' },
  { name: 'Pinterest', url: 'https://www.pinterest.jp/chi3_jp/', description: 'AIアートやデザインのインスピレーションを共有しています。' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@chi3jp', description: 'ショート動画でクリエイティブなコンテンツを発信しています。' },
  { name: 'Suno', url: 'https://suno.com/@chi3jp', description: 'AIで作曲したオリジナル楽曲を公開しています。' },
  { name: 'Buy me a coffee', url: 'https://buymeacoffee.com/chi3jp', description: '活動をサポートしていただけると嬉しいです。' },
];

function Media() {
  useEffect(() => {
    document.title = 'Media | Chi3 Works';
  }, []);
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4 display-4">Media</h2>

      <h3 className="text-center my-4 text-muted bg-light p-2">Writing Platforms</h3>
      <Row className="justify-content-center">
        {textSites.map(site => (
          <Col md={6} key={site.name} className="mb-4">
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
              <Card className="h-100 border-0">
                <Card.Body>
                  <Card.Title className="shop-item-title" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{site.name}</Card.Title>
                  <Card.Text>{site.description}</Card.Text>
                </Card.Body>
                <div className="card-overlay">
                  <div className="card-overlay-text">Read on {site.name}</div>
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <h3 className="text-center my-4 text-muted bg-light p-2">Podcasts</h3>
      <Row className="justify-content-center">
        {audioStreams.map(stream => (
          <Col md={4} key={stream.name} className="mb-4">
            <a href={stream.url} target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
              <Card className="h-100 border-0">
                <Card.Body>
                  <Card.Title className="shop-item-title" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{stream.name}</Card.Title>
                  <Card.Text>{stream.description}</Card.Text>
                </Card.Body>
                <div className="card-overlay">
                  <div className="card-overlay-text">Listen Now</div>
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <h3 className="text-center my-4 text-muted bg-light p-2">Social Media</h3>
      <Row>
        {socialLinks.map(link => (
          <Col md={4} key={link.name} className="mb-4">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
              <Card className="h-100 border-0">
                <Card.Body>
                  <Card.Title className="shop-item-title" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{link.name}</Card.Title>
                  <Card.Text>{link.description}</Card.Text>
                </Card.Body>
                <div className="card-overlay">
                  <div className="card-overlay-text">Go to Site</div>
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Media;
