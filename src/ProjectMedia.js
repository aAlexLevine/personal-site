import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Slider from 'react-slick';
import { CSSTransitionGroup } from 'react-transition-group';


class ProjectMedia extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [''],
      links: {
        github: '',
        site: ''
      },
      selected: 0,
      transition: false
    }
  }

  handleSelect = (index) => {
    this.setState({selected: index})
  }

  incrementImageIndex = () => {
    let index = this.state.selected + 1
    if (index > this.props.data.images.length - 1) {
      index = 0
    }
    this.setState({selected: index})
  }

  decrementImageIndex = () => {
    let index = this.state.selected - 1
    if (index < 0) {
      index = this.props.data.images.length - 1
    }
    this.setState({selected: index})
  }

  render() {
    return (
      <Col xs={12}>    
      <Container data-aos="zoom-in-up media-container">
        <Row>
          <Col xs={12} md={2} >
            <div className={`project-sideBar ${this.props.color}-background`}>
              <Container className="project-sideBar-innerContainer">
                <Row>
                  {this.props.data.links.site.length > 0
                    ? <Col xs={6} md={12}>
                        <div className="project-icon-container">
                          <a  className="projectMedia-link" href={this.props.data.links.site} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-desktop project-details-links" ></i>
                          </a>
                          <div className="project-icon-caption">site</div>
                        </div>
                      </Col>
                    : null
                  }
                  <Col xs={this.props.data.links.site > 0 ? 6 : 12} md={12}>
                    <div className="project-icon-container">
                      <a  className="projectMedia-link" href={this.props.data.links.github} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-code project-details-links" ></i>
                      </a>
                      <div className="project-icon-caption">code</div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>

          <Col xs={12} md={10} >
          <div className="leftArrowContainer" onClick={this.decrementImageIndex}>
            <i className={`fas fa-chevron-left leftArrow ${this.props.color}-color`}></i>
          </div>
          <div className="rightArrowContainer" onClick={this.incrementImageIndex}>
              <i className={`fas fa-chevron-right rightArrow ${this.props.color}-color`}></i>
            </div>
            <div className="image-container">
              
            <CSSTransitionGroup
              transitionName="carousel"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}>
              <Image  
                  fluid  
                  className="image"
                  key={this.props.data.images[this.state.selected]} 
                  src={this.props.data.images[this.state.selected]}
              /> 
            
            </CSSTransitionGroup>
        
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={0} md={2}>
            <div>{/* This creates an offset in order center the thumbnail dots */}</div>
          </Col>
          <Col xs={12} md={10}>
            <div className="thumbnail-container">
                    {this.props.data.images.map((pic, i) => (
                      <div 
                        className={
                          `thumbnail 
                          ${(this.state.selected === i && `thumbnail-selected ${this.props.color}-background`)}`
                        }
                        value={i} 
                        key={pic}
                        onClick={() => this.handleSelect(i)}>
                      </div>
                    ))}
              </div>
          </Col>
        </Row>
      </Container>

      <Col xs={12} className="project-description-column">  
        <div className="project-description-container">
          <div className={`project-description-title ${this.props.color}-underline`}>
            {this.props.data.title}
          </div>
          <div className="project-description-body">
            {this.props.data.description}
            <br/>
            {this.props.data.stack}
          </div>
        </div>
      </Col>
    </Col>
    )
  }
}

export default ProjectMedia;