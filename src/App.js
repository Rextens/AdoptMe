import './App.css';
import { Col, Container, Navbar, Row } from 'reactstrap';
import { Hexagon, ResponsiveHoneycomb } from 'react-honeycomb'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let loadedPets = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  let facts = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Donec sed imperdiet nisi, id feugiat turpis', 'Integer porta lacus efficitur justo pellentesque, sed laoreet nibh porttitor']

  let hexagonSize = 200

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <Container fluid={true}>
      <Navbar className="AdoptNavbar" fixed="top">
        
      </Navbar>
      <Row noGutters>
        <Col xs={12} className="Topground">
          <Row noGutters>
            <Col xs={12} className="Section">
              <div className="ContentContainer">
                <div className="Title">
                  Who Are We?
                </div>
                <div className="Content">
                Ut et auctor enim. Duis dapibus viverra dolor quis blandit. Morbi libero elit, molestie at sem quis, efficitur rhoncus elit. Morbi id mauris dui. Maecenas ut placerat orci. Vivamus non sollicitudin magna. Nulla facilisi. Aenean luctus quam non rutrum pharetra. Vestibulum accumsan fermentum odio. 
                </div>
              </div>
            </Col>

            <Col xs={12} className="Section">
              Jak pomóc
            </Col>

            <Col xs={12} className="Section">
              <div className="ContentContainer">
                <div className="Title">
                  Did You Know?
                </div>
                <div className="Content">
                  { facts[getRandomInt(0, facts.length)] }
                </div>
              </div>
            </Col>

            <Col xs={12} className="ChooseAdopt Section">
              <ResponsiveHoneycomb
                  className="Honeycomb"
                  defaultWidth={1024}
                  size={hexagonSize}
                  items={loadedPets}
                  columns={120}
                  renderItem={(item) => (
                    <Hexagon className="abc">
                      <img
                        src={`https://picsum.photos/${hexagonSize * 2}?random=${item}`}
                        alt={`Random #${item}`}
                      />
                    </Hexagon>
                  )}
                />
            </Col>

            <Col xs={12} className="Footer Section">
              <div className="ContactContent">
                <div className="ContactMethod">
                  <div className="ContactText">
                    Call Us: +69 420 2137
                  </div>
                </div>
                <div className="ContactMethod">
                  <div className="ContactText">
                    Mail Us: adopt@me.com
                  </div>
                </div>
                <div className="ContactMethod">
                  Find Us: Map
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="Background">
          <img
            src={`https://cdn.wallpapersafari.com/96/81/ojV1dH.jpg`}
            alt={`Random #${3}`}
            className="BackgroundImage"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
