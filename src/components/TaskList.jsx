import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/slices/tasksSlice';
import './TaskList.css';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <ul className="task-list">
            {tasks.map((task, idx) => (
                <li key={idx} className="task-item">
                    <div>
                        <strong>{task.text}</strong> - <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                    </div>
                    <button onClick={() => dispatch(deleteTask(idx))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;