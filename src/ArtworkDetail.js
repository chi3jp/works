
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Image, Button } from 'react-bootstrap';
import ModalImage from 'react-modal-image';

// 仮の画像データ（Gallery.jsと同じものを使用）
const images = [
  { id: 1, src: '/chi3jp_An_abstract_and_artistic_woman_merging_with_sound_wave_2bc7d0a3-a1b1-4adf-94f7-045b02fdaeb9_3.png', alt: 'AI Art 1', title: 'Abstract Woman with Sound Waves', description: 'AIが生成した抽象的な女性像です。色彩と形状の融合が特徴です。' },
  { id: 2, src: '/chi3jp_An_abstract_and_artistic_woman_merging_with_sound_wave_9c7b8edd-0700-44e0-8e50-5df1aa4a0443_0.png', alt: 'AI Art 2', title: 'Dynamic Sound Wave Portrait', description: '音波と融合する女性をテーマにした作品です。' },
  { id: 3, src: '/chi3jp_An_abstract_and_artistic_woman_merging_with_sound_wave_3d5eb923-d381-4975-9791-f36bc7d622b9_0.png', alt: 'AI Art 3', title: 'Flowing Energy Portrait', description: '流れるような線と色彩が特徴のダイナミックな作品です。' },
  { id: 4, src: '/chi3jp_An_abstract_and_artistic_woman_merging_with_sound_wave_3d5eb923-d381-4975-9791-f36bc7d622b9_1.png', alt: 'AI Art 4', title: 'Ethereal Beauty in Motion', description: '幻想的な雰囲気を持つ女性のポートレートです。' },
];

function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = images.find(img => img.id === parseInt(id));

  if (!artwork) {
    return <Container className="my-4">Artwork not found.</Container>;
  }

  const currentIndex = images.findIndex(img => img.id === parseInt(id));
  const prevArtworkId = currentIndex > 0 ? images[currentIndex - 1].id : null;
  const nextArtworkId = currentIndex < images.length - 1 ? images[currentIndex + 1].id : null;

  return (
    <Container className="my-4 text-center">
      <h2>{artwork.title}</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <ModalImage
          small={artwork.src}
          large={artwork.src}
          alt={artwork.alt}
          hideDownload={true}
          hideZoom={true}
          className="img-fluid rounded mb-3"
        />
      </div>
      <p>{artwork.description}</p>

      <div className="d-flex justify-content-between mt-4">
        {prevArtworkId && (
          <Button variant="secondary" onClick={() => navigate(`/artwork/${prevArtworkId}`)}>
            Previous
          </Button>
        )}
        {!prevArtworkId && <div />}
        {nextArtworkId && (
          <Button variant="secondary" onClick={() => navigate(`/artwork/${nextArtworkId}`)}>
            Next
          </Button>
        )}
      </div>
      <Button variant="outline-secondary" onClick={() => navigate('/')} className="mt-4">
        Back to Gallery
      </Button>
    </Container>
  );
}

export default ArtworkDetail;
