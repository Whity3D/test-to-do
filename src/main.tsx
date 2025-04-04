import { store } from './store';
import { TodoApp } from './components/TodoApp.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </StrictMode>
);
