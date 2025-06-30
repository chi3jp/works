import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Gallery.css'; // ホバーエフェクト用のCSSを読み込む

const images = [
  { id: 1, src: '/chi3jp_An_abstract_and_artistic_woman_merging_with_sound_wave_2bc7d0a3-a1b1-4adf-94f7-045b02fdaeb9_3.png', alt: 'AI Art 1', title: 'Abstract Woman with Sound Waves', description: 'AIが生成した抽象的な女性像です。色彩と形状の融合が特徴です。' },
  { id: 2, src: '/chi3jp_An_abstract_and_artistic_woman_merging_with_sound_wave_9c7b8edd-0700-44e0-8e50-5df1aa4a0443_0.png', alt: 'AI Art 2', title: 'Dynamic Sound Wave Portrait', description: '音波と融合する女性をテーマにした作品です。' },
  { id: 3, src: '/chi3jp_An_abstract_and_artistic_woman_merging_with_sound_wave_3d5eb923-d381-4975-9791-f36bc7d622b9_0.png', alt: 'AI Art 3', title: 'Flowing Energy Portrait', description: '流れるような線と色彩が特徴のダイナミックな作品です。' },
  { id: 4, src: '/chi3jp_An_abstract_and_artistic_woman_merging_with_sound_wave_3d5eb923-d381-4975-9791-f36bc7d622b9_1.png', alt: 'AI Art 4', title: 'Ethereal Beauty in Motion', description: '幻想的な雰囲気を持つ女性のポートレートです。' },
];

function Gallery() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">My AI Art Collection</h2>
      <Row>
        {images.map(image => (
          <Col xs={12} sm={6} md={4} lg={3} key={image.id} className="mb-4 gallery-item">
            <Link to={`/artwork/${image.id}`}>
              <div className="image-wrapper">
                <Image src={image.src} alt={image.alt} fluid rounded />
                <div className="image-overlay">
                  <div className="image-title">{image.title}</div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;