import { Component } from 'react'

export class Reservation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isGoing: true
    }
  }

  handleInputChange(event) {
    const {target} = event.target
  }

  render() {
    return (
      <form>
        <label>Is Going:
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={}/>
        </label>
      </form>
    )
  }
}