import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="my-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4">AI-Powered Creativity</h1>
          <p className="lead mt-3">
            AIを活用したクリエイティブな作品を制作・発信しています。
            <br />
            #グッズ #SNS #メルマガ #音声配信 #コンテンツ #NFT
          </p>
          <hr className="my-4" />
          <p>
            このサイトでは、Chi3の様々な活動を紹介しています。
            <br />
            Shop、Media、NFTなど、各ページで作品や情報をご覧ください。
          </p>
          {/* Explore セクションの追加 */}
          <div className="mt-5">
            <h2 className="mb-4">Explore Our Works</h2>
            <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-4 home-explore-links">
              <li><Link to="/shop" className="shop-item-title" style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'inherit' }}>Shop</Link></li>
              <li><Link to="/media" className="shop-item-title" style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'inherit' }}>Media</Link></li>
              <li><Link to="/nft" className="shop-item-title" style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'inherit' }}>NFT</Link></li>
            </ul>
          </div>
          <Button as={Link} to="/about" style={{ backgroundColor: '#6A0DAD', borderColor: '#6A0DAD' }} className="mt-3">About Me</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
