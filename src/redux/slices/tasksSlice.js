import { createSlice } from '@reduxjs/toolkit';

const loadTasks = () => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
};

const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadTasks(),
  reducers: {
    addTask: (state, action) => {
      const updatedTasks = [...state, action.payload];
      saveTasks(updatedTasks);
      return updatedTasks;
    },
    deleteTask: (state, action) => {
      const updatedTasks = state.filter((_, idx) => idx !== action.payload);
      saveTasks(updatedTasks);
      return updatedTasks;
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;