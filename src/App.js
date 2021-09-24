import './App.css';
import { Col, Container, Navbar, Row } from 'reactstrap';
import React, { useState } from 'react';
import { Hexagon, ResponsiveHoneycomb } from 'react-honeycomb'
import AdoptImage from './components/AdoptImage'
import AdoptNavbar from './components/AdoptNavbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "./fontello/css/fontello.css";

function App() {
  const [pageSelected, setPageSelected] = useState(1);

  let facts = ['All dogs in England, Wales and Scotland from 8 weeks of age must be microchipped and the keeper’s details registered on an approved database', 'Any dog in a public place must wear a collar and tag with the name and address of the owner engraved on it. It is also advisable to add your telephone number – a mobile number is best as you may well be out looking for your dog if he is lost. This law applies even if your dog is microchipped', 'Over 50% of dogs are stolen from gardens. Make sure your garden is secure and no-one can enter without your knowledge. Don’t leave your dog unsupervised in the garden, keep an eye on him at all times – it only takes seconds to lift a dog over the fence', '19% of dogs are taken from breaking into homes. If your dog is left at home, make sure your home security is good. Be aware if anyone has been watching your house and your movements', '6% of stolen dogs are taken from owners out walking their dogs. Vary the times you walk and the routes you take and beware of strangers asking you questions about your dog or trying to play him or her. Also, teach your dog to come back to you when called (recall training). Dogs running off can become vulnerable to thieves', '7% of dog thefts are dogs that have been tied up outside shops or other premises. They are an easy target for any opportunist thief', 'Dogs left in locked cars are also an easy target even if you leave the car for just a few minutes and 5% of all stolen dogs are taken from vehicles. Neutering your dog will reduce the risk of a dog being stolen for breeding purposes', 'Ensure your dog wears a collar and tag at all times, even in the house. This is a legal requirement in public places. Do not put your dog’s name on the tag because a friendly dog could easily be enticed away if its name is called', 'Choose a dog walker, dog sitter or boarding kennels carefully. Ideally take recommendations from people you trust and do ask for and check any references. 50% of dogs stolen are puppies or young adults. Be extra vigilant if you have a pregnant bitch or a litter of puppies. Be especially careful if you have advertised the puppies for sale, thieves will stop at nothing to steal a whole litter to sell']

  let minPage = () => {
    if(pageSelected == 0)
    { 
      setPageSelected(2)
    }
    else
    { 
      setPageSelected(pageSelected - 1);
    }
  }

  let maxPage = () => {
    if(pageSelected == 2)
    { 
      setPageSelected(0)
    }
    else
    { 
      setPageSelected(pageSelected + 1);
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <Container fluid={true}>
      <AdoptNavbar/>
      <Row noGutters>

        <Col xs={12} className="Topground">
          <div className="TopImageContainer">
            <img
              src={`https://cdn.wallpapersafari.com/96/81/ojV1dH.jpg`}
              alt={`Random #${3}`}
              className="TopImage"
            />
            <div className="TopImageOverlay">
              <div className="NecessaryBullshitQuote" style={{marginLeft: '-1vw'}}>
                <div className="NecessaryBullshitQuoteText">
                  Give me heart
                </div>
              </div>

              <div className="NecessaryBullshitQuote" style={{marginTop: '2vw', marginLeft: '2vw'}}>
                <div className="NecessaryBullshitQuoteText">
                  Give me home
                </div>
              </div>
            </div>
          </div>

          <Col xs={12} className="ChooseAdopt Section">
              <Row style={{width: '100%'}}>
                <Col xs={2} className="">
                  <i className="icon-left-circle ChooseArrows" onClick={minPage} style={{fontSize: '80px', float: 'left'}}/>
                </Col>
                
                <Col xs={8} className="">
                  <div className="Title" style={{textAlign: 'center', marginTop: '40px'}}>                 
                      Our Pupils
                  </div>
                </Col>

                <Col xs={2} className="">
                  <i className="icon-right-circle ChooseArrows" onClick={maxPage} style={{fontSize: '80px', float: 'right'}}/>   
                </Col>
              </Row>

                <Row className="PetRow">
                  <AdoptImage index={pageSelected * 3 + 1}/>
                  <AdoptImage index={pageSelected * 3 + 2}/>
                  <AdoptImage index={pageSelected * 3 + 3}/>
                </Row>
          </Col>

          <Col xs={12} className="Section">
            <div className="ContentContainer">
              <div className="Title">
                <i className="icon-thumbs-up" style={{fontSize: '40px', float: 'left', color: 'rgb(163, 0, 163)'}}/>
                How to be a hero!
              </div>
              <div className="Content">
              Volunteer
              Adopt Me is an organisation that is supported and enhanced by the efforts of our dedicated volunteers. From animal welfare roles to office duties and events, we strive to ensure that our volunteers are involved in all aspects of our work.
              Sponsor an animal
              Sponsor an animal from as little as £2 a month or make a one-off donation to help more animals
              Donate old or unwanted items for the animals to enjoy
              Many of your old and unwanted items can create a wonderful gift for a homeless animal. Every year, each of our centres get through hundreds of the following items:
              Blankets,
              Towels,
              Bed Sheets,
              Newspapers,
              Dog food and treats,
              Animal Toys.
              If you’d like to donate any of the above items to your local centre, the animals will greatly appreciate your support.
              </div>
            </div>
          </Col>

          <Row noGutters>
            <Col xs={12} className="Section">
              <div className="ContentContainer">
                <div className="Title">
                  <i className="icon-user" style={{fontSize: '40px', float: 'left', color: 'rgb(163, 0, 163)'}}/>
                  Who Are We?
                </div>
                <div className="Content">
                Our mission is to bring about the day when all dogs can enjoy a happy life, free from the threat of unnecessary destruction. Our teams work together to create an individual plan for every dog – from medical treatment to behaviour training. And when the pet is ready, we find them a loving home where they can live a happy, fulfilling life.
                </div>
              </div>
            </Col>

            <Col xs={12} className="Section">
              <div className="ContentContainer">
                <div className="Title">
                  <i className="icon-lightbulb" style={{fontSize: '40px', float: 'left', color: 'rgb(163, 0, 163)'}}/>
                  Did You Know?
                </div>
                <div className="Content">
                  { facts[getRandomInt(0, facts.length)] }
                </div>
              </div>
            </Col>

            <Col xs={12} className="Footer Section">
              <div className="ContactContent">
                <div className="ContactMethod">
                  <div className="ContactText">
                    Call Us: +123 456 789 
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
        {
        
}
      </Row>
    </Container>
  );
}

export default App;
