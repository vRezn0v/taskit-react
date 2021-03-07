import {Component} from 'react';
import { addTodo } from '../redux/actions/actions'
import { connect } from 'react-redux'
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  updateInput = input => {
    this.setState({input: input})
  }

  submitHandler = e => {
    e.preventDefault();
    if (this.state.input!==""){
      this.props.addTodo(this.state.input);
      this.setState({input: ""})
    }
  }

  render() { 
    return (
      <form>
        <input onChange={e=>this.updateInput(e.target.value)} type="text" className="todo-input" value={this.state.input} placeholder="Add a task..." />
        <button className="todo-button" type="submit" onClick={this.submitHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}

 
export default connect(null, mapDispatchToProps)(Form);