import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div style={buttonStyle} onClick={this.props.popclick.bind(this)}>
                {this.props.text}
            </div>
        )
    }
}

const buttonStyle ={
    lineHeight:'40px',
    wdith:'60%',
    fontSize:'20px',
    color:'#fff',
    backgroundColor:'blue',
    textAlign:'center',
    borderRadius:'3px'
}