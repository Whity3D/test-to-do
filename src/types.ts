export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  filter: FilterState;
}

export enum FilterState {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}
