import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Data from './../../database/static.json'

import './Hero.styl'

function Hero(props) {
  return (
    <Container className="HeroContainer">
      <Row>
        <Col className="HeroCopy">
          <Row>
            <h1>{props.title}</h1>
          </Row>

          <Row>
            <h2>{props.subtitle}</h2>
          </Row>

          <Row className="CTAGroup">
            {props.firstAction}
            {props.secondAction}
          </Row>

          <Row></Row>
        </Col>

        <Col className="CoursesCards">
          <Col xs={8}>
            {Data.courses.map((object, i) => {
              if (i > -1 && i <= 0) {
                return (
                  <Card style={{position: 'relative'}}>
                    <Card.Img variant="top" src={object.imageURL} />
    
                    <Card.Body style={{position: 'absolute', bottom: '0'}}>
                      <Card.Title>{object.title}</Card.Title>
                    </Card.Body>
                  </Card>
                )
              }
            })}
          </Col>

          <Col className="verticalColumn">
            {Data.courses.map((object, i) => {
              if (i > 0 && i <= 2) {
                return (
                  <Card style={{position: 'relative'}}>
                    <Card.Img variant="top" src={object.imageURL} />
    
                    <Card.Body style={{position: 'absolute', bottom: '0'}}>
                      <Card.Title>{object.title}</Card.Title>
                    </Card.Body>
                  </Card>
                )
              }
            })}

            <Card className="moreCourses">
              <Card.Body>
                <Card.Title>mais cursos</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero