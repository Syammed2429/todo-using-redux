import { v4 as uuidv4 } from "uuid";

import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "./actionTypes";

const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: { title: title, id: uuidv4(), status: false },
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

const editTodoData = (data) => {
  return {
    type: EDIT_TODO,
    payload: data,
  };
};
export { addTodo, toggleTodo, deleteTodo, editTodoData };
