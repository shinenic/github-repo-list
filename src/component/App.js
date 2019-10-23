import React, { Component } from 'react'
import * as actions from '../action'
import { connect } from 'react-redux'
import List from './List'

class App extends Component {
  componentDidMount() {
    this.props.getDataFromGithub()
  }
  render() {
    return (
      <List />
    )
  }
}

export default connect(null, actions)(App)