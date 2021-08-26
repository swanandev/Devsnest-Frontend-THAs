import { createSlice } from "@reduxjs/toolkit";
import TodoItem, { TodoItemType } from "../../components/TodoItem";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state: TodoItemType[], action) => {
      state.push(action.payload);
    },
    updateTodo: (state: TodoItemType[], action) => {
      let nT = state.filter((el) => el.id !== action.payload.id);
      state = [...nT, action.payload];
    },
    deleteTodo: (state: TodoItemType[], action) => {
      state = state.filter((el) => el.id !== action.payload);
    },
    clearTodos: (state) => {
      state = [];
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, clearTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
