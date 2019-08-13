import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    getStyle = (completed) => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: completed ? 'line-through' : 'none'
        }
    }
    componentDidMount () {
        console.log('TodoItem mount')
    }
    componentWillUnmount(){
        console.log('TodoItem unmount')
    }
    render() {
        const { id, title, completed } = this.props.todo
        return (
            <div style={this.getStyle(completed)}>
                <div>
                    <input
                        type="checkbox"
                        style={{ margin: 0, verticalAlign: 'middle' }}
                        onChange={this.props.markComplete.bind(this, id)}
                        checked={completed?true:false} />{' '}
                    {title.slice(0, 37)}
                    <div onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</div>
                </div>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}
const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 5px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    width: '18px',
    height: '18px',
    marginTop: '-5px',
    lineHeight: '18px',
    textAlign: 'center'
}