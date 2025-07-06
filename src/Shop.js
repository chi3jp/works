import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const goodsItems = [
  { name: 'SUZURI', url: 'https://suzuri.jp/Chi3jp', description: 'AIで作成したデザインを使用したTシャツやエコバッグなどのオリジナルグッズを販売しています。' },
  { name: 'REDBUBBLE', url: 'https://www.redbubble.com/people/chi3-jp/', description: '世界中で販売可能なグローバルなプラットフォームで、様々なアイテムにAIアートを展開しています。' },
  { name: 'TRINITY', url: 'https://www.ttrinity.jp/shop/chi3/', description: '日本のクリエイター向けプラットフォームで、高品質なグッズを国内向けに販売しています。' },
  { name: '虹色絵巻', url: 'https://kakowara.booth.pm/items/6079581', description: '多数のAIアーティストの作品をまとめた豪華作品集に参加。美しいAIアートの数々を1冊の本にまとめました。' },
];

const digitalProducts = [
  { name: 'LINEスタンプ', url: 'https://store.line.me/stickershop/author/227674/ja', description: 'AIを活用して作成したオリジナルLINEスタンプを販売中。日常の会話がもっと楽しくなるスタンプが揃っています。' },
  { name: 'PromptBase', url: 'https://promptbase.com/profile/chi3', description: 'AIアート生成のためのプロンプトを販売しています。高品質な画像生成のコツを学べます。' },
];

function Shop() {
  useEffect(() => {
    document.title = 'Shop | Chi3 Works';
  }, []);
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4 display-4">Shop & Contents</h2>

      <h3 className="text-center my-4 text-muted bg-light p-2">Goods</h3>
      <Row>
        {goodsItems.map(item => (
          <Col md={4} key={item.name} className="mb-4">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
              <Card className="h-100 border-0">
                <Card.Body className="card-body">
                  <Card.Title className="shop-item-title" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <div className="card-overlay">
                  <div className="card-overlay-text">Go to Site</div>
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <h3 className="text-center my-4 text-muted bg-light p-2">Digital Products</h3>
      <Row>
        {digitalProducts.map(item => (
          <Col md={4} key={item.name} className="mb-4">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
              <Card className="h-100 border-0">
                <Card.Body className="card-body">
                  <Card.Title className="shop-item-title" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
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

export default Shop;
