import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>PUNCH IN APP</h1>
            <Link style={linkStyle} to='/'>ALL PROJECTS</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0px 5px'
}