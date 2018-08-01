import React from "react"

class MyMap extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cx: 0.5,
      cy: -1.1,
    }
    this.move = this.move.bind(this)
  }
  move(){
    if (this.state.cx === 1) {
      this.setState({
        cx: 0.5,
        cy: -1.1,
      })
    } else {
      this.setState({
        cx: 1,
        cy: 0.99,
      })
    }
  }
  render(){
    return (
      <div className="MyMap">
        <div className="map" onClick={() => this.move()}>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        <div className="content">
          <svg>
            <clipPath id="myPath" clipPathUnits="objectBoundingBox">
              <path d={`M 0 0 L 1 0 L 1 0.99 C 1 0.99, ${this.state.cx} ${this.state.cy}, 0 0.99 Z`} fill="thistle" />
            </clipPath>
            {/*<clipPath id="myPath2" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 1 0 L 1 0.99 C 1 0.99, 1 0.99, 0 0.99 Z" fill="thistle" />
              </clipPath>*/}
            </svg>
          </div>
        </div>
      )
    }
  }


  export default MyMap
