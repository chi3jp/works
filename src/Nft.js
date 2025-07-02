import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const nftPlatforms = [
  { name: 'OPENSEA', url: 'https://opensea.io/Chi3JP', description: '世界最大級のNFTマーケットプレイスで作品を展示・販売しています。イーサリアムブロックチェーンを採用。' },
  { name: 'RARIBLE', url: 'https://rarible.com/chi3jp/owned', description: 'マルチチェーン対応のNFTマーケットプレイス。様々なブロックチェーンで作品を展開しています。' },
  { name: 'HEXA', url: 'https://nft.hexanft.com/users/VfS6uMp40v7EG1', description: '日本発のNFTマーケットプレイス。円決済が可能で、初心者にもやさしいUIが特徴です。' },
];

function Nft() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">NFT Works</h2>
      <Row>
        {nftPlatforms.map(platform => (
          <Col md={4} key={platform.name} className="mb-4">
            <a href={platform.url} target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{platform.name}</Card.Title>
                  <Card.Text>{platform.description}</Card.Text>
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

export default Nft;
