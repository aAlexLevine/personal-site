import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TitlePage.css';

const TitlePage = React.forwardRef((props, ref) => (
  <div>
      <Row>
        <Col ref={ref} xs={12} className="fullPage-container firstPage">
              <div className="titleContainer">
                <div className="name">Alex Levine</div> 
                <div className="subtitle">Software Engineer. Human Person.</div>
                <div className="icons-container">
                  <a className="titlePage-link" href="https://github.com/aAlexLevine" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github icon-social"></i>
                  </a>
                  <a className="titlePage-link" href="https://linkedin.com/in/alex-levine-84179b152" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin icon-social"></i>
                  </a>
                  <a className="titlePage-link" href="https://twitter.com/aalexlevine" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter icon-social"></i>
                  </a>
                </div>
              </div> 
              
              <div className="customArrow-container" 
                onClick={() => 
                  (props.handleScrollTo(props.aboutPageRef.current.offsetTop))
                }>
                <div className="customArrow"></div>
              </div>
        </Col>
      </Row>
  </div>
));

export default TitlePage;
