// src/components/TaskList.js
import { useTaskContext } from '../context/TaskContext';  // Use the context

const TaskList = () => {
  const { tasks, removeTask, toggleTaskCompletion } = useTaskContext();  // Access tasks and functions from context

  if (tasks.length === 0) {
    return <p>No tasks available. Start adding some!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
