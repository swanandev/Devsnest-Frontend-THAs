const initState = [{ id: 0, title: "Task 1", completed: true }];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "UPDATE_TODO":
      let nT = state.filter((el) => el.id !== action.payload.id);
      return [...nT, action.payload];

    case "DELETE_TODO":
      return state.filter((el) => el.id !== action.payload);

    case "LOAD_TODOS":
      return action.payload;

    case "CLEAR_TODOS":
      return [];
    default:
      return state;
  }
};

export default todoReducer;
