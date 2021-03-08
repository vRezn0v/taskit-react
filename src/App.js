import { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

class App extends Component {
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