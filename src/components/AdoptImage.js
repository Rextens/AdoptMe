import { Col, Container, Navbar, Row } from 'reactstrap';
import { Hexagon, ResponsiveHoneycomb } from 'react-honeycomb'
import "bootstrap/dist/css/bootstrap.min.css";

const AdoptImage = (props) => {
    return (
        <Col className="AdoptImage" xs={12} sm={6} xl={4}>
            <div className="AdoptContainer">
                <img
                src={`${process.env.PUBLIC_URL}/images/piesek_${props.index}.png`} className="DogImage"/>
                <div className="ImageOverlay">
                    <div className="DataContainer"> 
                        <div className="PetData">
                            Name: 
                        </div>
                        <div className="PetData">
                            Age:
                        </div>
                        <div className="PetData">
                            Race:
                        </div>
                    </div>
                </div>
            </div>    
        </Col>
    )
}

export default AdoptImage