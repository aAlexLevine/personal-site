import React from 'react';
import './ContactPage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Clipboard from 'clipboard';

class ContactPage extends React.Component {

  componentDidMount() {
    this.clipboard = new Clipboard('.btn')
    this.clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
  
      e.clearSelection();
  });
  
    this.clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
  });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
}

  render() {
    return (
      <Row>
        <Col ref={this.props.innerRef} xs={12} className="page-spacer"></Col>
        <Col xs={12} >
        
          <Container >
            <Row>
              <Col xs={12} className="col-first">
              <div className="question" data-aos="zoom-out-up" data-aos-duration='800'>Where?</div>
              <div className="answer" data-aos="zoom-out-up" data-aos-delay="300" data-aos-duration='800'> Email.</div>
              </Col>
            </Row>        
            
            <div style={{height: '12vmin'}}></div>

            <Row>
              <Col xs={12}>
                <div className="email-container btn" data-clipboard-text="aAlexLevine@gmail.com" data-aos="zoom-out-up" data-aos-delay="300">
                  <div className="email-text">
                  <i className="fas fa-clipboard-list clipboard"></i>
                    aAlexLevine@gmail.com
                  </div>
                  <div className="clip-caption">- Click to copy! -</div>
                </div>
                <div className="email-note-container">
                <div className="email-note">
                  Please feel free to reach out!
                </div>
              </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    )
  }
};

export default React.forwardRef((props, ref) => (<ContactPage innerRef={ref}/>));
