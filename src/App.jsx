import { useSelector } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Header from './components/Header';
import './App.css';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      <div className="app-container">
        {isAuthenticated ? (
          <div>
            <TaskInput />
            <TaskList />
          </div>
        ) : (
          <p>Please log in to manage your tasks.</p>
        )}
      </div>
    </>
  );
};

export default App;