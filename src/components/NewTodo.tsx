import React, { useRef } from "react";

type NewTodoProps = {
    onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const textTodo = textInputRef.current!.value;
        props.onAddTodo(textTodo);
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="text-todo">Todo Text</label>
                <input
                    type="text"
                    name="text-todo"
                    id="text-todo"
                    ref={textInputRef}
                />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    );
};
export default NewTodo;
