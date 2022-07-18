import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import Hero from './components/Hero/Hero'
import Pricing from './components/Pricing/Pricing'


import Data from './database/static.json'

function App() {

  return (
    <div id="hero" className="Hero">
      <div className="Stroke"></div>

      <Navbar expand="lg">
        <Container>
          <Col>
            <Navbar.Brand href="#hero">
              <img src="olhar-logo.svg" alt="" />
            </Navbar.Brand>
          </Col>

          <Col className="menuLinks" xs={0}>
              <Nav className="me-auto">
                <Nav.Link href="#hero">Início</Nav.Link>
                <Nav.Link href="#cursos">Cursos</Nav.Link>
              </Nav>
          </Col>

          <Col className="menuCTAs">
            <Button variant="secondary" href="#pricing">{Data.copy.firstAction}</Button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>
        </Container>
      </Navbar>

      <Hero 
        title={Data.copy.title}
        subtitle={Data.copy.subtitle}
        firstAction={<Button variant="primary" href="#pricing">{Data.copy.firstAction}</Button>}
        secondAction={<Button variant="secondary" href="#pricing">saiba mais</Button>}
      />

      <div id="pricing" className="Pricing">
        <Container>
          <Row style={{marginBottom: '80px'}}>
            <h1>Faça parte da escola que está revolucionando os bastidores do mercado digital.</h1>
            <div className="Stroke"></div>
          </Row>

          <Row>
            <Col xs={1} sm={4}></Col>
            <Col>
              <Pricing />
            </Col>
            <Col xs={1} sm={4}></Col>
            
          </Row>
        </Container>
        

        
      </div>
    </div>
  )
}

export default App
