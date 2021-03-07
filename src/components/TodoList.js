import { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'
class TodoList extends Component {
  render() { 
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {
            (this.props.todos) ?this.props.todos.map(todo => 
              <Todo key={todo.id} todo={todo} />
            ) : ''
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.filteredList
  }
}

export default connect(mapStateToProps)(TodoList);