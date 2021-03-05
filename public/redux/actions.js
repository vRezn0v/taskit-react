import { ADD_TODO, TOGGLE_STATE, DELETE_TODO } from './actionTypes';

let nextTodoId= 0;

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    todo
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_STATE,
  payload: { id }
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
})