import React from 'react';
import './AboutPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutPage = React.forwardRef((props, ref) => (
  <Row>
    <Col ref={ref} xs={12} className="page-spacer"></Col>
    <Col xs={12} >
    
      <Container >

        <Row>
          <Col xs={12} className="col-first">
          <div className="question" data-aos="zoom-out-up" data-aos-duration='800'>Who?</div>
          <div className="answer" data-aos="zoom-out-up" data-aos-delay="300" data-aos-duration='800'> Me.</div>
          </Col>
        </Row>        
        
        <div style={{height: '8vmin'}}></div>

        <Row >
          <Col  md={6} xs={12}>
            <div className="paper-container" data-aos="fade-left" data-aos-delay="300">
              <p className="paper-text">
                I build web apps, solve technical problems, and do internet things.
                In a perfect world this section would be filled with pictures of dogs and bad memes.
              </p>
            </div> 
          </Col>

          <Col xs={12} md={6}>
            <div className="notFoundContainer" data-aos="fade-left" data-aos-delay="300">
              <div className="notFound-image-container">
                <i className="fas fa-file-image notFound-image"></i>

              </div>
        
              <p className="notFoundText">
                Not Found
                <br/>
                Image: On-The-Internet-No-One-Knows-Your-A-Dog.jpg, 
                <br/>
                Reason: Don't put memes in your portfolio...
              </p> 
            </div>
          </Col>

 
           <Col xs={12} md={6} data-aos="fade-right" data-aos-delay="300">
             <div className="notFoundContainer">
             <div className="notFound-image-container">
                <i className="fas fa-file-image notFound-image"></i>
              
              </div>
               <p className="notFoundText">    
                 Not Found
                 <br/>
                 Image: Birb-Meets-Doggo.jpg, 
                 <br/>
                 Reason: It breaks the delicate aesthetic
               </p> 
              </div>
           </Col>

          <Col  md={6} xs={12} data-aos="fade-right" data-aos-delay="300">
            <div className="paper-container">
              <p className="paper-text">
                I develop mostly inside the JavaScript ecosystem
                working across Node, React, Express 
                and SQL/NoSQL technologies, but I'm always excited to try out new tech.
              </p>
            </div> 
          </Col>

        </Row>
      
        </Container>
      </Col>
  </Row>
));

export default AboutPage;