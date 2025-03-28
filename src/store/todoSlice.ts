import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TodoState } from "../types";
import { FilterState } from "../types";

const initialState: TodoState = {
    todos: [],
    filter: FilterState.All
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>)=>{
            state.todos.push({
                id:  "id" + Math.random().toString(16).slice(2),
                text: action.payload,
                completed: false,
                createdAt: new Date(),
            })
        },
        toggleTodo: (state, action: PayloadAction<string>)=>{
            const todo = state.todos.find(t => t.id === action.payload)
            if(todo) todo.completed = !todo.completed
        },
        clearCompleted: (state) => {
            const filtered = state.todos.filter(t => !t.completed)
            state.todos = filtered
        },
        changeFilter: (state, action: PayloadAction<FilterState>) => {
            state.filter = action.payload
        }
    }
})

export const {addTodo, toggleTodo, clearCompleted, changeFilter} = todoSlice.actions
export default todoSlice.reducer