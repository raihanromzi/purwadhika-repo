import { Component } from 'react'
import { Greeting } from './Greeting'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export default class LoginControl extends Component {

  constructor(props) {
    super(props)
    this.handleLoginClick.bind(this)
    this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false}
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button;
    if (!isLoggedIn) {
      button = <LoginButton onClick={this.handleLoginClick} />
    } else if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}