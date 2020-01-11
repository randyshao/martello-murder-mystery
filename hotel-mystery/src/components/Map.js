import React from 'react';
import Floor1 from './floor1.png';

class Map extends React.Component {
    componentDidMount() {
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      const img = this.refs.image
      img.onload = () => {
        ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
            0, 0, canvas.width, canvas.height)
        ctx.font = "40px Courier"
      }
    }
    render() {
      return(
        <div>
          <canvas ref="canvas" width="1100px" height="700px" />
          <img ref="image" src={Floor1} className="hidden" />
        </div>
      )
    }
  }

export default Map;