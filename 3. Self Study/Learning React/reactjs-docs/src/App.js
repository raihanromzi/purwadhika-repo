import './App.css';
import React from 'react'
import Welcome from './components/Welcome'

const formatName = (user) => {
  return user.fullName
}

const user1 = {
  fullName: 'Raihan Romzi R',
}

// Converted into React.createElement()
const NewElement = (
  <div>
    <h1>Hello, {formatName(user1)}!</h1>
    <br/>
    <a href="https://www.reactjs.org">React JS Docs</a>
    <br/>
    <img src="https://assets.rebelmouse.io/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjA3NTU1Mi9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcxOTM2NDkyM30.SkMJEs9Ou_zzGuVyQdzMCdPVjHvrdaJcpGE8_UlBTEQ/img.jpg?width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C0" alt="MCR"/>
  </div>
)
const fullNameIsValid = (user) => {
  return user.fullName
}

function App() {
  if (fullNameIsValid(user1)) {
    return (
      <div>
        {NewElement}
        <Welcome name="Ronaldo"/>
        <Welcome name="Messi"/>
      </div>
    )
  } else {
    return (
      <div className="app">
        <h1>Hello, Stranger</h1>
      </div>
    )
  }
}

export default App;
