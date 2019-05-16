import React from 'react';
import './Navigation.css'

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hide: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let hide
    if ((prevProps.scrollingDown !== this.props.scrollingDown) ||
      (prevProps.navBarPastAboutPage !== this.props.navBarPastAboutPage)) {
      if (this.props.navBarPastAboutPage) {
        hide = this.props.scrollingDown
      } else {
        hide = false
      }
      this.setState({
        hide: hide
      })
    }
  }

  render() {
    return (  
      <div className={`nav-container ${(this.state.hide && 'nav-container-hide')}`}>
        
          <div className="nav-title"
            onClick={()=>(
              // TitlePageRef is available, but scrolling to 0 is the  desired effect.
              this.props.handleScrollTo(0)
            )}>
              Home
          </div>
          
          <div className="nav-title"
            onClick={()=>(
              this.props.handleScrollTo(this.props.aboutPageRef.current.offsetTop)
            )}>
              About
          </div>

          <div className="nav-title"
            onClick={()=>(
              this.props.handleScrollTo(this.props.workPageRef.current.offsetTop)
            )}>
              Work
          </div> 

          <div className="nav-title"
            onClick={()=>(
              this.props.handleScrollTo(this.props.contactPageRef.current.offsetTop)
            )}>
              Contact
          </div>
     
      </div>
    )
  }
}

export default Navigation;