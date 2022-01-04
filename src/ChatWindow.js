import React, { Component } from 'react'


class ChatWindow extends Component {
    state = {
        message: ''
    }

    handleChange = event => {
        this.setState({ message: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const newMessage = {
            username: this.props.user,
            text: this.state.message
        }
        this.props.onMessage(newMessage)
        this.setState({ message: '' })
    }

    isDisabled = () => {
        return this.state.message === ''
    }

    render() {
        const { user, messages } = this.props

        return (
            <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{ user }</div>
                <ul className="message-list">
                {messages.map((message, index) => (
                    <li
                    key={ index }
                    className={
                        message.username === user ? 'message sender' : 'message recipient'
                    }
                    >
                    <p>{`${message.username}: ${message.text}`}</p>
                    </li>
                ))}
                </ul>
            <div>
            <form className="input-group" onSubmit={ this.handleSubmit }>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your message..." 
                    value={ this.state.message }
                    onChange={ this.handleChange }
                />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={ this.isDisabled() }>
                    SEND
                  </button>
                </div>
            </form>
            </div>
          </div>
        )
    }
}

export default ChatWindow
