import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Counter extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return (
      <div>
        <h2>Testing redux</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span test-id="count-value">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ count: state.count }))(Counter)
