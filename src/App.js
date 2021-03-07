import { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "NONE",
      filteredList: []
    }
  }
  componentDidMount() {
    this.setState({
      todos: ls.get('todos') || [],
      filteredList: ls.get('todos') || []
    })
  }

  setInputText = (text) => {
    this.setState({
      inputText: text
    })
  }

  setTodos = (todos) => {
    this.setState({
      todos: todos
    }, () => {
      this.setFilter(this.state.filter)
      ls.set('todos', this.state.todos)
    })
  }

  setFilter = (FILTER) => {
    this.setState({
      filter: FILTER
    }, 
    () => {
      var tempList = []
      switch (this.state.filter) {
        case "COMPLETED":
          tempList = this.state.todos.filter(todo => todo.completed)
          break
        case "INCOMPLETE":
          tempList = this.state.todos.filter(todo => !todo.completed)
          break
        default:
          tempList = [...this.state.todos]
      }
      this.setState({
        filteredList: tempList
      })
    })
    
  }

  addTodoHandler = (todo) => {
    if (this.state.inputText!=="") {
      this.setTodos(
        [...this.state.todos, todo])
      }
  }*/

  render() { 
    return (
      <div className="App">
        <div className="header">
          <h1>TaskIt</h1>
          <Form />
          <Filter />
        </div>
        <TodoList />
      </div>
    );
  }
}
 
export default App;