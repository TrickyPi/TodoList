import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import About from './components/pages/About'
import Header from './components/layout/Header'
import TaggleTab from './components/layout/TaggleTab'
import LoginSign from './components/pages/LoginSign'
import axios from 'axios'
// import uuid from 'uuid'
import './App.css';

class App extends Component {
  state = {
    todos: [],
    hadSignUp: false
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>{
      this.setState({
        todos:res.data
      })
    }).catch(err => {

    })
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>{
    this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] })
    })
  }
  addTodos = (value) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title:value,
      completed:false,
    }).then(res=>{
      this.setState({ todos: [...this.state.todos, res.data] })
    })
  }
  changePage(loading){
    console.log('get change' +loading)
    if(loading){
      this.setState({
        hadSignUp:true
      })
    }
  }
  render() {
    if(!this.state.hadSignUp){
      return (
        <LoginSign changePage={this.changePage.bind(this)}></LoginSign>
      )
    }else {
      return (
        <Router>
          <div className="App">
            <Header></Header>
            <Route exact path='/' render={props=> (
              <React.Fragment>
                <AddTodo addTodos={this.addTodos} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )}>
            </Route>
            <Route path='/about' component={About}></Route>
            <TaggleTab></TaggleTab>
          </div>
        </Router>
      );
    }
  }
}

export default App;
