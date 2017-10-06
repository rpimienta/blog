import React, { Component } from 'react';

class MainContent extends Component {
  render() {
    const mainContentStyles = {
      backgroundColor: 'white',
      color: 'black',
      width: '80%',
      padding: '40px'
    }
    return (
      <div style={mainContentStyles}>
        This is the Main Content
      </div>
    );
  }
}

export default MainContent;
