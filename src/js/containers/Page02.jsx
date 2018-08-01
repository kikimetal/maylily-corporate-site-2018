import React from "react"
import { connect } from "react-redux"

// containers
import Footer from "./Footer"
import MyMap from "./MyMap"

const Page02 = props => (
  <div className="Page02 page">
    <MyMap />
    <h1 className="page-title">{props.routes.page02.heading}</h1>
    <h1 className="page-title">{props.routes.page02.heading}</h1>
    <h1 className="page-title">{props.routes.page02.heading}</h1>
    <Footer />
  </div>
)

const mapStateToProps = state => ({
  routes: state.routes,
  service: state.service,
})

export default connect(mapStateToProps)(Page02)
