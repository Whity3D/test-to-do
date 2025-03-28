import { TodoItem, TodosList, StyledText } from './styles';
import { css } from '@emotion/react';
import { FC } from 'react';
import type { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  onToggle: (is: string) => void;
}

export const TodoList: FC<TodoListProps> = ({ todos, onToggle }) => {
  return (
    <TodosList>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
          <StyledText
            css={css`
              text-decoration: ${todo.completed ? 'line-through' : 'none'};
            `}
          >
            {todo.text}
          </StyledText>
        </TodoItem>
      ))}
    </TodosList>
  );
};
