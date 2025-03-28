import { useDispatch, useSelector } from "react-redux";
import type { FC } from "react";
import { addTodo, toggleTodo, clearCompleted, changeFilter } from "../store/todoSlice";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { AppContainer, Header } from "./styles";
import { BottomContainer } from "./BottomContainer";
import { FilterState } from "../types";
import { selectFilteredTodosList, selectFilterState, selectActiveCounts } from "../store/selectors";

export const TodoApp: FC = () => {
    const todos = useSelector(selectFilteredTodosList)
    const filterState = useSelector(selectFilterState)
    const activeCounts = useSelector(selectActiveCounts)
    const dispatch = useDispatch()

    const handleAddTodo = (text: string) => dispatch(addTodo(text))
    const handleToggleTodo = (id: string) => dispatch(toggleTodo(id))
    const handleClear = () => dispatch(clearCompleted())
    const handleChangeFilter = (filter: FilterState) => dispatch(changeFilter(filter))

    return (
        <AppContainer>
            <Header>todos</Header>
            <TodoInput onAdd={handleAddTodo}/>
            <TodoList todos={todos} onToggle={handleToggleTodo} />
            <BottomContainer filterState={filterState} activeTodosCount={activeCounts} onClear={handleClear} onFilter={handleChangeFilter}/>
        </AppContainer>
    )
}