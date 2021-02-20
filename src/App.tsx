import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Math.random().toString(), text },
        ]);
    };

    const deleteTodoHandler = (id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler}></NewTodo>
            <TodoList items={todos} onDeleteTodo={deleteTodoHandler}></TodoList>
        </div>
    );
};

export default App;
