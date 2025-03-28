import { ReactElement } from "react"
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react'
import { Provider } from "react-redux"
import { store } from "../../store"
import { TodoApp } from "../TodoApp"

describe('', ()=>{
    const renderWithProvider = (component: ReactElement) => {
        return render(<Provider store={store}>{component}</Provider>)
    }

    test('adds todo',() => {
        renderWithProvider(<TodoApp/>)
        const input = screen.getByPlaceholderText('Whats need to be done?')
        const button = screen.getByText('Add')

        fireEvent.change(input, {target: {value: 'Test todo'}})
        fireEvent.click(button)

        expect(screen.getByText('Test todo')).toBeInTheDocument()
    })

    test('toggles todo completion', () => {
        renderWithProvider(<TodoApp />);
    const input = screen.getByPlaceholderText('Add new todo...');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(button);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(screen.getByText('Test todo')).toHaveStyle('text-decoration: line-through');
    })
})