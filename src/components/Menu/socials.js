import React, { Component } from 'react';

class Socials extends Component {
  render() {
    const socials = {
      color: 'gray',
      listStyle: 'none',
      padding: '0px',
      display: 'flex',
      flexDirection: 'row'
    }
    const socialLink = {
      textDecoration: 'none',
      color: 'gray',
      cursor: 'pointer',
      fontSize: '30px',
      margin: '0px 10px'
    }
    return (
      <div>
        <ul style={socials}>
          <li><a className='fa fa-facebook' style={socialLink} href=""></a></li>     
          <li><a className='fa fa-linkedin' style={socialLink} href=""></a></li>
          <li><a className='fa fa-twitter' style={socialLink} href=""></a></li> 
          <li><a className='fa fa-github' style={socialLink} href=""></a></li> 
        </ul>
      </div>
    );
  }
}

export default Socials;
