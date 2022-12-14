import { Component } from 'react'

export default class Form extends Component {
  // Adding Props
  constructor(props) {
    super(props)
    // Initialize State
    this.state = {isToggleOn: true}

    // Bind -> handleClick can access 'this'
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // if not bind, handleClick cannot access this keyword
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <section>
        <label htmlFor="name">Bimo Bangsat?</label>
        <button id="name" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Y' : 'Y BGT'}
        </button>
      </section>

  )
  }
}