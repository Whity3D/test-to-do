import { RootState } from '.';
import { FilterState } from '../types';
import { createSelector } from '@reduxjs/toolkit';

const rootState = (state: RootState) => state.todos;

export const selectFilterState = createSelector(rootState, (state) => state.filter);

export const selectTodosList = createSelector(rootState, (state) => state.todos);

export const selectFilteredTodosList = createSelector(
  [selectTodosList, selectFilterState],
  (todos, filter) => {
    switch (filter) {
      case FilterState.Active:
        return todos.filter((it) => !it.completed);
      case FilterState.Completed:
        return todos.filter((it) => it.completed);
      default:
        return todos;
    }
  }
);

export const selectActiveCounts = createSelector(
  selectTodosList,
  (todos) => todos.filter((it) => !it.completed).length
);
