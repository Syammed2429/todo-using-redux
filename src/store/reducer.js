import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "./actionTypes";

const initState = {
  todos: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === payload) {
            return {
              ...el,
              status: !el.status,
            };
          }
          return el;
        }),
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((el) => {
          if (el.id !== payload) {
            return el;
          }
        }),
      };
    }

    case EDIT_TODO: {
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              title: payload.title,
            };
          }
          return el;
        }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
