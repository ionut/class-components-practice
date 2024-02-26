import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 5,
    }

    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleDecrement() {
    this.setState(prev => ({
      count: prev.count - 1
    }
    ))
  }
  handleIncrement() {
    this.setState(prev => ({
      count: prev.count + 1
    }
    ))
  }

  render() {
    return (
      <>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </>
    )
  }
}
