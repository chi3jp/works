import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Media from './Media';
import Nft from './Nft';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Chi3 Works</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                <Nav.Link as={Link} to="/media">Media</Nav.Link>
                <Nav.Link as={Link} to="/nft">NFT</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/media" element={<Media />} />
            <Route path="/nft" element={<Nft />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-dark text-white text-center p-3 mt-4">
          <a href="https://twitter.com/chi3_jp" target="_blank" rel="noopener noreferrer" className="text-white mx-2">X</a>
          <a href="https://www.instagram.com/chi3jp_aiart/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">Instagram</a>
          <a href="https://www.pinterest.jp/chi3_jp/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">Pinterest</a>
          <a href="https://www.tiktok.com/@chi3jp" target="_blank" rel="noopener noreferrer" className="text-white mx-2">TikTok</a>
          <a href="https://suno.com/@chi3jp" target="_blank" rel="noopener noreferrer" className="text-white mx-2">Suno</a>
          <a href="https://buymeacoffee.com/chi3jp" target="_blank" rel="noopener noreferrer" className="text-white mx-2 no-wrap">Buy me a coffee</a>
          <p className="mt-2">&copy; 2025 Chi3. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
