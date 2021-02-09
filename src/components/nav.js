import React, { Component } from 'react';
import '../styles/nav.css';

class NavBar extends Component {
    render() {
        return (
            <header className='header'>
                <h1> <span>📌</span>Mr. Banner<span>📌</span></h1>
            </header>
        )
    }
}
export default NavBar;