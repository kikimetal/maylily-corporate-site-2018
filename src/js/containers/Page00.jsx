import React from "react"
import { connect } from "react-redux"

// containers
import ConnectedLink from "./ConnectedLink"
import News from "./News"
import Footer from "./Footer"

// components
import CvlHand from "../components/CvlHand"
import Btn from "../components/Btn"
import LazyLoadImg from "../components/LazyLoadImg"


class Page00 extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="Page00 page">

        {/*<CvlHand />*/}

        <h1 className="page-title">{this.props.routes.page00.heading}</h1>

        <News />

        <Footer />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  routes: state.routes,
})

export default connect(mapStateToProps)(Page00)
