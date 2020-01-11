import React from 'react';
class Map extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image;
        ctx.drawImage(img, 10, 10);
        img.onload = () => {
            ctx.drawImage(img, 0, 0)
            ctx.font = "40px Courier"
            ctx.fillText("TEST", 210, 75)
          }
        }
    render(){
        return (
            <div className="int-map">
                <canvas ref="canvas" width="450px" height="850px"></canvas>
                <img ref="image" src="../../public/floor1.png" className="hidden" alt="floor1"/>
            </div>
        )
    }
}

export default Map;