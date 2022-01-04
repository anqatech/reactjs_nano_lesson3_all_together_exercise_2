import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ChatWindow from './ChatWindow'
import { v4 as uuidv4 } from 'uuid'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  onMessage = (newMessage) => {
    this.setState({
      messages: [...this.state.messages, newMessage]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow
              key={ uuidv4() }
              user={ user.username }
              messages={ this.state.messages }
              onMessage={ this.onMessage }
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;
