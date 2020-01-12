import React from 'react';
import Floor_1 from './floor1.png';
import hotel from './hotel.svg'
class Map extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image;
        ctx.drawImage(img, 10, 10);
        img.onload = () => {
            ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
                0, 0, canvas.width, canvas.height)
          }
        }
    render(){
        return (
            <div className="int-map">
                <canvas ref="canvas" width="1100px" height="700px"></canvas>
                <img ref="image" src={Floor_1} className="hidden" alt="floor1"/>
            </div>
        )
    }
}

export default Map;