import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends React.Component {
  //static propTypes = {
  //  children: React.PropTypes.node
  //}

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: false
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Index)
