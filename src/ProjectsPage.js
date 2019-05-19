import React from 'react';
import './ProjectsPage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectMedia from './ProjectMedia.js';
import data from './ProjectData.js'



const ProjectsPage = React.forwardRef((props, ref) => (
  <Row>
    <Col ref={ref} xs={12} className="page-spacer"></Col>
    <Col xs={12} className="col-first" >
      <div className="question" data-aos="zoom-out-up" data-aos-duration='800'>What?</div>
      <div className="answer" data-aos="zoom-out-up" data-aos-delay="300" data-aos-duration='800'> Apps.</div>
      <div style={{height: '60px'}}></div>
    </Col>

    <ProjectMedia data={data.liftLog} color={'purple'}/>
    <Col xs={12} className="page-spacer"></Col>
    <ProjectMedia data={data.jaqen} color={'blue'}/>
    
  </Row>

));

export default ProjectsPage;