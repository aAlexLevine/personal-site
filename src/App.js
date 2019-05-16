import React from 'react';
import './App.css';
import Navigation from './Navigation.js'
import Container from 'react-bootstrap/Container';
import TitlePage from './TitlePage';
import AboutPage from './AboutPage.js';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage.js';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      prevScrollPos: 0,
      scrollingDown: false,
      navBarPastAboutPage: false
    }
    this.titlePageRef = React.createRef()
    this.aboutPageRef = React.createRef()
    this.workPageRef = React.createRef()
    this.contactPageRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    let currScrollPos = window.pageYOffset
    let scrollingDown
    let navBarPastAboutPage
    if (this.state.prevScrollPos > currScrollPos) {
      scrollingDown = false
    } else {
      scrollingDown = true
    }
    if (currScrollPos >= this.aboutPageRef.current.offsetTop) {
      navBarPastAboutPage = true
    } else {
      navBarPastAboutPage = false
    }

    this.setState({
      prevScrollPos: currScrollPos,
      scrollingDown: scrollingDown,
      navBarPastAboutPage: navBarPastAboutPage
    })
  }

  shouldComponentUpdate(newProps, newState) {
    return ((newState.scrollingDown !== this.state.scrollingDown) || (newState.navBarPastAboutPage !== this.state.navBarPastAboutPage));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  handleScrollTo = (pos) => {
    window.scrollTo(0, pos)
  }

  render() {
    console.log('render check')
  return (
    <div>
      <Container>
        <Navigation 
          scrollingDown={this.state.scrollingDown} 
          handleScrollTo={this.handleScrollTo}
          aboutPageRef={this.aboutPageRef}
          workPageRef={this.workPageRef}
          contactPageRef={this.contactPageRef}
          titlePageRef={this.titlePageRef}
          navBarPastAboutPage={this.state.navBarPastAboutPage}
        />
        <TitlePage 
          handleScrollTo={this.handleScrollTo} 
          ref={this.titlePageRef}
          aboutPageRef={this.aboutPageRef}
        />
        <AboutPage ref={this.aboutPageRef} />
        <ProjectsPage ref={this.workPageRef} />
        <ContactPage ref={this.contactPageRef} />

        <Row> 
          <Col style={{height: '160px', marginTop: '100px'}}>
            {/* <div style={{height:'500px'}}>
              dldlldl
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
}
export default App;
