import { Component } from 'react';
import { toggleTodo, deleteTodo } from '../redux/actions/actions'
import { connect } from 'react-redux'
class Todo extends Component {
  deleteHandler = () => {
    this.props.deleteTodo(this.props.todo.id)
  }

  completeHandler = () => {
    this.props.toggleTodo(this.props.todo.id)
  }

  render() {
    const {todo} = this.props;
    var btnclass = (todo.completed) ? 'fas' :'far';

    return (
      <div className={`todo ${todo.completed?"completed":''}`}>
        <li className="todo-item">
          {todo.text}
        </li>
        <div className="actions">
          <button className="complete-btn" onClick={this.completeHandler}><i className={`${btnclass} fa-check-square`}></i></button>
          <button className="trash-btn" onClick={this.deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
  }
}
 
export default connect(null, mapDispatchToProps)(Todo);