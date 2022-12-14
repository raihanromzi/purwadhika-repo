import { Component } from 'react'

export default class Clock extends Component {
  // Constructor for Local State
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  // Lifecycle Methods
  // Runs after the component output has been rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      ()=>this.tick(), 1000
    )
  }

  componentWillMount() {
    clearInterval(this.timerID)
  }

  // Use Public Class Field Syntax
  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <section>
        <h1>This is Clock</h1>
        <h2>{this.state.date.toLocaleString()}</h2>
      </section>
    )
  }
}