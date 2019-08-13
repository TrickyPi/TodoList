import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class TabeItem extends Component {
    changeTab(judge){
        if(judge){
            return {
                flex: '1 1 auto',
                justifyContent: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                color:'#fff',
                lineHeight:'40px',
                borderTop:'1px solid #aaa',
                backgroundColor:'#333'
            }
        }else{
            return itemStyle
        }
    }
    render() {
        return (
            <Link
                rel="stylesheet"
                style={this.changeTab(this.props.tabeItem.active)}
                to={this.props.tabeItem.route}
                onClick={this.props.changeTab.bind(this, this.props.tabeItem.id)}>
                {this.props.tabeItem.name}
            </Link>
        )
    }
}
const itemStyle = {
    flex: '1 1 auto',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    color:'#333',
    lineHeight:'40px',
    borderTop:'1px solid #aaa',
    cursor:'pointer'
}