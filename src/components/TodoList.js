import { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  /*static getDerivedStateFromProps(props, state) {
    return {
      todos: props.todos
    }
  }*/
  render() { 
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {
            this.props.filteredList.map(todo => 
              <Todo key={todo.id} todo={todo} setTodos={this.props.setTodos} todos={this.props.todos} />
            )
          }
        </ul>
      </div>
    );
  }
}


export default TodoList;