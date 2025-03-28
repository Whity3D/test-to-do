import { TodoApp } from '../TodoApp';
import { cleanAll, store } from '../../store';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ReactElement } from 'react';

describe('', () => {
  const renderWithProvider = (component: ReactElement) => {
    return render(<Provider store={store}>{component}</Provider>);
  };

  beforeEach(() => {
    store.dispatch(cleanAll());
  });

  test('adds todo', () => {
    renderWithProvider(<TodoApp />);
    const input = screen.getByPlaceholderText('Whats need to be done?');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.submit(input);

    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    renderWithProvider(<TodoApp />);
    const input = screen.getByPlaceholderText('Whats need to be done?');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.submit(input);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(screen.getByText('Test todo')).toHaveStyle('text-decoration: line-through');
  });
});
