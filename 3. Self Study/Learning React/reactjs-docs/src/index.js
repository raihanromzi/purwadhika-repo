import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
// import App from './App';
// import Clock from './components/Clock'
// import Counter from './components/Counter'
// import Form from './components/Form'
// import ListNumbers from './components/ListNumbers'
import NameForm from './components/show-name/NameForm'
// import LoginControl from './components/login/LoginControl'

// Pass the DOM Element then Pass the React DOM element to root.render()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<NameForm/>)

// Calling root render every "time change" -> second
// React DOM compares the element and it's children to previous one, and only apply the DOM update when need
// setInterval(tick, 1000)

