export const addTodo = (todo) => {
  return (dispatch) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };
};

export const updateTodo = (task) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_TODO", payload: task });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
};

export const fetchTodos = (count) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) =>
        dispatch({ type: "LOAD_TODOS", payload: json.slice(0, count - 1) })
      );
  };
};

export const clearTodos = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_TODOS" });
  };
};
