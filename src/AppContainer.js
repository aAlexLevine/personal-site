import React from 'react';
import App from './App.js'
import 'aos/dist/aos.css';
import AOS from 'aos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 
class AppContainer extends React.Component {

  componentDidMount() {
    AOS.init({
      // duration : 2000
    })
  }

  render() {
    return (
        <App />
    )
  }
}

export default AppContainer;