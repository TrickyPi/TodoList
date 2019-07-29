import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class AddTodo extends Component {
    state = {
        title: ''
    }
    addValue = (e) => {
        this.setState({ title: e.target.value })
    }
    render() {
        return (
            <div className='headCon' style={stylehead}>
                <input
                    type="text"
                    style={enterIn}
                    onChange={this.addValue}
                    placeholder='Add Todo ...' />
                <span className="add" style={add} onClick={this.props.addTodos.bind(this, this.state.title)}>add</span>
            </div>
        )
    }
}

AddTodo.propTypes = {
    addTodos:PropTypes.func.isRequired
}

const stylehead = {
    lineHeight: '30px',
    display: 'flex',
    padding: '10px 15px',
    justifyContent: 'center'
}
const enterIn = {
    flex: '1 1 auto',
    border: '1px solid #333',
    padding: '0px 0px 0px 10px'
}
const add = {
    flex: '0 0 auto',
    color: '#fff',
    padding: '0px 10px',
    backgroundColor: '#333',
}
