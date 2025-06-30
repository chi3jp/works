import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import About from './About';
import ArtworkDetail from './ArtworkDetail';
import Contact from './Contact'; // 追加
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">chi3jp AI Art</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Gallery</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link> {/* 追加 */}
                <Nav.Link href="https://www.instagram.com/chi3jp_aiart/" target="_blank" rel="noopener noreferrer">Instagram</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> {/* 追加 */}
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;