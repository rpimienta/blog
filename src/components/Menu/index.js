import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const menuStyles = {
      backgroundColor: 'black',
      color: 'white',
      width: '20%',
      padding: '20px'
    }
    const topSection = {
      marginTop: '20px',
      subtitle:{
        color: 'gray'
      }
    }
    const categories = {
      marginTop: '15%',
      list: {
        color: 'white',
        listStyle:'none',
        webkitPaddingStart:'0px',
        listItem: {
          marginBottom: '3%'
        }
      }
    }
    const socials = {
      color: 'gray'
    }
    return (
      <div style={menuStyles}>
        <div style={topSection}>
          <h2>OLEG KUNTAR</h2>
          <h4 style={topSection.subtitle}>stuff, stuff and travel</h4>
        </div>
        <div style={categories}>
          <ul style={categories.list}>
            <li style={categories.list.listItem}><h3>STUFF</h3></li>
            <li style={categories.list.listItem}><h3>MORE STUFF</h3></li>
            <li style={categories.list.listItem}><h3>TRAVEL</h3></li>
            <li style={categories.list.listItem}><h3>ABOUT ME</h3></li>
          </ul>
        </div>
        <div style={socials}></div>
      </div>
    );
  }
}

export default Menu;
