import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css'; // Aboutページ専用のCSSを読み込む

function About() {
  return (
    <Container className="my-4 about-page">
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <Image src="/chi3jp_A_realistic_beautiful_particle_photorealism_of_a_healt_3bb05ce5-9b4d-4b0b-80c4-b1f885766ee2_3.png" alt="Profile" roundedCircle fluid className="profile-image mb-3" />
          <h2>About chi3jp AI Art</h2>
          <p className="lead">
            {/* ここにInstagramのプロフィール内容を貼り付けてください */}
            AIアートで女性の美しさを表現しています。
            様々なスタイルに挑戦し、見る人に新しい感動を届けたいと思っています。
            どうぞごゆっくり作品をご覧ください。
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3>My Vision</h3>
          <p>
            私の作品は、AIの無限の可能性と人間の創造性を融合させることで生まれます。
            特に女性の美しさと多様な感情をテーマに、見る人の心に響くようなアートを追求しています。
            一枚一枚の絵に、新しい発見と感動を込めています。
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Contact</h3>
          <p>
            作品に関するお問い合わせやコラボレーションのご依頼は、以下のInstagramアカウントまでお願いいたします。
          </p>
          <p>
            <a href="https://www.instagram.com/chi3jp_aiart/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit my Instagram
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;