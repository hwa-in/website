import React, { Fragment } from 'react';
import SineWaves from 'sine-waves';

class Waves extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sineWaves: {}
    }
  }
  componentDidMount() {
    this.createWaves();
  }

  createWaves() {
    this.setState({
      sineWaves: new SineWaves({
        // Canvas Element
        el: document.getElementById('waves'),
        // General speed of entire wave system
        speed: 10,
        // How many degress should we rotate all of the waves
        rotate: 0,
        // Ease function from left to right
        ease: "SineInOut",
        wavesWidth: "100%",
        waves: [{
            timeModifier: .1,
            lineWidth: 1,
            amplitude: 90,
            wavelength: 600
        }, {
            timeModifier: .1,
            lineWidth: 1,
            amplitude: 100,
            wavelength: 605
        }, {
            timeModifier: .1,
            lineWidth: 1,
            amplitude: 110,
            wavelength: 610
        }, {
            timeModifier: .1,
            lineWidth: 1,
            amplitude: 120,
            wavelength: 615
        }, {
            timeModifier: .1,
            lineWidth: 1,
            amplitude: 130,
            wavelength: 620
        }, {
            timeModifier: .1,
            lineWidth: 1,
            amplitude: 140,
            wavelength: 625
        }, {
            timeModifier: .1,
            lineWidth: 1,
            amplitude: 150,
            wavelength: 630
        }, {
            timeModifier: .1,
            lineWidth: 1,
            amplitude: 160,
            wavelength: 635
        }],
        // Perform any additional initializations here
        initialize: function (){},
        // This function is called whenver the window is resized
        resizeEvent: function() {
          // Here is an example on how to create a gradient stroke
          var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          gradient.addColorStop(0,"rgba(0, 0, 0, 0)");
          gradient.addColorStop(0.5,"rgba(128,204,174, 0.5)");
          gradient.addColorStop(1,"rgba(0, 0, 0, 0)");
      
          var index = -1;
          var length = this.waves.length;
            while(++index < length){
            this.waves[index].strokeStyle = gradient;
          }
        }
      })
    })
  }

  render() {
    return (
      <Fragment>
        <canvas id={'waves'} style={{ width: '100%' }} />
      </Fragment>
    )
  }
};

export default Waves;