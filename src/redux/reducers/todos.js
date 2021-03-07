import { ADD_TODO, TOGGLE_STATE, DELETE_TODO, SET_FILTER } from '../actions/actionTypes';
import ls from 'local-storage';

var todos = ls.get('todos');
if (todos===undefined||todos===null) todos = [];

const initialState = {
  todos: todos,
  filter: 'NONE',
  filteredList: todos
}

const filterList = (state) => {
  var tl =(state.todos != null) ? state.todos : []
  switch (state.filter) {
    case "COMPLETED":
      tl = tl.filter(todo => todo.completed)
      break
    case "INCOMPLETE":
      tl = tl.filter(todo => !todo.completed)
      break
    default:
      tl = [...tl]
  }
  return tl
}

export default function todosReducer(state = initialState, action) {
  var newState
  switch (action.type) {
    case ADD_TODO: {
      const {id, text} = action.payload
      var task ={
        id: id,
        text: text,
        completed: false
      }

      newState = {
        ...state,
        todos: [...state.todos, task]
      }

      var flist = filterList(newState)
      newState.filteredList = flist;

      ls.set('todos', newState.todos)
      return newState;
    } 
    case DELETE_TODO: {
      const { id } = action.payload
      newState = {
        ...state,
        todos: state.todos.filter(todo => todo.id!==id)
      }

      flist = filterList(newState)
      newState.filteredList = flist;

      ls.set('todos', newState.todos)
      return newState
    }
    case TOGGLE_STATE: {
      const { id } = action.payload
      var temp = state.todos.map(todo => (todo.id===id)?{...todo,completed:!todo.completed}:todo )
      newState = {
        ...state,
        todos: temp
      }

      flist = filterList(newState)
      newState.filteredList = flist;

      ls.set('todos', newState.todos)
      return newState
    }
    case SET_FILTER: {
      const { filter } = action.payload
      var tempList = (state.todos != null) ? state.todos : []
      switch (filter) {
        case "COMPLETED":
          tempList = tempList.filter(todo => todo.completed)
          break
        case "INCOMPLETE":
          tempList = tempList.filter(todo => !todo.completed)
          break
        default:
          tempList = [...tempList]
      }

      return {
        ...state,
        filter: filter,
        filteredList: tempList
      }
    }
    default:
      return state
  }
}