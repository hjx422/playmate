import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Example2 extends Component {

  render() {
    return (
      <div onClick={this.props.gotoE}>
        Example2
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

function mergeProps(x, y, props) {
  return Object.assign({}, x, y, {
    gotoE: () => props.history.push('/')
  })
}

export default withRouter(
  connect(
    mapStateToProps, mapDispatchToProps, mergeProps
  )(Example2)
)