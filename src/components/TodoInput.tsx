import {useState} from "react";
import type { FC, FormEvent } from "react";
import { StyledForm, StyledInput } from "./styles";

interface TodoInputProps {
    onAdd: (terxt: string) => void
}

export const TodoInput: FC<TodoInputProps> = ({onAdd}) => {
    const [text , setText] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(text.trim()) {
            onAdd(text.trim())
            setText('')
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput 
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="Whats need to be done?"
            />
        </StyledForm>
    )
}