import { Component } from 'react'

export default class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '', submittedValue: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    this.setState({
      submittedValue: this.state.value
    })
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="input-name">
              <input onChange={this.handleChange} type="text" value={this.state.value}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </article>
        <article>
          <h2>{this.state.submittedValue}</h2>
        </article>
      </section>
    )
  }
}