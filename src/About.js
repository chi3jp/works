import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css'; // Aboutページ専用のCSSを読み込む

function About() {
  useEffect(() => {
    document.title = 'About | Chi3 Works';
  }, []);
  return (
    <Container className="my-4 about-page">
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <Image src="/chi3jp_A_realistic_beautiful_particle_photorealism_of_a_healt_3bb05ce5-9b4d-4b0b-80c4-b1f885766ee2_3.png" alt="Profile" roundedCircle fluid className="profile-image mb-3" />
          <h2 className="display-4">About</h2>
          <p className="lead">
            AIを軸に、アートから日常のヒントまで、多彩なコンテンツを創造・発信しています。
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3 className="text-center my-4 text-muted bg-light p-2">Creative Works & Information Delivery</h3>
          <p>
            アーティストとして、AIアートや音楽といったクリエイティブな作品を制作しています。AIの無限の可能性と人間の感性を掛け合わせ、新しい表現を探求することが私の情熱です。
          </p>
          <p>
            同時に、メッセンジャーとして、メルマガやNote、音声配信を通じて「AIを日常に活かすアイデア」をお届けしています。「AIで、もっと毎日を楽しく、豊かに」をテーマに、誰もが気軽にテクノロジーの恩恵を受けられるようなヒントを発信しています。
          </p>
          <p>
            このサイトでは、私の多岐にわたる活動をまとめています。どうぞごゆっくりお楽しみください。
          </p>
        </Col>
      </Row>

      
    </Container>
  );
}

export default About;