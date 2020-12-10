import React from "react";

function TodoList({ todos = [], handleCompletedChanged }) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoListItem
                    todo={todo}
                    handleCompletedChanged={handleCompletedChanged}
                />
            ))}
        </div>
    );
}

function TodoListItem({ handleCompletedChanged, todo }) {
    const { text, completed, id } = todo;
    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleCompletedChanged(id)}
            />
            {text}
        </div>
    );
}

function App() {
    const [todos, setTodos] = React.useState([
        {
            id: 1,
            text: "todo 1",
            completed: false,
        },
        {
            id: 2,
            text: "todo 2",
            completed: false,
        },
        {
            id: 3,
            text: "todo 3",
            completed: false,
        },
    ]);
    const handleCompletedChanged = (id) => () => {
        setTodos(
            todos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            })
        );
    };
    return (
        <TodoList
            todos={todos}
            handleCompletedChanged={handleCompletedChanged}
        />
    );
}

export default App;
