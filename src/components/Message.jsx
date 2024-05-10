import React, { Component } from 'react';

export class Message extends Component {
  state = {
    messages: [],
    newMessage: ''
  };

  handleMessageChange = (event) => {
    this.setState({ newMessage: event.target.value });
  };

  handleSendClick = () => {
    const { newMessage } = this.state;
    if (newMessage.trim() !== '') {
      this.setState((prevState) => ({
        messages: [...prevState.messages, newMessage],
        newMessage: ''
      }));
    }
  };

  render() {
    const { messages, newMessage } = this.state;
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-500 text-sm">Active now</p>
          </div>
        </div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? 'ml-auto' : ''
            } flex justify-end`}
          >
            <div
              className={`${
                index % 2 === 0 ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
              } p-4 rounded-lg mb-4`}
            >
              <p className={`${
                index % 2 === 0 ? 'text-gray-800' : 'text-gray-800'
              }`}>
                {message}
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <textarea
            className="w-full rounded-lg p-2"
            placeholder="Type your message..."
            value={newMessage}
            onChange={this.handleMessageChange}
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ml-2"
            onClick={this.handleSendClick}
          >
            Send
          </button>
        </div>
      </main>
    );
  }
}

export default Message;