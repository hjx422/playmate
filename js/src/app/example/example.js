import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Example extends Component {

  render() {
    return (
      <div onClick={this.props.gotoE2}>
        Example
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
    gotoE2: () => dispatch(i18.switchLanguage()),
    getExamples: () => dispatch(example.getExamples())
  }
}

function mergeProps(x, y, props) {
  return Object.assign({}, x, y, {
    gotoE2: () => props.history.push('/e2')
  })
}


export default withRouter(
  connect(
    mapStateToProps, mapDispatchToProps, mergeProps
  )(Example)
)

