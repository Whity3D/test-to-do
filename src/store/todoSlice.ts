import type { TodoState } from '../types';
import { FilterState } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TodoState = {
  todos: [],
  filter: FilterState.All,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: 'id' + Math.random().toString(16).slice(2),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((t) => !t.completed);
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.filter = action.payload;
    },
    cleanAll: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, toggleTodo, clearCompleted, changeFilter, cleanAll } = todoSlice.actions;
export default todoSlice.reducer;
