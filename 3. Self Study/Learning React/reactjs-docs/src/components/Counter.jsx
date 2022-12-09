import { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  componentDidMount() {
    this.count = setInterval(
      () => {
        this.counter()
      }, 1000)
  }

  componentWillMount() {
    clearInterval(this.count)
  }

  counter() {
    this.setState((state, props) => ({
      count: props.increment + state.count
    }))
  }

  render() {
    return (
      <section>
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
      </section>

    )
  }
}