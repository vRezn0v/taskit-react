import { ADD_TODO, TOGGLE_STATE, DELETE_TODO, SET_FILTER } from './actionTypes';
import {v4 as uuidv4} from 'uuid'

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    text: text
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_STATE,
  payload: { id }
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
})

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
})