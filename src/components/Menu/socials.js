import React, { Component } from 'react';

class Socials extends Component {
  render() {
    const socials = {
      color: 'gray',
      listStyle: 'none'
    }
    const socialLink = {
      textDecoration: 'none',
      color: 'gray',
      cursor: 'pointer'
    }
    return (
      <div>
        <ul style={socials}>
          <li><a style={socialLink} href="">Facebook</a></li>     
          <li><a style={socialLink} href="">LinkedIn</a></li> 
          <li><a style={socialLink} href="">GitHub</a></li> 
        </ul>
      </div>
    );
  }
}

export default Socials;
