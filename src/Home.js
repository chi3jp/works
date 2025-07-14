import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const hashtags = [
  { name: '#グッズ', path: '/shop' },
  { name: '#SNS', path: '/media' },
  { name: '#メルマガ', path: '/media' },
  { name: '#音声配信', path: '/media' },
  { name: '#コンテンツ', path: '/shop' },
  { name: '#NFT', path: '/nft' },
  { name: '#AIアプリ100本ノック', path: '/apps100' }
];

function Home() {
  useEffect(() => {
    document.title = 'Home | Chi3 Works';
  }, []);
  return (
    <Container className="my-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4">AI-Powered Creativity</h1>
          <p className="lead mt-3">
            AIを活用したクリエイティブな作品を制作・発信しています。
          </p>
          <hr className="my-4" />
          <p>
            このサイトでは、Chi3の様々な活動を紹介しています。
            <br />
            各ページで作品や情報をご覧ください。
          </p>
          {/* Hashtag links section */}
          <div className="mt-5">
            <h2 className="mb-4">Explore Our Works</h2>
            <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-4 home-explore-links">
              {hashtags.map(tag => (
                <li key={tag.name}>
                  <Link to={tag.path} className="shop-item-title" style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'inherit' }}>
                    {tag.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button as={Link} to="/about" style={{ backgroundColor: '#6A0DAD', borderColor: '#6A0DAD' }} className="mt-3">About Me</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;