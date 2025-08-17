import { useEffect, useReducer, useRef, useState } from "react";

// Reducer function (not a hook)
const todoReducer = (todos, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...todos,
                {
                    id: Date.now(),
                    name: action.payload,
                    complete: false,
                }
            ];
        case 'set':
            return action.payload;
        default:
            return todos;
    }
};

function TodoList() {
    const [tasks, dispatch] = useReducer(todoReducer, []);
    const [taskName, setTask] = useState('');
    const isFirstRender = useRef(true);

    // Load tasks from localStorage on mount
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('todos') || "[]");
        dispatch({ type: 'set', payload: storedTasks });
    }, []);

    // Save tasks to localStorage whenever they change (after first render)
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        localStorage.setItem('todos', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        const newTask = taskName.trim();
        if (!newTask) return;

        dispatch({ type: 'add', payload: newTask });
        setTask("");
    };

    return (
        <>
            <h2>Todo List</h2>
            <div>
                <label htmlFor="task">Task details</label>
                <input type="text" value={taskName} onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTask}>Add task</button>
            </div>
            <div>
                {tasks.length > 0 && (
                    <ul>
                        {tasks.map((t, i) => (
                            <li key={t.id}>
                                {i} - {t.name} - {t.complete ? 'Done' : 'Pending'}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default TodoList;