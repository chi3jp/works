import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Media from './Media';
import Nft from './Nft';
import About from './About';
import Contact from './Contact';
import Apps100 from './Apps100';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand={false}>
          <Container>
            <Navbar.Brand as={Link} to="/" onClick={handleClose}>Chi3 Works</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvas-navbar" onClick={handleShow} />
            <Navbar.Offcanvas
              id="offcanvas-navbar"
              aria-labelledby="offcanvas-navbar-label"
              placement="end"
              show={show}
              onHide={handleClose}
              className="bg-dark text-white"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvas-navbar-label">Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
                  <Nav.Link as={Link} to="/shop" onClick={handleClose}>Shop</Nav.Link>
                  <Nav.Link as={Link} to="/media" onClick={handleClose}>Media</Nav.Link>
                  <Nav.Link as={Link} to="/nft" onClick={handleClose}>NFT</Nav.Link>
                  <Nav.Link as={Link} to="/apps100" onClick={handleClose}>AIアプリ100本ノック</Nav.Link>
                  <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
                  <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
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
            <Route path="/apps100" element={<Apps100 />} />
          </Routes>
        </main>
        <footer className="bg-dark text-white text-center p-3 mt-4">
          <div className="d-flex flex-wrap justify-content-center mb-2">
            <Link to="/" className="text-white mx-2">Home</Link>
            <Link to="/shop" className="text-white mx-2">Shop</Link>
            <Link to="/media" className="text-white mx-2">Media</Link>
            <Link to="/nft" className="text-white mx-2">NFT</Link>
            <Link to="/apps100" className="text-white mx-2">AIアプリ100本ノック</Link>
            <Link to="/about" className="text-white mx-2">About</Link>
            <Link to="/contact" className="text-white mx-2">Contact</Link>
          </div>
          <p className="mt-2">&copy; 2025 Chi3. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
