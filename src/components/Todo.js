import { Component } from 'react';

class Todo extends Component {
  deleteHandler = () => {
    this.props.setTodos(this.props.todos.filter(e => e.id !== this.props.todo.id));
  }

  completeHandler = () => {
    var temp = this.props.todos.map(item => {
      if (item.id === this.props.todo.id) {
        return {
          ...item, completed: !item.completed
        }
      } else return item;
    });
    this.props.setTodos(temp)
  }

  render() {
    const {todo} = this.props;
    var btnclass = (todo.completed) ? 'fas' :'far';

    return (
      <div className="todo">
        <li className={`todo-item ${todo.completed?"completed":''}`}>
          {todo.text}
        </li>
        <button className="complete-btn" onClick={this.completeHandler}><i className={`${btnclass} fa-check-square`}></i></button>
        <button className="trash-btn" onClick={this.deleteHandler}><i className="fas fa-trash"></i></button>
      </div>
    );
  }
}
 
export default Todo;