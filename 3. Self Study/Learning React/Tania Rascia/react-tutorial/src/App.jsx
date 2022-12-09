import { Component } from 'react'
import Form from './Form'
import Table from './Table'

export default class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspiring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  removeCharacter = (index) => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  render() {
    const { characters } = this.state
    return (
      <div className="container">
        {/*Props -> character Data -> Passing characters*/}
        {/*<Table characterData={characters}/>*/}
        <Table characterData={characters} removeCharacter={this.removeCharacter}></Table>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
