import {Component} from 'react';

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
      var newTask = {
        text: this.state.input,
        completed: false,
        id: Math.random()*1000
      }
      this.props.addTodoHandler(newTask);
      this.setState({input: ""})
    }
  }

  render() { 
    return (
      <form>
        <input onChange={e=>this.updateInput(e.target.value)} type="text" className="todo-input" value={this.state.input} />
        <button className="todo-button" type="submit" onClick={this.submitHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    );
  }
}
 
export default Form;