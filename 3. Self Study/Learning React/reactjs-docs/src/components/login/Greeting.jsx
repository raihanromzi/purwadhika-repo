import { GuestGreeting } from './GuestGreeting'
import { UserGreeting } from './UserGreeting'

export const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return (<UserGreeting/>)
  } else {
    return (<GuestGreeting/>)
  }
}