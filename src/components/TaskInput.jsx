import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/tasksSlice';
import './TaskInput.css';

const TaskInput = () => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('Medium');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTask({ text, priority }));
            setText('');
            setPriority('Medium');
        }
    };

    return (
        <div className="task-input-container">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default TaskInput;