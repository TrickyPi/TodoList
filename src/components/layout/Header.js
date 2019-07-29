import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header style={titleStyle}>
            <h1 style={{margin:'0px'}}>TodoList</h1>
            <Link rel="stylesheet" to="/" style={linkStyle}>Home</Link> | 
            <Link rel="stylesheet" to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

const titleStyle = {
    padding:'10px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
}

const linkStyle = {
    color:'#fff',
    textDecoration:'none'
}
export default Header