import React from 'react';
import './MemeExplosion.css'

class MemeExplosion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false
    }
  }
  render() {
    return (
      <div>
        {this.props.show
         ? <img src="https://i.imgflip.com/ohrrn.jpg" className="rotate zoom"/>
         : null 
        }
      </div>
    )
  }
}

export default MemeExplosion;