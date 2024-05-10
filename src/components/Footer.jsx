import React, { Component } from 'react';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <footer className="flex-shrink-0">
        <div
          className="bg-gradient-to-r from-purple-600 to-indigo-900 text-white py-4 flex-grow"
          style={{ backgroundColor: '#4B5572' }}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p>&copy; Valve Corporation</p>
            <p>{this.state.currentTime}</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;